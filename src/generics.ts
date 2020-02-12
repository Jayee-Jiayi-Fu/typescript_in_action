// 定义泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value;
}

// 调用方式一:直接指明泛型函数的类型
log<string[]>(["a", "b", "c"]);

// 调用方式二:利用 TS 的类型推断，省略泛型类型参数
log(["a", "b", "c"]);

// 定义一个泛型函数类型
type Log = <T>(value: T) => T;

//泛型函数的具体实现
let myLog: Log = value => value;

// 泛型接口,它和类型别名的方式是完全等价的
interface LogInterface {
  <T>(value: T): T;
}

// 泛型约束接口的所有成员
// interface LogInterface<T> {
//   (value: T): T;
// }

//在具体实现时指定类型
// let myLog2: LogInterface<number> = value => value;

// 或者定义时使用默认类型
// interface LogInterface<T = number> {
//   (value: T): T;
// }
// let myLog2: LogInterface = value => value;

// 泛型类
class Car<T> {
  run(value: T) {
    return value;
  }
}

// 泛型不能应用于类的静态成员,会报错
// class Car<T> {
//   static run(value: T) {
//     return value;
//   }
// }

// 实例化泛型类,指定 T 类型
let car = new Car<string>();

// 实例方法受到约束，只能是字符串类型
car.run("fast");

// 非字符串类型时，会报错
// car.run(1);

// 也可以不传入类型参数
// let car2 = new Car();
// car2.run("fast");
// car2.run(1);

// 类型约束
// 先预定义一个含有 length 属性的接口
interface Length {
  length: number;
}
// 然后让类型 T 继承这个接口
function log2<T extends Length>(value: T): T {
  console.log(value.length);
  return value;
}

// 只要拥有 length 属性的参数都可被接受
log2([1]);
log2("a");
log2({ length: 1 });
