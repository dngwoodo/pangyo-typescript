const thirdModule = {
    thirdModuleProperty: 'thirdModuleProperty'
};
  
// https://lofty87.github.io/nodejs/typescript/20180830/typescript-import-export 참고
// 이 부분은 default로 받을수가 없기 때문에 가져가는 쪽에서 import * as 를 사용해야 한다. 
module.exports = thirdModule;

