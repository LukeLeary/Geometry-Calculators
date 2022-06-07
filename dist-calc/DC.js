/* eslint-disable no-undef, no-unused-vars */
let inp;
let inp2;
let inp3;
let inp4;

function setup() {
  createCanvas(600, 180 * 3);
  inp = createInput("0");
  inp.position(50, 520);
  inp.size(200);
  inp2 = createInput("0");
  inp2.position(290, 520);
  inp2.size(200);
  inp3 = createInput("0");
  inp3.position(50, 465);
  inp3.size(200);
  inp4 = createInput("0");
  inp4.position(290, 465);
  inp.size(200);
}

function draw() {
  //some geometry
  let distance = Math.sqrt(
    Math.pow(inp4.value() - inp3.value(), 2) +
      Math.pow(inp2.value() - inp.value(), 2)
  );

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
  text(Math.round(distance * 100) / 100, 20, 125 - 40);
  textSize(20);
  text("Distance", 20, 125 - 75);
  textSize(8);
  text("y1", 20, 137);
  text("y2", 100, 137);
  text("x1", 20, 117);
  text("x2", 100, 117);
  pop();
}
