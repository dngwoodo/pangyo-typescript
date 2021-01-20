interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// const capt: Hero = {}; // error

const capt = {} as Hero; // not error, type assertion을 쓰면 처음에 name과 skill이 없어도 에러가 뜨지 않는다.
capt.name = 'capt';
capt.skill = 'shield';

let a: string | null;
a!; // "애는 무조건 값이 있어"라는 뜻임. 그래서 문제가 될 수 있다. 왜냐하면 위에서 타입단언으로 타입을 정의하면 값이 없어도 에러가 안뜨기 때문이다.
