interface List {
  id: number;
  // readonly id: number; //定义只读属性
  name: string;
  // age: number;报错
  // age?:number //使用可选属性防止报错
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
  });
}

let result = {
  data: [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
  ]
};
render(result);

// 以变量方式传入含有新字段的对象，不会报错
// let result2 = {
//   data: [
//     { id: 1, name: "A", age: 18 },
//     { id: 2, name: "B" }
//   ]
// };
// render(result2);

// 以字面量方式传入含有新字段的对象，会报错
// render({
//   data: [
//     { id: 1, name: "A", age: 18 },
//     { id: 2, name: "B" }
//   ]
// });

// 类型断言方式一
// render({
//   data: [
//     { id: 1, name: "A", age: 18 },
//     { id: 2, name: "B" }
//   ]
// } as Result);

//类型断言方式二
// render(<Result>{
//   data: [
//     { id: 1, name: "A", age: 18 },
//     { id: 2, name: "B" }
//   ]
// });

// 使用字符串索引签名
// interface List {
//   id: number;
//   name: string;
//   [x: string]: any;
// }

// 没有添加可选属性钱，判断是否含有新属性,会报错
// function render2(result: Result) {
//   result.data.forEach(value => {
//     if (value.age) {
//       console.log(value.age);
//     }
//   });
// }

// 修改只读属性，会报错
// function render3(result: Result) {
//   result.data.forEach(value => {
//     value.id++;
//   });
// }

// 定义用数字索引的接口
// interface StringArray {
// [index: number]: string;
// }
// let chars:StringArray = ["A","B"]

// 定义用字符串索引的接口
// interface Names {
// [x: string]: string;
// [y: number]: number; // 不能再声明 number 类型成员，否则报错
// }

//混用两种索引签名
// interface Names {
//   [x: string]: string;
//   [z: number]: string;
// }
