/* eslint-disable no-undef, no-unused-vars */
let inp;

function setup() {
  createCanvas(600, 180 * 3);
  inp = createInput("5");
  inp.position(55, 520);
  inp.size(200);
}

function draw() {
  //some geometry
  let total = 180 * (inp.value() - 2);
  let individual = (180 * (inp.value() - 2)) / inp.value();

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
  text(individual, 20, 125 - 10);
  text(total, 20, 50);
  textSize(20);
  text("Individual", 20, 125 - 45);
  text("Total", 20, 50 - 35);
  textSize(8);
  text("Amount of sides", 20, 137);
  pop();
}
