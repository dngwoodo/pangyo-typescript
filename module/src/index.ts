import tsModule, { tsModuleProperty } from './ts-module';
// thirdModule은 module.exports에 존재하지 않기 때문에 import * as를 활용해야 한다.
import thirdModule, { thirdModuleProperty } from './3rd-module';

// ts-module.ts
console.log(tsModule);
console.log(tsModuleProperty);

// third-module.js
console.log(thirdModule);
console.log(thirdModuleProperty);

// 실제 transpile 결과
// // before transpile
// import * as thirdModule from './3rd-module';
// console.log(thirdModule);

// // transpile
// var thirdModule = require("./3rd-module");
// console.log(thirdModule);