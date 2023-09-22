function bubbleSortAnArray(arr) {
  let swap = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (swap != false) {
      continue;
    }
  }
  return arr;
}

console.log(bubbleSortAnArray([6, 7, 3, 2, 1, 7, 8, 9]));
