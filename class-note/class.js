// ES2015 이전 문법
// 이전 문법으로도 잘 구현 되었지만 객체지향언어를 사용하는 개발자들을 위해 class라는 것이 만들어짐.
function Person(name, age){
    this.name = name;
    this.age = age;
}

const kdw = new Person('동우', 30)

// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age){
        console.log('인스턴스가 생성 되었습니다')
        this.name = name;
        this.age = age;
    }
}

const kdw = new Person('동우', 30) // 인스턴스가 생성 되었습니다.
console.log(kdw) // Person {name: '동우', age: 30}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain 참고
// Built-in Javascript API 또는 Javascript Native API