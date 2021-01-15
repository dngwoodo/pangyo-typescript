export {}
// 숫자형 이넘
// enum Shoes {
//     // 이넘들에 마우스를 호버하면 값이 없으므로 자동으로 숫자형 이넘으로 표시 된다.
//     Nike, // 0
//     Adidas, // 1
//     Sth // 2
// }

// const myShoes = Shoes.Nike;
// console.log(myShoes); // 0

// 문자형 이넘
// enum Shoes {
//     // 이넘들에 마우스 호버 시 값한번 확인해보면 '나이키' 가 아닌 형변환으로 되어 들어가 있음.
//     Nike = '나이키',
//     Adidas = ' 아디다스',
// }

// const myShoes = Shoes.Nike;
// console.log(myShoes); // 값은 나이키로 제대로 뽑힘.

// 이넘 활용 사례
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('정답입니다.');
        
    }
    if(answer === Answer.No){
        console.log('오답입니다.');
        
    }
}

// 이넘을 활용하면 정의된 데이터 값들만 넣을 수 있다.
askQuestion(Answer.Yes);
askQuestion('Yes'); // error, 정의된 값이 아니기 때문에 에러가 표시된다.