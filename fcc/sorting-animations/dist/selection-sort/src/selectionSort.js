"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Generate an selectionSortArray of random numbers
const selectionSortArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
// Initialize ssCanvas and context
const ssCanvas = document.getElementById("canvas1");
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
function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
// insertion sort algorithm
function selectionSort() {
    return __awaiter(this, void 0, void 0, function* () {
        var len = selectionSortArray.length;
        for (var i = 0; i < len - 1; i = i + 1) {
            var j_min = i;
            for (var j = i + 1; j < len; j = j + 1) {
                if (selectionSortArray[j] < selectionSortArray[j_min]) {
                    j_min = j;
                    drawselectionSortBars();
                    yield new Promise((resolve) => setTimeout(resolve, 50));
                }
            }
            if (j_min !== i) {
                swap(selectionSortArray, i, j_min);
            }
        }
    });
}
drawselectionSortBars();
