/*原始类型*/
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";
// num = "abc";

/*数组*/
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
// let arr3: number[] = [1, 2, 3, '4'];
// let arr4: Array<number | string> = [1, 2, 3, "4"];

/*元组*/
let tuple: [number, string] = [1, "a"];
// let tuple2: [number, string] = ["1", "a"];
// let tuple3: [number, string] = [1, "a", "c"];
// tuple.push(2);
// console.log(tuple);
// console.log(tuple[2]);

/*函数*/
// let add = (x, y) => x + y;
let add = (x: number, y: number): number => x + y;
let computed: (x: number, y: number) => number;
computed = (a, b) => a + b;

/*对象*/
// let obj: object = { x: 1, y: 2 };
// obj.x = 2
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 2;

/*Symbol*/
let s1: symbol = Symbol();
let s2 = Symbol();

/*undefined,null*/
let un: undefined = undefined;
let nu: null = null;
// un = 1;
// let num2: number = 1;
// num2 = undefined;
// num2 = null;
// let num3: number | undefined | null = 1;
// num3 = undefined;
// num3 = null;

/*void*/
let noReturn = () => {};

/*any*/
let x;
x = 1;
x = "a";

/*never*/
let error = () => {
  throw new Error("error");
};
let endless = () => {
  while (true) {}
};
