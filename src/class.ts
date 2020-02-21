// class Dog {
//   constructor(name: string) {
//     this.name = name;
//   }

//   // 私有构造函数，该类将无法被实例化，及无法被继承
//   // private constructor(name: string) {
//   //   this.name = name;
//   // }

//   // 受保护构造函数，该类将无法被实例化，但能够被继承
//   // protected constructor(name: string) {
//   //   this.name = name;
//   // }

//   name: string;
//   // name: string = "Puppy";
//   // name?: string;

//   run() {}

//   // 私有成员
//   private pri() {}

//   // 受保护成员
//   protected pro() {}

//   // 只读属性
//   readonly age: number = 1;

//   // 静态成员
//   static food: string = "bones";
// }

// let dog = new Dog("wangwang");
// console.log(Dog.prototype);
// console.log(dog);

// // 实例调用私有成员，会报错
// // dog.pri();

// // 实例调用受保护成员，会报错
// // dog.pro();

// // 读取只读属性
// console.log(dog.age);
// // 修改只读属性，会报错
// // dog.age = 2;

// // 调用静态成员
// // console.log(dog.food)
// console.log(Dog.food);

// /* 类的继承 */
// class Husky extends Dog {
//   constructor(name: string, color: string, public weight: number) {
//     super(name);
//     this.color = color;

//     // 构造函数的参数使用了修饰符，把参数直接变成了类的属性
//     this.weight = weight;

//     // 子类调用父类的私有成员，会报错
//     // this.pri();

//     // 子类调用父类的受保护成员，没问题
//     this.pro();

//     // 修改只读属性，会报错
//     // this.age = 2;
//   }
//   color: string;
// }

// // 子类调用继承来的静态成员
// // console.log(Husky.food);

// // let husky = new Husky("husky", "black", 10);
// // husky.food;

// // 定义抽象类
// abstract class Animal {
//   eat() {
//     console.log("eat");
//   }

//   // 抽象方法
//   abstract sleep(): void;
// }

// // 实例化抽象类，会报错
// // let animal = new Animal()

// // 继承抽象类
// // class Cat extends Animal {
// //   // 实现父类的抽象方法
// //   sleep() {
// //     console.log("Cat sleep");
// //   }
// // }
// // let cat = new Cat();
// // cat.eat();
// // cat.sleep();

// // 多态
// class Bird extends Animal {
//   sleep() {
//     console.log("Bird sleep");
//   }
// }
// let bird = new Bird();
// bird.sleep();

// //this类型，类的成员方法直接返回this，可以很方便地实现链式调用
// class WorkFlow {
//   step1() {
//     return this;
//   }
//   step2() {
//     return this;
//   }
// }
// new WorkFlow().step1().step2();

// // this类型实现多态,这样就保持了父类和子类调用的连贯性
// class MyFlow extends WorkFlow {
//   next() {
//     return this;
//   }
// }
// new MyFlow()
//   .next()
//   .step1()
//   .step2();
