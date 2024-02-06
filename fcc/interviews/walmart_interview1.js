// function sum(args){
//     return (args)=>{return ...args}
// }

// console.log(sum(2)(3))
// console.log(1 + '1' - 1);

// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());


// function PromiseFunc(){
//     return new Promise((resolve, reject)=> {
//         resolve("sample")    
//     })
// }

// let value = PromiseFunc().then(val=>console.log(val))

// console.log(value)
// “()”
// "(]"
// “()[]{}”
// “([])”
function checkBrackets(inputA){
    for(let a; a<inputA.length; a++){
        for(let b; b<inputA.length; b++){
            console.log(inputA[a])
        }
    }
}

// arr.map(item)=>{}

function ownMap(inputArr, condition){
    let outputArr = []
    for(let i=0;i< inputArr.length;i++){
        outputArr.push(condition(inputArr[i]))
    }
    return outputArr
}

console.log(ownMap([1,3,4], (i)=> i*2))
[1,3,4].map(item=> item*2)

