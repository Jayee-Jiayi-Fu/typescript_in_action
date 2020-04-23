let hello:string = "hello world"

class A {
    a:number = 1
}

let {x,y,...z} = {x:2,y:4,a:5,c:6}
let n = {x,y,...z}

// Babel 本省无法检查类型错误，需要安装 TypeScript 来检查
// hello = 1


// 注意：有四种语法在 Babel 中是无法编译的
// 1.命名空间
// namespace N{
//     export const n = 1
// }

// 2.常量枚举
// const enum E{A}

// 3.尖括号的类型断言
// let s = <A>{}
// s.a = 1

// 4.默认导出
// export = A