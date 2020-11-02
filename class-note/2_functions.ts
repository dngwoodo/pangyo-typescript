// 함수의 파라미터에 타입을 정의하는 방식
function sum2(a: number, b: number){
    return a + b;
}

sum2(10, 20)

// 함수의 반환 값에 타입을 정의하는 방식 - 리턴 지워보면 오류남
function add(): number {
    return 10
}

// 함수의 파라미터, 반환 타입 통합 정의
function sum3(a: number, b:number): number{
    return a + b;
}

// 파라미터 제한하는 방식
function sum4(a: number, b:number): number{
    return a + b;
}

sum4(10, 20, 30, 40); // ts에서 알아서 파라미터 갯수를 정해준다.

// 함수의 선택적 파라미터(옵셔널 파라미터)
function log(a: string, b?: string, c?:string){

}

log('hello')
log('hello', 'hi')
log('hello', 'hi', 'omg') // 한개를 주든 2개를 주든 3개를 주든 오류 발생 x
