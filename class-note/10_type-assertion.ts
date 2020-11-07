// 타입 단언(type assertion) - 내가 타입스크립트 너 보다 타입을 잘 알고 있으니 내가 정의한 타입으로 간주해라 라는 것.(as 사용)
var g; // any
var h = g // j = any, g = any
var j = g as string; // h = string, g = any


// DOM API 조작
var div = document.querySelector('div') as HTMLDivElement
div.innerText
