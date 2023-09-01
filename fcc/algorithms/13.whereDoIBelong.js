function getIndexToIns(arr, num) {
  let ix;
  if (num <= arr[0]) return 0;
  if (num >= arr[arr.length - 1]) return arr.length;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < num && num < arr[i + 1]) {
      ix = i + 1;
    }
  }
  return ix;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([2, 5, 10], 15));
