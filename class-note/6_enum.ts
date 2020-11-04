// 숫자형 이넘
// enum Shoes {
//     // 이넘들에 마우스를 호버하면 값이 없으므로 자동으로 숫자형 이넘으로 표시 된다.
//     Nike, // 0
//     Adidas, // 1
//     Sth // 2
// }

// var myShoes = Shoes.Nike;
// console.log(myShoes); // 0

// 문자형 이넘
enum Shoes {
    // 이넘들에 마우스 호버 시 값한번 확인해보면 '나이키' 가 아닌 형변환으로 되어 들어가 있음.
    Nike = '나이키',
    Adidas = ' 아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 값은 나이키로 제대로 뽑힘.