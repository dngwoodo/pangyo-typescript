export {}
// 타입 단언(type assertion) - 내가 타입스크립트 너 보다 타입을 잘 알고 있으니 내가 정의한 타입으로 간주해라 라는 것.(as 사용)
const g; // any
const h = g // j = any, g = any
const j = g as string; // h = string, g = any


// DOM API 조작
const div = document.querySelector('div') as HTMLDivElement
div.innerText 
// type assertion을 쓰지 않으면 HTMLDivElement | null이 뜨기 떄문에 null을 없애기 위해 사용한다.
// 두번째 방법으로는 tsconfig.json에서 strict: false로 하면 null이 사라진다.