interface User {
    age: number;
    name: string;
} // 동일한 규칙으로 사용하겠다고 상호간의 약속을 의미

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용 <- 활용도가 매우 높다
function getUser(user: User){
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 28
}

getUser(capt);

// ts에서 활용도가 가장 높은 부분이 api에서 데이터를 받아와서 그 데이터들을 
// 인터페이스로 정의해주고 활용하는 경우이다.
// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;

sum = function(a:number, b: number): number{
    return a + b
}


// 인덱싱
interface StringArray {
    [index: number]: string
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0] // 'a' 
arr[0] = 10 // string값이 아니기 때문에 빨간 줄 표시

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp // RegexExpression
}

var obj: StringRegexDictionary = {
    sth: /abc/,
}

Object.keys(obj).forEach(function(value){}) // value값을 추론해준다.

obj['sth'] = 'a'
