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
  let legab = Math.sqrt(Math.pow(inp.value(), 2) - Math.pow(inp2.value(), 2));

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
  text(legab, 20, 125 - 40);
  textSize(20);
  text("Leg A/B", 20, 125 - 75);
  textSize(8);
  text("Hypotenuse", 20, 137);
  text("Leg A/B", 100, 137);
  pop();
}
