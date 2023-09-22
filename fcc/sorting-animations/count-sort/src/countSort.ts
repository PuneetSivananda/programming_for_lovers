// Generate an array of random numbers
const csArray = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

// Initialize canvas and context
const csCanvas = document.getElementById(
  "countSortCanvas"
) as HTMLCanvasElement;
const csCtx = csCanvas.getContext("2d") || null;
const csBarWidth = csCanvas.width / csArray.length;

// Function to draw the bars
function csDrawBars() {
  if (csCtx != null) {
    // check for null error
    csCtx.clearRect(0, 0, csCanvas.width, csCanvas.height);
    csArray.forEach((num, index) => {
      const barHeight = (num / 100) * csCanvas.height;
      const x = index * csBarWidth;
      const y = csCanvas.height - barHeight;

      csCtx.fillStyle = "blue";
      csCtx.fillRect(x, y, csBarWidth, barHeight);
    });
  }
}

// Count sort algorithm
async function CSort() {
  for (let i = 0; i < csArray.length - 1; i++) {
    for (let j = 0; j < csArray.length - i - 1; j++) {
      if (csArray[j] > csArray[j + 1]) {
        // Swap elements
        [csArray[j], csArray[j + 1]] = [csArray[j + 1], csArray[j]];

        // Redraw bars after swap
        csDrawBars();

        // Pause for visualization
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
  }
}

// countSort();
