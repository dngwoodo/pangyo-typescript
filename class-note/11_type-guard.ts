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

var tony = introduce();
console.log(tony.name); // skill, age는 불가함.

if((tony as Developer).skill){ // type assertion(타입 단언)을 통해 사용 가능.
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if((tony as Person).age){ // type assertion(타입 단언)을 통해 사용 가능.
    var age = (tony as Developer).age;
    console.log(age);
}