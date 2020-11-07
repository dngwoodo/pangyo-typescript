var a = 10;

function getA(b = 10) { // getA에 마우스 호버를 해보면 타입추론된 값이 나온다.
    var c = 'hi';
    return b + c;
}

10 + '190' // 1010 <- 문자와 숫자를 더하면 문자로 나옴


