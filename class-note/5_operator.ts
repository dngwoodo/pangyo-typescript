// Union Type - 하나이상의 타입을 사용할 수 있게 해준다.
function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString(); // any를 쓰면 자동완성이 되지 않음. 해당 타입에 따라 api를 사용하려면 유니온타입을 써야함.
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number'); // 에러 발생 시킴
}

logMessage('hello');
logMessage(100);

// 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정

// Union Type의 특징
interface Developer {
    name: string;
    skil: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){
    // Developer도 되고 Person도 되어야 되기 때문에 공집합에 해당하는 속성만 적용된다.
    someone.name
    someone.age
    someone.skil
}

// intersection Type - '&'
var dng: string | number | boolean;
var capt: string & number & boolean;

function askSomeone2(someone: Developer & Person){
    // Developer 와 Person의 합집합에 해당하는 속성들이 적용된다.
    someone.name
    someone.age
    someone.skil
}