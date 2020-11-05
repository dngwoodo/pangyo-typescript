// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text: T): T{
//     console.log(text);
//     return text;
// }

// logText<string>('hi') // 넘길 타입을 여기서 정한다.


// 제네릭을 사용하지 않으면 이렇게 중복코드를 적게 된다.
function logText(text: string){
    console.log(text);
    text.split('').reverse().join('');
    return Text;
}

function logNumber(num: number){
    console.log(num);
    return num;
}

logText('a');
logText(10);
const num = logNumber(10);
logText(true);

logText('a');
logText(10);
logText(true);