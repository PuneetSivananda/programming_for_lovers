function sum(x) {
  return (y) => {
    return x + y;
  };
}

const SumAll = (x) => (y) => y ? SumAll(x + y) : x;

// console.log(sum(3)(3));
// console.log(SumAll(3)(3)(4)());

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

async function PromiseFunc() {
  return new Promise((resolve, reject) => {
    resolve("sample");
  });
}

async function getValue() {
  let value = await PromiseFunc();
  console.log(value);
  return value;
}

console.log(getValue());

// “()”
// "(]"
// “()[]{}”
// “([])”
function checkBrackets(inputA) {
  for (let a; a < inputA.length; a++) {
    for (let b; b < inputA.length; b++) {
      console.log(inputA[a]);
    }
  }
}

// arr.map(item)=>{}

function ownMap(inputArr, condition) {
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    outputArr.push(condition(inputArr[i]));
  }
  return outputArr;
}

// console.log(ownMap([1,3,4], (i)=> i*2))
// [1,3,4].map(item=> item*2)
