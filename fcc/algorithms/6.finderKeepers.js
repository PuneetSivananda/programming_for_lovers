Array.prototype.findElementmap = function (callback) {
  const result = [];
  for (let ix = 0; ix < this.length; ix++) {
    if (callback(this[ix]) != false) {
      result.push(this[ix]);
    }
  }
  return result;
};

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) return num;
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

// using prototyping
console.log(
  [1, 3, 5, 8, 9, 10].findElementmap((item) => {
    return item % 2 === 0;
  })
);
