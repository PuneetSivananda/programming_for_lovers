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
const array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
// Initialize canvas and context
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d") || null;
const barWidth = canvas.width / array.length;
// Function to draw the bars
function drawBars() {
    if (ctx != null) {
        // check for null error
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        array.forEach((num, index) => {
            const barHeight = (num / 100) * canvas.height;
            const x = index * barWidth;
            const y = canvas.height - barHeight;
            ctx.fillStyle = "blue";
            ctx.fillRect(x, y, barWidth, barHeight);
        });
    }
}
// Count sort algorithm
function bubbleSort() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap elements
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    // Redraw bars after swap
                    drawBars();
                    // Pause for visualization
                    yield new Promise((resolve) => setTimeout(resolve, 50));
                }
            }
        }
    });
}
drawBars();
