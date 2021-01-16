export {}
// 백엔드에서 받아오는 데이터
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> { // return 값이 없으므로 잠시 오류 남. 신경 안써도 된다.
    // ..
}

// 1. Pick
// Pick이라는 유틸리티 타입을 이용하여 ProductDetail이라는 인터페이스를 따로 만들지 않고 사용가능하다.
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem){

}

// 2. Omit
// Pick이라는 반대이다. 적어준 프로퍼티를 제외한 것들을 사용한다.
type ShoppingItem2 = Omit<Product, 'brand' | 'stock'>