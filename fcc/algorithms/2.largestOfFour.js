function findLargest(arr) {
  let MAX = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > MAX) MAX = arr[i];
  }
  return MAX;
}

function largestOfFour(arr) {
  const largest = [];
  arr.forEach((element) => {
    largest.push(findLargest(element));
  });
  return largest;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
