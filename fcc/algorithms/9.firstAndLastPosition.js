// input = [2,4,5,5,5,5,5,7,9,9]
// target = 5
// output = [2,6]
function firstLastBruteForce(arr, target) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == target) {
      let start = i;
      while (i + 1 < arr.length && arr[i + 1] == target) {
        i += 1;
      }
      return [start, i];
    }
  }
  return [-1, -1];
}

console.log(firstLastBruteForce([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5));
