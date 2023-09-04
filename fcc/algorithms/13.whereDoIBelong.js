function getIndexToIns(arr, num) {
  const newArr = arr.sort((a, b) => a - b);
  if (num <= newArr[0]) return 0;
  if (num >= newArr[newArr.length - 1]) return newArr.length;
  for (let i = 0; i <= newArr.length; i++) {
    if (newArr[i] >= num) {
      return i;
    }
  }
  return newArr.length;
}

// console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
