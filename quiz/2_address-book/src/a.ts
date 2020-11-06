function fetchItems(): string[] {
  const items = ['a', 'b', 'c'];
  return items;
}
const result = fetchItems();
console.log(result); // 마우스 호버해보면 string[]이 나옴

// 비동기 함수
function fetchItems2(): Promise<string[]> {
  // 커맨드를 누르고 프라미스가 어떻게 타입지정이 되어있는지 확인해보자
  const items: string[] = ['a', 'b', 'c'];
  return new Promise(function (res) {
    // fetchItem2가 실행되는 시점에서 타입스크립트가 프라미스가 어떤 값을 반환할지를 모른다.
    res(items);
  });
}
fetchItems();

// 프라미스는 제네릭으로 타입을 받게 되어있다. 그 이유는 함수가 실행되는 시점에서 프라미스안에 비동기 로직을 타입스크립트가 이해하지 못하기 때문이다.
