/**
 * Title of Project
 * Author Name
 */

"use strict";

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background("#2b2b2b");
    drawEllipse(50, 50, 50, 44, 222, 219);
    drawEllipse(100, 100, 100, 237, 28, 91);
    drawEllipse(175, 175, 125, 237, 227, 27);
}

function drawEllipse(x, y, size, r, g ,b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, size);
    pop();
}