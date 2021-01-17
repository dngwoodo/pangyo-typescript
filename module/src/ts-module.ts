const tsModule = 'tsModule';
const tsModuleProperty = 'tsModuleProperty';

export { tsModuleProperty };
export default tsModule;

// 실제 트랜스파일 결과
// // before transpile
// export { tsModuleProperty };
// export default tsModule;

// // transpile
// exports.tsModuleProperty = tsModuleProperty;
// exports.default = tsModule;