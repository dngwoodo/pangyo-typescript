// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text: T): T{
//     console.log(text);
//     return text;
// }

// logText<string>('hi') // 넘길 타입을 여기서 정한다.


// 제네릭을 사용하지 않으면 이렇게 중복코드를 적게 된다.
// function logText(text: string){
//     console.log(text);
//     text.split('').reverse().join('');
//     return Text;
// }

// function logNumber(num: number){
//     console.log(num);
//     return num;
// }

// logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);

// logText('a');
// logText(10);
// logText(true);

// 제네릭을 사용하지 않았을 경우 하드코딩을 피하는 방법 - 유니온 사용
// function logText(text: string | number){
//     console.log(text);
//     text.split(''); // number도 들어갈 수 있기 때문에 유니온을 써도 여전히 오류 발생
//     return text;
// }

// logText('a');
// logText(10);

// 제네릭을 사용하는 방법
// <T> <- 난 제네릭을 쓸거야.
// T <- 함수를 정의할때 받은 타입을 파라미터 타입으로 쓰겠다.
// T <- 리턴할때도 쓰겠다.
function logText<T>(text: T): T{
    console.log(text);
    return text;
}

const str = logText<string>('hi!') // <string>을 <T>에 대입하는것과 같다. 마우스를 올려보자.
str.split('')
const login = logText<boolean>(true);

// 제네릭 정리
// 함수를 정의할 때 타입을 비워둔 상태에서 호출할 때 타입을 정하는 것
// 타입을 추론해서 최종 반환값까지 타입을 넣어줄 수 있는 것

// 인터페이스에 제네릭 선언 방법
// interface DropDown {
//     value: string;
//     selected: boolean;
// }

// const obj: DropDown = { value: 'abc', selected: false }

interface DropDown<T> {
    value: T;
    selected: boolean
}

const obj: DropDown<string> = { value: 'abc', selected: false };