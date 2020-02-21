// 类型判断
//==================
// 基础类型推断
let a1;
let a2 = 1;
let a3 = [];
let a4 = ["1"];
let a5 = (x = 1) => x + 1;

//最佳通用类型推断
let a6 = [1, null];

//上下文类型推断,event 推断为 KeyboardEvent
//PS：在我个人编辑器中不知为何没有推断出KeyboardEvent，而是 any 类型。
window.onload = (event: any) => {};

// 使用类型断言推断 TS 的类型推断
interface Foo {
  bar: number;
}

// 但类型断言可能会使得我们遗漏某些属性，忘记赋值
let foo = {} as Foo;
foo.bar = 1;

// 最好还是直接指定变量类型
// let foo: Foo = {
//   bar: 1
// };

// 类型兼容
//=================
let b1: string = "a";
// b1 = null; //"strictNullChecks": false时，string 类型是兼容null类型的

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };

// x = y;
// y = x; //不兼容，编译器会报错

//函数兼容
//=========
//Handler 是目标类型，参数是源类型
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}
// 如果需要目标函数兼容源函数，需要同时满足三个条件：
// 1）参数个数：目标函数的参数个数必须多于源函数参数个数
let handler1 = (a?: number, b?: number) => {};
hof(handler1);
// let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2);

// 可选参数和剩余参数
let handler3 = (a: number, b: number) => {};
let handler4 = (a?: number, b?: number) => {};
let handler5 = (...args: number[]) => {};

// 固定参数可以兼容可选参数和剩余参数
handler3 = handler4;
handler3 = handler5;

// 可选参数不兼容固定参数和剩余参数，会报错
// handler4 = handler3;
// handler4 = handler5;

// 剩余参数可以兼容固定参数和可选参数
handler5 = handler3;
handler5 = handler4;

// 2）参数类型：参数类型必须要匹配
let handler6 = (a: string, b: string) => {};
// handler3 = handler6;

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}

// let p3d = (point: Point3D) => {};
// let p2d = (point: Point2D) => {};
// p3d = p2d;
// p2d = p3d;//报错

// 与对象接口的兼容性正好相反
// let p3d: Point3D = { x: 1, y: 1, z: 1 };
// let p2d: Point2D = { x: 1, y: 1 };
// p3d = p2d;//报错
// p2d = p3d;

// 3)返回类型：目标函数的返回值必须与源函数的返回值类型相同或是它的子类型
// let f1 = () => ({ name: "Alice" });
// let f2 = () => ({ name: "Alice", location: "Beijing" });
// f1 = f2;
// f2 = f1;

// 函数重载
//=========
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}
// 多添加了参数，是不兼容的,会报错
// function overload(a: any, b: any, c: any): any { }

// 枚举类型兼容性
//=============
enum Fruit {
  Apple,
  Banana
}
enum Color {
  Red,
  Yello
}
// 枚举类型和 number 类型兼容
let fruit: Fruit.Apple = 3;
let num: number = Fruit.Apple;
// 枚举之间完全不兼容
// let color:Color.Red = Fruit.Apple

// 类兼容性
//=========
// 静态成员和构造函数是不参与比较的。
// 如果两个类具有相同的实例成员，那么它们的实例就是相互兼容的
// class A {
//   constructor(p: number, q: number) {}
//   id: number = 1;
// }
// class B {
//   constructor(p: number) {}
//   id: number = 2;
//   static s = 1;
// }
// let a = new A(1, 2);
// let b = new B(1);

// a = b;
// b = a;

// 两个类中含有相同的私有成员，不兼容
// class A {
//   constructor() {}
//   private name: string = "";
// }
// class B {
//   constructor() {}
//   private name: string = "";
// }
// let a = new A();
// let b = new B();

// a = b;
// b = a;

// 父类中含有私有成员，父子类的实例兼容
// class A {
//   constructor() {}
//   private name: string = "";
// }
// class B extends A {}
// let a = new A();
// let b = new B();

// a = b;
// b = a;

// 泛型兼容性
//==========
//泛型接口没有成员时相互兼容
// interface Empty<T> {}
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2;
// obj2 = obj1;

//泛型接口含有成员时不兼容
// interface Empty<T> {
//   value: T;
// }
// let obj1: Empty<number> = { value: 1 };
// let obj2: Empty<string> = { value: "a" };
// obj1 = obj2;
// obj2 = obj1;

let fun1 = <T>(x: T): T => {
  return x;
};
let fun2 = <U>(y: U): U => {
  return y;
};

fun1 = fun2;
fun2 = fun1;

//类型保护机制
// ===========
enum Type {
  Strong,
  Week
}
class Java {
  helloJave() {}
  java: any;
}
class JavaScript {
  helloJavaScript() {}
  javascript: any;
}
// 定义类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJave !== undefined;
}

function getLanguage(type: Type, x: number | string) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  // 直接调用时，lang 是联合类型，会报错
  // if (lang.helloJave) {
  //   lang.helloJave();
  // } else {
  //   lang.helloJavaScript();
  // }

  // 使用类型断言
  if ((lang as Java).helloJave) {
    (lang as Java).helloJave();
  } else {
    (lang as JavaScript).helloJavaScript();
  }

  // 使用 instanceof
  if (lang instanceof Java) {
    lang.helloJave();
  } else {
    lang.helloJavaScript();
  }

  // 使用 in
  if ("java" in lang) {
    lang.helloJave();
  } else {
    lang.helloJavaScript();
  }

  // 使用 typeof
  if (typeof x === "number") {
    x.toFixed(2); //x 是 number 类型
  } else {
    x.length; //x 是string 类型
  }

  // 使用类型保护函数
  if (isJava(lang)) {
    lang.helloJave();
  } else {
    lang.helloJavaScript();
  }
}

getLanguage(Type.Strong, 0);
