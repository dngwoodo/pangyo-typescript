export {}
// 타입 호환 예제

// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

let developer : Developer;
let person : Person;

developer = person; // 에러(인터페이스 안의 구조가 같지 않거나 범위가 더 좁아서 에러 남.)
person = developer; // 에러 나지 않음

// 타입 스크립트는 interface, class 와 같은 것들을 비교하는 것이 아니라 내부에 있는 name : string( 속성 : 타입 ) 과 같은 것들을 비교 한다.
// 예를 들어보자.
interface Developer2 {
    name: string;
    skill: string;
}

class Person2 {
    name: string;
    skill: string;
    constructor(name: string, skill: string){
        this.name = name
        this.skill = skill
    }
}

let developer2: Developer2;
developer2 = new Person2('dongwoo', 'coding') // 에러가 나지 않음.

// 타입 호환 - 함수편
let add = function(a:number){
    //...
}

let sum = function(a:number, b: number ){
    // ...
}

sum = add;
add = sum; // error, 매개변수가 한개 적음

// 타입 호환 - 제네릭편
interface Empty<T>{
    //...
}

let empty1: Empty<string> | undefined;
let empty2: Empty<number> | undefined;
empty1 = empty2; // 에러 안남 <- 아직 Empty 인터페이스 구조에 아무것도 없기 때문이다. 
empty2 = empty1; // 에러 안남 <- 아직 Empty 인터페이스 구조에 아무것도 없기 때문이다.

interface NotEmpty<T>{
    data: T;
}

let notempty1: NotEmpty<string> | undefined;
let notempty2: NotEmpty<number> | undefined;
notempty1 = notempty2; // 에러
notempty2 = notempty1; // 에러

