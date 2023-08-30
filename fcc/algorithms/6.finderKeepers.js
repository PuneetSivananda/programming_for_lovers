function findElement(arr, func) {
  let ans;
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (flag) {
      return ans;
    }
    if (func(arr[i])) {
      flag = 1;
      ans = true;
    } else {
      ans = false;
    }
  }
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
