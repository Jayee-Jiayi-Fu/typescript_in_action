let hello:string = 'Hello TypeScriot'

// ForkTsCheckerWebpackPlugin可以检查出这里的错误，
// awesome-typescript-loader 的 CheckerPlugin 则不能检查出错误
// hello = 1
document.querySelectorAll('.app')[0].innerHTML = hello