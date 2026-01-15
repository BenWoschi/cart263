/**
 * Title of Project
 * Author Name
 */

"use strict";

let rectangle1 = {
    x: 0,
    y: 0,
    
    fill: {
        r: 27,
        g: 227,
        b: 184,
    }
};

let rectangle2 = {

    fill: {
        r: 27,
        g: 210,
        b: 227,
    }
};

let rectangle3 = {

    fill: {
        r: 27,
        g: 67,
        b: 227,
    }
};



function setup() {
    createCanvas(400, 400);
}


function draw() {
    background("#2b2b2b");
    rect1();
    rect2();
    rect3();
}

function rect1() {
    noStroke();
    fill(rectangle1.fill.r, rectangle1.fill.g, rectangle1.fill.b);
    rect(rectangle1.x, rectangle1.y, width / 3, height);
}

function rect2() {
    noStroke();
    fill(rectangle2.fill.r, rectangle2.fill.g, rectangle2.fill.b);
    rect(width / 3, 0, width / 3, height);
}

function rect3() {
    noStroke();
    fill(rectangle3.fill.r, rectangle3.fill.g, rectangle3.fill.b);
    rect(width / 3 * 2, 0, width / 3, height);
}