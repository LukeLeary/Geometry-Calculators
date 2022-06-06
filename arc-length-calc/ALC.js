/* eslint-disable no-undef, no-unused-vars */
let inp;
let inp2;

function setup() {
  createCanvas(600, 180 * 3);
  inp = createInput("0");
  inp.position(50, 520);
  inp.size(200);
  inp2 = createInput("0");
  inp2.position(290, 520);
  inp2.size(200);
}

function draw() {
  //some geometry
  let arclength = 2 * Math.PI * inp.value() * (inp2.value() / 360);

  //body
  push();
  background(0);
  fill(255);
  rect(0, 0, 600, 180 * 3, 20);
  pop();

  //formating
  push();
  scale(3);
  translate(0, 20);
  textStyle(BOLD);
  //text
  fill(0);
  textSize(40);
  text(Math.round(arclength * 100) / 100, 20, 125 - 70);
  textSize(20);
  text("Arc Length", 20, 125 - 105);
  textSize(40);
  text(Math.round(arclengthExact * 100) / 100 + "π", 20, 125 - 15);
  textSize(20);
  text("Arc Length Exact", 20, 125 - 50);
  textSize(8);
  text("Radius", 20, 137);
  text("Central Angle", 100, 137);
  pop();
}
