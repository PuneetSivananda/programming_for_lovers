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
// Generate an array of random numbers
const csArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
// Initialize canvas and context
const csCanvas = document.getElementById("countSortCanvas");
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
function CSort() {
    return __awaiter(this, void 0, void 0, function* () {
        let count = [];
        let output = [];
        let i = 0;
        let max = Math.max(...csArray);
        // initialize counter
        for (i = 0; i <= max; i++) {
            count[i] = 0;
        }
        // initialize output array
        for (i = 0; i < csArray.length; i++) {
            output[i] = 0;
        }
        for (i = 0; i < csArray.length; i++) {
            count[csArray[i]]++;
        }
        for (i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
        for (i = csArray.length - 1; i >= 0; i--) {
            output[--count[csArray[i]]] = csArray[i];
        }
        csDrawBars();
    });
}
csDrawBars();
