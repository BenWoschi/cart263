/**
 * Title of Project
 * Author Name
 */

"use strict";

let r;
let g;
let b;
let state = true;

function setup() {
    createCanvas(800, 800);
    randomColor();
}

function draw() {
    background("#2b2b2b");
    loopCircles();
}

function loopCircles() {
    if (state === true) {
        for (let x = 25; x <= 500; x += 55) {
            for (let y = 25; y <= 500; y += 53) {
                ellipse(x, y, 50);
                noStroke();
                fill(r, g, b);
            }
        }
    } else {
        for (let x = 0; x <= 500; x += 55) {
            for (let y = 0; y <= 500; y += 55) {
                rect(x, y, 50);
                noStroke();
                fill(r, g, b);
            }
        }
    }
}

function randomColor() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}

function keyPressed() {
    if (key == ' ') {
        randomColor();
    }
}

function mousePressed() {
    if (state === true) {
        state = false;
    } else {
        state = true;
    }
}