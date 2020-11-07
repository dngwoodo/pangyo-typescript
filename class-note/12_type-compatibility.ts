// 타입 호환 예제

// 인터페이스
interface Developer6 {
    name: string;
    skill: string;
}

interface Person6 {
    name: string;
}

var developer : Developer6;
var person : Person6;

developer = person; // 에러(인터페이스 안의 구조가 같지 않거나 범위가 더 좁아서 에러 남.)
person = developer; // 에러 나지 않음

// 타입 스크립트는 interface, class 와 같은 것들을 비교하는 것이 아니라 내부에 있는 name : string( 속성 : 타입 ) 과 같은 것들을 비교 한다.
// 예를 들어보자.
interface Developer7 {
    name: string;
    skill: string;
}

class Person7 {
    name: string;
    skill: string;
}

var developer: Developer7;
developer = new Person7() // 에러가 나지 않음.

// 타입 호환 - 함수편
var add2 = function(a:number){
    //...
}

var sum2 = function(a:number, b: number ){
    // ...
}

sum2 = add2;
add2 = sum2;

// 타입 호환 - 제네릭편
interface Empty<T>{
    //...
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // 에러 안남 <- 아직 Empty 인터페이스 구조에 아무것도 없기 때문이다. 
empty2 = empty1; // 에러 안남 <- 아직 Empty 인터페이스 구조에 아무것도 없기 때문이다.

interface NotEmpty<T>{
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // 에러
notempty2 = notempty1; // 에러

