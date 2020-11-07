interface Developer5 {
    name: string;
    skill: string;
}

interface Person5 {
    name: string;
    age: number;
}

function introduce(): Developer5 | Person5 {
    return { name: 'Tony', age: 33, skill: 'Iron Making'}
}

var tony2 = introduce();
console.log(tony2.name); // skill, age는 불가함.

if((tony2 as Developer5).skill){ // type assertion(타입 단언)을 통해 사용 가능.
    var skill = (tony2 as Developer5).skill;
    console.log(skill);
} else if((tony2 as Person5).age){ // type assertion(타입 단언)을 통해 사용 가능.
    var age = (tony2 as Person5).age;
    console.log(age);
}


// 타입 가드 정의
function isDeveloper(target: Developer5 | Person5): target is Developer5 { // 타입 가드 함수
    return (target as Developer5).skill !== undefined; // skill이 존재한다면 Developer타입이다.
}

if(isDeveloper(tony2)){
    tony2.skill // 에러 안남
    tony2.age // 에러
} else {
    tony2.age // 에러 안남
    tony2.skill // 에러
}