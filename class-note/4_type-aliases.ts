export {}
// 인터페이스와 타입별칭의 차이점.

// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

const seho: Person = { // Person에 마우스를 hover시 표시되는 글이 다름.
    name: '세호',
    age: 30
}

type MyString = string;
const str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo){}

// type-aliases vs interface
// 둘의 가장 큰 차이점은 타입의 확장 가능 / 불가능이다.
// 인터페이스는 확장이 가능하지만 타입별칭은 불가능하다.