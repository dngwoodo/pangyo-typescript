export {}
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

// 제네릭의 타입 제한 - 타입에 대한 힌트를 조금 더 줄 수 있는 방법이다.
// function logTextLength<T>(text: T[]): T[] { 
//     console.log(text.length) // T만 주게 되면 빨간 줄이 뜨게 되는데 아직 타입을 모르기 때문이다. 그래서 힌트를 줄 수 있는데 T[] 이렇게 주게 된다.
//     return text;
// }

// logTextLength<string>('hi'); // 하지만 여기서 꼬이게 된다. 문자열도 들어가도 무방한데 hi에 빨간 줄 표시. 이건 어쩔 수 없는 듯 하다.

// 제네릭 타입 제한 2 - 정의된 타입(인터페이스) 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T{
    text.length; // 인터페이스에 여기 length에 대한 타입정의를 해주는 것이다.
    return text;
}

logTextLength('a'); // a에는 length가 존재한다. 문자열이기 때문
logTextLength(10); // error, 10에는 length가 존재하지 않는다.
logTextLength({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{ // 키 값만 들어가게 제한 시킨다.
    return itemOption
}

getShoppingItemOption('name');