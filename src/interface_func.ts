// 以变量方式定义
// let minus: (x: number, y: number) => number;
// minus = (a, b) => a - b;

// 以接口方式定义
interface Minus {
  (x: number, y: number): number;
}

// 以类型别名方式定义
// type Minus = (x: number, y: number) => number;

// 函数具体实现
let minus: Minus = (a, b) => a - b;

//混合类型接口
interface Lib {
  (): void; //本身是一个函数
  version: string; //属性
  doSomethind(): void; //方法
}

// 混合类型接口的具体函数实现：
let lib: Lib = (() => {}) as Lib;
lib.version = "v.1.0";
lib.doSomethind = () => {};
