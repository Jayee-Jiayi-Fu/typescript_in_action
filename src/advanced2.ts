interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}

// 交叉类型
//========
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
};

// 联合类型
//=========
let a: number | string = 1;
let b: number | string = "a";

//字面量联合类型
let c: "a" | "b" | "c";
let d: 1 | 2 | 3;

// 对象的联合类型
class Dog implements DogInterface {
  run() {}
  eat() {}
}
class Cat implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat();
  pet.eat();
  return pet;
}

// 可区分的联合类型
interface Square {
  kind: "Square";
  size: number;
}
interface Rectangle {
  kind: "Rectangle";
  width: number;
  height: number;
}
type Shape = Square | Rectangle;
function area(s: Shape) {
  switch (s.kind) {
    case "Square":
      return s.size * s.size;
    case "Rectangle":
      return s.height * s.width;
  }
}

// 新增一种类型接口
interface Circle {
  kind: "Circle";
  r: number;
}
type Shape2 = Square | Rectangle | Circle;
function area2(s: Shape2) {
  switch (s.kind) {
    case "Square":
      return s.size * s.size;
    case "Rectangle":
      return s.height * s.width;
    case "Circle":
      return Math.PI * s.r ** 2;
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
console.log(area2({ kind: "Circle", r: 1 }));

// 索引类型
//=========
let obj = {
  a: 1,
  b: 2,
  c: 3
};

function getValue(obj: any, keys: string[]) {
  return keys.map(key => obj[key]);
}
console.log(getValue(obj, ["a", "b"]));
console.log(getValue(obj, ["a", "f"])); //[undefined,undefined]

// 索引类型的一些概念
interface Obj {
  a: number;
  b: string;
}
// keyof T
let key: keyof Obj;

// T[K]
let value: Obj["b"];

// T extends U
function func<T extends Obj>(key: T) {}

//使用上面三个概念把 getValue() 改造成泛型函数
// function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
//   return keys.map(key => obj[key]);
// }

//类型推断发挥作用，编译器报错
// console.log(getValue(obj, ["a", "f"]));

// 映射类型
//=========
interface Obj2 {
  a: string;
  b: number;
  c: boolean;
}
// 把对象的所有属性变为只读
type ReadonlyObj = Readonly<Obj2>;

// 把对象的所有属性变为可选
type PartialObj = Partial<Obj2>;

// 抽取对象属性的子集
type PickObj = Pick<Obj2, "a" | "c">;

type RecordObj = Record<"x" | "y", Obj2>;

// 条件类型
//========
//基础条件类型：T extends U ? X : Y
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : "object";

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

// 联合条件类型: ( A | B ) extends U ? X : Y
//( A extends U ? X : Y) | (B extends U ? X : Y )
type T3 = TypeName<string | string[]>;

//定义过滤类型
type Diff<T, U> = T extends U ? never : T;

//等价T4
type T4 = Diff<"a" | "b" | "c", "a" | "e">;
// type T4 = Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">;

//扩展，过滤掉 null 和 undefined
type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | null | undefined>;

// TS 类库中已实现了 Diff 类型和 NotNull 类型
// Exclude<T,U>
// NonNullable<T>

// 与 Exclude 相反的类型 Extract<T,U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">;

// 获取一个函数返回值的类型 ReturnType<T>
type T7 = ReturnType<() => string>;
