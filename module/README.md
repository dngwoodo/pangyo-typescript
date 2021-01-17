# 정리
ES6의 모듈 시스템을 이용하고 나서 ES5 이하를 타겟으로 잡으면 CommonJS 모듈 로더로 바뀌게 된다. module.exports나 exports로 컴파일 되서 바뀌게 되면 ES6 모듈 시스템에서 export default 해놓은 부분이 exports.default라는 곳에 저장되는 코드가 생성된다. 그래서 index.ts에서 ts가 아닌 js파일의 CommonJS로 export 되어진 모듈을 불러오게 되면 컴파일 시 exports.default에 저장되는 코드가 없으므로 undefined가 뜨게 된다.

```javascript
// ./3rd-module.js
const thirdModule = {
  thirdModuleProperty: 'thirdModuleProperty'
};

module.exports = thirdModule;
// exports.default = thirdModule; // 이 부분을 추가해주면 된다.
```

그래서 js파일에 exports.default = ... 를 직접 해준다거나 import * as 를 사용하면 해결 된다. import * as 를 사용하게 되면 제대로 동작하게 된다.

```javascript
// index.ts

// import * as를 썻을 경우
// before transpile
import * as thirdModule from './3rd-module';
console.log(thirdModule);

// transpile
var thirdModule = require("./3rd-module");
console.log(thirdModule);

// before transpile
import thirdModule from './3rd-module';
console.log(thirdModule);

// import * as를 쓰지 않았을 경우
// transpile
var thirdModule = require("./3rd-module").default; // undefined, export default를 감지하면 트랜스파일 시 default가 알아서 붙게 된다.
console.log(thirdModule);

```