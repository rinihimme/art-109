


let star;

function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
  noStroke();

  star = loadImage("assets/star.png");
}

function draw() {
  console.log("rini");

  // tv static thick
   for (let i=0; i < 400; i+=10) {
    fill(random(50,255), random(50,255), random(50,255));
    rect(0, i, width, 5);
    fill(random(50,255), random(50,255), random(50,255));
    rect(i, 0, 15, height);
    console.log(i);
  } 

  // tv static shapes
  if (mouseX < 150)  {
    ellipse(mouseX, mouseY, 100,);
  } else {
    triangle(mouseY, 20, 20, 80, 80, 120, 120);
    triangle(mouseY, 380, 380, 300, 300, 240, 240);
  }

  // tv static fine
  for (let i = 0; i < 400; i += 3) {
    for (let j = 0; j < 400; j += 3) {
      fill(random(50,255), random(50,255), random(50,255));
      rect(i, j, 8, 1);
    }
  }

  // more static! no way
   let y1 = mouseY;
  if (mouseX < 400)  {
    for (let i = 0; i < mouseY; i += 10) {
      fill(random(50,255), random(50,255), random(50,255));
      rect( i+5, y1, 25, 25 );
     }

  // star asset
  if (mouseY < 300) {
    image(star, mouseX-24, mouseY-24, 48, 48)

    } else {
    for (let i = 0; i < mouseX; i += 20) {
      r3 = random(100);
      fill(170,255,250,25);
      rect( i+5, y1, 100, 100 );
     }


  }
 }
}