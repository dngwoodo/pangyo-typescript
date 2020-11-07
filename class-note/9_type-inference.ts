// 타입 추론 기본 1
var a = 10;

function getA(b = 10) { // getA에 마우스 호버를 해보면 타입추론된 값이 나온다.
    var c = 'hi';
    return b + c;
}

10 + '190' // 1010 <- 문자와 숫자를 더하면 문자로 나옴


// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입 추론 기본 3
interface Dropdown<T>{
    value: T;
    title: string;
}

interface DropdownDetail<K> extends Dropdown<K>{ // DropdownDetail에 제네릭 값을 받아서 Dropdown 제네릭에도 전달
    description: K;
}

var obj22: DropdownDetail<string> = {
    // value, title, description 셋중 하나만 없어도 에러 뜸.
    // 타입도 추론해서 설정해줌.
    value: 'aa',
    title: '111',
    description: '222222'
}

// Best Common Type
var arr222 = [1,2,true, true, 'a']; // arr222에 마우스를 호버해보면 유니온타입을 사용하여 타입설정을 알아서 추론해준다. (string | number | boolean)[]
