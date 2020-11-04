// Union Type - 하나이상의 타입을 사용할 수 있게 해준다.
function logMessage(value: string | number){
    console.log(value)
}

logMessage('hello');
logMessage(100);
