/**
 * Title of Project
 * Author Name
 */

"use strict";

let rectangle1 = {
    x: 50,
    y: 50,
    size: 75,
    
    fill: {
        r: 227,
        g: 27,
        b: 74,
    }
};

let rectangle2 = {
    x: 150,
    y: 150,
    size: 90,
    
    fill: {
        r: 27,
        g: 227,
        b: 67,
    }
};

let rectangle3 = {
    x: 290,
    y: 25,
    size: 40,
    
    fill: {
        r: 27,
        g: 210,
        b: 227,
    }
};

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background("#2b2b2b");
    clickRectangle();
    pressRectangle();
    movingRectangle();
}

function clickRectangle() {
    noStroke();
    fill(rectangle1.fill.r, rectangle1.fill.g, rectangle1.fill.b);
    rect(rectangle1.x, rectangle1.y, rectangle1.size);
}

function mousePressed() {
    if (mousePressed) {
        rectangle1.x = mouseX;
        rectangle1.y = mouseY;
    }
}

function pressRectangle() {
    noStroke();
    fill(rectangle2.fill.r, rectangle2.fill.g, rectangle2.fill.b);
    rect(rectangle2.x, rectangle2.y, rectangle2.size);
}

function keyPressed() {
    if (key === ' ') {
        rectangle2.x = mouseX;
        rectangle2.y = mouseY;
    }
}

function movingRectangle() {
    noStroke();
    fill(rectangle3.fill.r, rectangle3.fill.g, rectangle3.fill.b);
    rect(rectangle3.x, rectangle3.y, rectangle3.size);

    if (rectangle3.y >= 400) {
        rectangle3.y = 0;
    }
    else {
        rectangle3.y += 3;
    }
}