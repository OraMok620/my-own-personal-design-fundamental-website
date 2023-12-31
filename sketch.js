let dotsArray = [];

function setup() {
  createCanvas(displayWidth,displayHeight);
  noFill();
  noStroke();
  // Create objects
  for (let i = 0; i < 1000; i++) {
    // create a an object data type to store each dot values
    let ellipseObj =  {
      x: random(displayWidth),
      y: random(displayHeight),
      diameter: random(40, 100),
      speedX: random(-10,10), // Random horizontal speed
      speedY: random(-10,10), // Random vertical speed
    };
    dotsArray.push(ellipseObj);
  }
  console.log(dotsArray);
}


function draw() {
  background(135,206,250);
  // draw all the dots on each frame, moving there position
  for (let i = 0; i < 50; i++) {
    ellipseObj = dotsArray[i];

    // Move the ellipse
    ellipseObj.x += ellipseObj.speedX;
    ellipseObj.x += ellipseObj.speedY;

    // Check boundaries and bounce back
    if (ellipseObj.x < 0 || ellipseObj.x > width) {
      ellipseObj.speedX *= 10;
    }
    if (ellipseObj.y < 0 || ellipseObj.y > height) {
      ellipseObj.speedY *= 10;
    }

    // Draw the ellipse
    stroke(255);
    strokeWeight(5);
    fill (255);
    ellipse(ellipseObj.x, ellipseObj.y, ellipseObj.diameter);
  }
}
