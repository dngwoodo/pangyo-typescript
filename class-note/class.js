// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age){
        console.log('인스턴스가 생성 되었습니다')
        this.name = name;
        this.age = age;
    }
}

var kdw = new Person('동우', 30) // 인스턴스가 생성 되었습니다.
console.log(kdw) // Person {name: '동우', age: 30}