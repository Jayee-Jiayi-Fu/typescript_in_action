import Vue from "vue"
import Hello from "./components/Hello.vue"

// new Vue({
//     el:".app",
//     data:function(){
//         return {
//             name:"TypeScript"
//         }
//     },
//     template:`<h1>{{name}}</h1>`
// })


new Vue({
    el:".app",
    components:{Hello},
    template:`<Hello></Hello>`
})