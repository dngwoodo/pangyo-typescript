// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
const str: string = 'hello';

// TS 숫자 선언
const num:number = 10;

// TS 배열 선언
const arr: Array<number> = [1,2,3];
const heroes: Array<string> = ['1','2','3', 10]; // tslint에 의해 빨간줄 표시가 된다.
const items: number[] = [1,2,3]; // Array<number>과 같다.

// TS 튜플
const address: [string, number] = ['1', 2]; // 각각 인덱스에 타입을 지정 가능

// TS 객체
const obj: object = {};
const person: object = {
    name: 'kdw',
    age: 100
}

const person2: { name: string, age: number } = {
    name: 'kdw',
    age: 100
}

// TS 진위값
const show: boolean = true