export {}
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making'}
}

const tony2 = introduce();
console.log(tony2.name); // skill, age는 불가함.

if((tony2 as Developer).skill){ // type assertion(타입 단언)을 통해 사용 가능.
    const skill = (tony2 as Developer).skill;
    console.log(skill);
} else if((tony2 as Person).age){ // type assertion(타입 단언)을 통해 사용 가능.
    const age = (tony2 as Person).age;
    console.log(age);
}


// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer { // 타입 가드 함수
    return (target as Developer).skill !== undefined; // skill이 존재한다면 Developer타입이다.
}

if(isDeveloper(tony2)){
    tony2.skill // 에러 안남
    tony2.age // 에러
} else {
    tony2.age // 에러 안남
    tony2.skill // 에러
}