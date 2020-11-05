// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);

function logText<T>(text: T): T{
    console.log(text);
    return text;
}

logText<string>('hi') // 넘길 타입을 여기서 정한다.
