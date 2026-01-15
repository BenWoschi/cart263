/**
 * Title of Project
 * Author Name
 */

"use strict";

let ellipseVariants = {
    x: 50,
    y: 50,
    size: 75,
    
    fill: {
        r: 175,
        g: 175,
        b: 175,
    }
};

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background("#2b2b2b");
    drawEllipses();
}

function drawEllipses() {
    push();
    noStroke();
    fill(ellipseVariants.fill.r, ellipseVariants.fill.g, ellipseVariants.fill.b);
    ellipse(ellipseVariants.x, ellipseVariants.y, ellipseVariants.size);
    pop();

    push();
    noStroke();
    fill(ellipseVariants.fill.r - 75, ellipseVariants.fill.g - 75, ellipseVariants.fill.b - 75);
    ellipse(ellipseVariants.x + 75, ellipseVariants.y + 75, ellipseVariants.size + 25);
    pop();

    push();
    noStroke();
    fill(ellipseVariants.fill.r - 125, ellipseVariants.fill.g - 125, ellipseVariants.fill.b - 125);
    ellipse(ellipseVariants.x + 175, ellipseVariants.y + 175, ellipseVariants.size + 50);
    pop();
}