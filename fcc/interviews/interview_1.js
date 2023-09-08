(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => res);
  console.log(response);
})();

// const randomObj = {
//     sample:"value",
//     sample1:"value2"
// }
// const another = JSON.parse(JSON.stringify(randomObj))

// randomObj['sample'] = "anotherValue"

// const inputArray = [[1,2], 3, [[[4,5]]], [6, [7]]]

// function flattenArray(inputArray){
//   let outputArray = []
//   for(let i=0;i<inputArray.length;i++){
//     if (typeof inputArray[i] == 'object'){
//       outputArray = outputArray.concat(flattenArray(inputArray[i]))
//     } else {
//       outputArray.push(inputArray[i])
//     }
//   }
//   return outputArray
// }

// console.log(flattenArray(inputArray))

// console.log("a");

// setTimeout(() => console.log("b"));

// Promise.resolve().then(() => console.log("c"));
// Promise.resolve().then(() => setTimeout(() => console.log("d")));
// Promise.resolve().then(() => console.log("e"));

// setTimeout(() => console.log("f"));

// console.log("g");

// a g c e b f d
