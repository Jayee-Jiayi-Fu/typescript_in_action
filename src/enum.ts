/*数字枚举 */
enum Role {
  Reporter,
  Developer,
  Maintainer
}
console.log(Role);
console.log(Role.Reporter);
console.log(Role.Developer);

enum Role2 {
  Reporter = 10,
  Developer,
  Maintainer
}
console.log(Role2);
console.log(Role2.Reporter);
console.log(Role2.Developer);

/*字符串枚举 */
enum Message {
  Success = "Great!",
  Fail = "Sorry!"
}

/* 异构枚举 */
enum Answer {
  N,
  Y = "yes"
}
console.log(Answer.N);
console.log(Answer.Y);

// /*枚举成员的性质 */
// Role.Reporter = 2;

enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = "123".length
  // f
}
console.log(Char.a);
console.log(Char.b);
console.log(Char[0]);

/* 常量枚举 */
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar];

/* 枚举类型 */
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
let e: E = 3;
let f: F = 3;

console.log(e);
console.log(f);
// e === f
// let f1: F = "3";

let e1: E.a;
let e2: E.a;
// e1 === e2;

// let e1: E.a = 1;
// let e2: E.b = 1;
// e1 === e2;

// let e1: E.a = 1;
// let e2: E.a = 1;
// console.log(e1 === e2);

enum G {
  a = "apple",
  b = "banana"
}

let g1: G = G.a;
let g2: G.a = G.a;
g1 === g2;
