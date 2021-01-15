export {}
class Person {
    private name: string; // 멤버 변수 - private는 밖에서 사용 불가, public는 어디서든 사용가능(default로 지정되어있음)
    public age: number;
    readonly long : string; // 읽기만 가능

    constructor(name: string, age: number, long: string){
        this.name = name; // 멤버 변수. 클래스 내  모든 곳에서 사용가능
        this.age = age;
        this.long = long;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {
    // ...
}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App(){
    return <div>Hello World</div>
}

// Vue
new Vue({
    el: '#app',
    setup(){}
})