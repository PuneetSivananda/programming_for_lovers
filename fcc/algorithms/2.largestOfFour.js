function findLargest(arr) {
  console.log(arr.sort((a, b) => a - b));
  return arr.sort((a, b) => a - b)[arr.length - 1];
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
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
