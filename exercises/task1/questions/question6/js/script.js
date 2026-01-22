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
    displayText();
    loopHorizontal(0, 20, 50);
    loopVertical(15, 20, 73);
}

function displayText() {
    noStroke();
    fill("#fff");
    textAlign(CENTER);
    textSize(20);
    text("test", width / 2, height / 2);
}

function loopHorizontal(n, x, y) {
    for (let i = 0; i <= 9; i++) {
        fill("#fff");
        text(n, x, y);
        x += 20;
        n++;
    }
}

function loopVertical(n, x, y) {
    for (let i = 15; i >= 1; i--) {
        fill("#fff");
        text(n, x, y);
        y += 23;
        n--;
    }
}