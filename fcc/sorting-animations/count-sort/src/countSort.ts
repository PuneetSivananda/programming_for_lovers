// Function to generate random integers between min and max
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create an array of random integers
function generateRandomArray(size: number, min: number, max: number) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(getRandomInt(min, max));
  }
  return arr;
}

// Function to update the visual representation of bars
function updateBars(arr: number[]) {
  const container = document.getElementById("container") as HTMLElement;
  container.innerHTML = "";
  arr.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 5}px`; // Scale the height for visualization
    container.appendChild(bar);
  });
}

// Counting Sort algorithm
function countingSort(arr: number[]) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const countArray = new Array(range).fill(0);
  const sortedArray = new Array(arr.length);

  arr.forEach((num) => {
    countArray[num - min]++;
  });

  for (let i = 1; i < range; i++) {
    countArray[i] += countArray[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArray[countArray[arr[i] - min] - 1] = arr[i];
    countArray[arr[i] - min]--;
    updateBars(sortedArray);
    new Promise((resolve) => setTimeout(resolve, 400));
  }

  return sortedArray;
}

function startSorting() {
  const arr = generateRandomArray(50, 1, 100); // Adjust size, min, and max as needed
  updateBars(arr);

  setTimeout(() => {
    const sortedArray = countingSort(arr.slice());
    updateBars(sortedArray);
  }, 400); // Delay to show the initial array before sorting
}

// Initial random array and visualization
const initialArray = generateRandomArray(50, 1, 100); // Adjust size, min, and max as needed
updateBars(initialArray);
