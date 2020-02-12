interface Human {
  // 期望在接口中定义构造函数，但接口不能约束类的构造函数，
  // new (name: string): void;

  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;

  // 接口只能约束类的公有成员
  // private name: string;

  eat() {}
  sleep() {}
}

// 接口的继承
interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}
interface Boy extends Man, Child {}

// 必须实现 Boy 接口所继承的所有祖先接口定义的属性
let boy: Boy = {
  name: "Mark",
  eat() {},
  run() {},
  cry() {}
};

// 接口继承类
class Auto {
  state = 1;

  // 接口在抽离类成员的时候，不仅抽离了公共成员，还抽离了私有成员和受保护成员
  // private state2 = 2;
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 2;
}

// Auto 的子类也可以实现 AutoInterface 这个接口
//不必再定义 state 属性。因为 Auto 的子类自然继承其公有属性
class Bus extends Auto implements AutoInterface {}
