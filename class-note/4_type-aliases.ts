// 인터페이스와 타입별칭의 차이점.

// interface Person2 {
//     name: string;
//     age: number;
// }

type Person2 = {
    name: string;
    age: number;
}

var seho: Person2 = { // Person2에 마우스를 hover시 표시되는 글이 다름.
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo){}