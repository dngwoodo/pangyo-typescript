import axios from 'axios'; // 해당 라이브러리 안에 index.d.ts가 존재함.

// https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file <- 외부라이브러리에 * as 를 사용하 이유
import * as Chart from 'chart.js'; // @types/chat.js/index.d.ts를 불러옴. 대부분의 라이브러리가 이렇게 사용됨.

// utils
function $(selector: string) {
  return document.querySelector(selector);
}
function getUnixTimestamp(date: Date | string | number) {
  // 사람마다 틀리긴 하지만 구체적으로 적는게 좋아보임.
  return new Date(date).getTime(); // cursor올려보면 string | number | Date 라고 되어있음.
}

// // DOM
// let a: Element | HTMLElement | HTMLParagraphElement; // 순서대로 상위 엘러먼트임.
// $의 반환값이 Element이기 떄문에 변수에 타입을 HTMLSpanElement로 해주면 에러가 뜸. 이유는 Element에 HTMLSpanElement보다 가진 타입이 적기 때문임.
const confirmedTotal = $('.confirmed-total') as HTMLSpanElement; // 그래서 type assertion을 이용하여 타입을 정해줌.
const deathsTotal = $('.deaths') as HTMLParagraphElement; // 그래서 type assertion을 이용하여 타입을 정해줌.
const recoveredTotal = $('.recovered') as HTMLParagraphElement; // 그래서 type assertion을 이용하여 타입을 정해줌.
const lastUpdatedTime = $('.last-updated-time') as HTMLParagraphElement; // 그래서 type assertion을 이용하여 타입을 정해줌.
const rankList = $('.rank-list');
const deathsList = $('.deaths-list');
const recoveredList = $('.recovered-list');
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

function createSpinnerElement(id: string) {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', id);
  wrapperDiv.setAttribute(
    'class',
    'spinner-wrapper flex justify-center align-center'
  );
  const spinnerDiv = document.createElement('div');
  spinnerDiv.setAttribute('class', 'ripple-spinner');
  spinnerDiv.appendChild(document.createElement('div'));
  spinnerDiv.appendChild(document.createElement('div'));
  wrapperDiv.appendChild(spinnerDiv);
  return wrapperDiv;
}

// state
let isDeathLoading = false;
const isRecoveredLoading = false;

// api
function fetchCovidSummary() {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

enum CovidStatus {
  Confirmed = 'confirmed',
  Recovered = 'recovered',
  Deaths = 'deaths',
}

function fetchCountryInfo(countryCode: string, status: CovidStatus) {
  // params: confirmed, recovered, deaths <- status는 애들로 고정되어 있음. postman 참고. 그래서 이넘을 활용함.
  const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
  return axios.get(url);
}

// methods
function startApp() {
  setupData();
  initEvents();
}

// events
function initEvents() {
  rankList.addEventListener('click', handleListClick);
}

async function handleListClick(event: any) {
  // async, await를 이해하기 위해선 --lib 옵션이 필요하다.
  let selectedId;
  if (
    event.target instanceof HTMLParagraphElement ||
    event.target instanceof HTMLSpanElement
  ) {
    selectedId = event.target.parentElement.id;
  }
  if (event.target instanceof HTMLLIElement) {
    selectedId = event.target.id;
  }
  if (isDeathLoading) {
    return;
  }
  clearDeathList();
  clearRecoveredList();
  startLoadingAnimation();
  isDeathLoading = true;
  const { data: deathResponse } = await fetchCountryInfo(
    selectedId,
    CovidStatus.Deaths
  );
  const { data: recoveredResponse } = await fetchCountryInfo(
    selectedId,
    CovidStatus.Recovered
  );
  const { data: confirmedResponse } = await fetchCountryInfo(
    selectedId,
    CovidStatus.Confirmed
  );
  endLoadingAnimation();
  setDeathsList(deathResponse);
  setTotalDeathsByCountry(deathResponse);
  setRecoveredList(recoveredResponse);
  setTotalRecoveredByCountry(recoveredResponse);
  setChartData(confirmedResponse);
  isDeathLoading = false;
}

function setDeathsList(data: any) {
  const sorted = data.sort(
    (a: any, b: any) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
  );
  sorted.forEach((value: any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class', 'deaths');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    deathsList.appendChild(li);
  });
}

function clearDeathList() {
  deathsList.innerHTML = null;
}

function setTotalDeathsByCountry(data: any) {
  deathsTotal.innerText = data[0].Cases;
}

function setRecoveredList(data: any) {
  const sorted = data.sort(
    (a: any, b: any) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
  );
  sorted.forEach((value: any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class', 'recovered');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    recoveredList.appendChild(li);
  });
}

function clearRecoveredList() {
  recoveredList.innerHTML = null;
}

function setTotalRecoveredByCountry(data: any) {
  recoveredTotal.innerText = data[0].Cases; // recoveredTotal가 Element이기 때문에 innerText에서 에러가 난다.
}

function startLoadingAnimation() {
  deathsList.appendChild(deathSpinner);
  recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
  deathsList.removeChild(deathSpinner);
  recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
  const { data } = await fetchCovidSummary();
  setTotalConfirmedNumber(data);
  setTotalDeathsByWorld(data);
  setTotalRecoveredByWorld(data);
  setCountryRanksByConfirmedCases(data);
  setLastUpdatedTimestamp(data);
}

function renderChart(data: any, labels: any) {
  const ctx = $('#lineChart').getContext('2d');
  Chart.defaults.global.defaultFontColor = '#f5eaea';
  Chart.defaults.global.defaultFontFamily = 'Exo 2';
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Confirmed for the last two weeks',
          backgroundColor: '#feb72b',
          borderColor: '#feb72b',
          data,
        },
      ],
    },
    options: {},
  });
}

function setChartData(data: any) {
  const chartData = data.slice(-14).map((value: any) => value.Cases);
  const chartLabel = data
    .slice(-14)
    .map((value: any) =>
      new Date(value.Date).toLocaleDateString().slice(5, -1)
    );
  renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data: any) {
  confirmedTotal.innerText = data.Countries.reduce(
    (total: any, current: any) => (total += current.TotalConfirmed),
    0
  );
}

function setTotalDeathsByWorld(data: any) {
  deathsTotal.innerText = data.Countries.reduce(
    (total: any, current: any) => (total += current.TotalDeaths),
    0
  );
}

function setTotalRecoveredByWorld(data: any) {
  recoveredTotal.innerText = data.Countries.reduce(
    (total: any, current: any) => (total += current.TotalRecovered),
    0
  );
}

function setCountryRanksByConfirmedCases(data: any) {
  const sorted = data.Countries.sort(
    (a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed
  );
  sorted.forEach((value: any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item flex align-center');
    li.setAttribute('id', value.Slug);
    const span = document.createElement('span');
    span.textContent = value.TotalConfirmed;
    span.setAttribute('class', 'cases');
    const p = document.createElement('p');
    p.setAttribute('class', 'country');
    p.textContent = value.Country;
    li.appendChild(span);
    li.appendChild(p);
    rankList.appendChild(li);
  });
}

function setLastUpdatedTimestamp(data: any) {
  lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();
