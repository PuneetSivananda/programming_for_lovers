// Generate an insertionSortArray of random numbers
const insertionSortArray = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

// Initialize isCanvas and context
const isCanvas = document.getElementById("canvas1") as HTMLCanvasElement;
const isCtx = isCanvas.getContext("2d") || null;
const isBarWidth = isCanvas.width / insertionSortArray.length;

// Function to draw the bars
function drawInsertionSortBars() {
  if (isCtx != null) {
    // check for null error
    isCtx.clearRect(0, 0, isCanvas.width, isCanvas.height);
    insertionSortArray.forEach((num, index) => {
      const barHeight = (num / 100) * isCanvas.height;
      const x = index * isBarWidth;
      const y = isCanvas.height - barHeight;

      isCtx.fillStyle = "blue";
      isCtx.fillRect(x, y, isBarWidth, barHeight);
    });
  }
}

// insertion sort algorithm
async function insertionSort() {
  var len = insertionSortArray.length;
  var i = 1;
  while (i < len) {
    var x = insertionSortArray[i];
    var j = i - 1;
    while (j >= 0 && insertionSortArray[j] > x) {
      insertionSortArray[j + 1] = insertionSortArray[j];
      drawInsertionSortBars();
      // Pause for visualization
      await new Promise((resolve) => setTimeout(resolve, 50));
      j = j - 1;
    }
    insertionSortArray[j + 1] = x;
    i = i + 1;
  }
  // for (let i = 0; i < insertionSortArray.length - 1; i++) {
  //   for (let j = 0; j < insertionSortArray.length - i - 1; j++) {
  //     if (insertionSortArray[j] > insertionSortArray[j + 1]) {
  //       // Swap elements
  //       [insertionSortArray[j], insertionSortArray[j + 1]] = [
  //         insertionSortArray[j + 1],
  //         insertionSortArray[j],
  //       ];

  //       // Redraw bars after swap
  //       drawInsertionSortBars();
  //       // Pause for visualization
  //       await new Promise((resolve) => setTimeout(resolve, 50));
  //     }
  //   }
  // }
}

drawInsertionSortBars();
