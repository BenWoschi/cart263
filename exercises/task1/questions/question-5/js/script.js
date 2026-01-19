/**
 * Title of Project
 * Author Name
 */

"use strict";

let counter = 0;

let squareData = {
    x: 25,
    y: 25,
    w: 50,
    h: 50,

    fill: "#eaa03f",
}

let squareData2 = {
    x: 90,
    y: 25,
    w: 50,
    h: 50,

    fill: "#ea643f",
}

let circleData = {
    radius: 50,
    fill: "#ffffff55",
}

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background("#2b2b2b");
    displaySquare();
    displaySquare2();
    mouseHover();
    drawEllipse();
    console.log(counter);
}

function displaySquare() {
    noStroke();
    fill(squareData.fill);
    rect(squareData.x, squareData.y, squareData.w, squareData.h);
}

function displaySquare2() {
    noStroke();
    fill(squareData2.fill);
    rect(squareData2.x, squareData2.y, squareData2.w, squareData2.h);
}

function mouseHover() {
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) {
        squareData.fill = "#f8d09d";
    } else {
        squareData.fill = "#eaa03f";
    }

    if (mouseX >= 90 && mouseX <= 140 && mouseY >= 25 && mouseY <= 75) {
        squareData2.fill = "#eb947d";
    } else {
        squareData2.fill = "#ea643f";
    }
}

function mousePressed() {
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) {
        if (counter <= 9) {
            counter += 1;
        }
    } else if (mouseX >= 90 && mouseX <= 140 && mouseY >= 25 && mouseY <= 75){
        if (counter > 0) {
            counter -= 1;
        }
    }
}

function drawEllipse() {
    stroke("#ffffff55");
    fill(circleData.fill);

    let i = 0;
    while (i < counter) {
        ellipse(width / 2, height / 2, circleData.radius + i * 20);
        i++;
    }
}