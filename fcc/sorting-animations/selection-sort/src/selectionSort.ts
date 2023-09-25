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

function swap(A: number[], x: number, y: number) {
  var temp = A[x];
  A[x] = A[y];
  A[y] = temp;
}

// insertion sort algorithm
async function selectionSort() {
  var len = selectionSortArray.length;
  for (var i = 0; i < len - 1; i = i + 1) {
    var j_min = i;
    for (var j = i + 1; j < len; j = j + 1) {
      if (selectionSortArray[j] < selectionSortArray[j_min]) {
        j_min = j;

        drawselectionSortBars();

        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    if (j_min !== i) {
      swap(selectionSortArray, i, j_min);
    }
  }
}

drawselectionSortBars();
