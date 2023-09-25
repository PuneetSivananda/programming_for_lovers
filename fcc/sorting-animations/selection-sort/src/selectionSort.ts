// Generate an selectionSortArray of random numbers
const selectionSortArray = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

// Initialize ssCanvas and context
const ssCanvas = document.getElementById("canvas1") as HTMLCanvasElement;
const ssCtx = ssCanvas.getContext("2d") || null;
const ssBarWidth = ssCanvas.width / selectionSortArray.length;

// Function to draw the bars
function drawselectionSortBars() {
  if (ssCtx != null) {
    // check for null error
    ssCtx.clearRect(0, 0, ssCanvas.width, ssCanvas.height);
    selectionSortArray.forEach((num, index) => {
      const barHeight = (num / 100) * ssCanvas.height;
      const x = index * ssBarWidth;
      const y = ssCanvas.height - barHeight;

      ssCtx.fillStyle = "blue";
      ssCtx.fillRect(x, y, ssBarWidth, barHeight);
    });
  }
}

// insertion sort algorithm
async function selectionSort() {
  var len = selectionSortArray.length;
  var i = 1;
  while (i < len) {
    var x = selectionSortArray[i];
    var j = i - 1;
    while (j >= 0 && selectionSortArray[j] > x) {
      selectionSortArray[j + 1] = selectionSortArray[j];

      drawselectionSortBars();

      await new Promise((resolve) => setTimeout(resolve, 50));

      j = j - 1;
    }
    selectionSortArray[j + 1] = x;
    i = i + 1;
  }
}

drawselectionSortBars();
