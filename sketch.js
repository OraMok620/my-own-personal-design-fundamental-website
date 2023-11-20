let w = 1000;
let h = 1000;
let dotsArray = [];

function setup() {
  createCanvas(50000,50000);
  noFill();
  noStroke();
  // Create objects
  for (let i = 0; i < 50; i++) {
    // create a an object data type to store each dot values
    let ellipseObj =  {
      x: random(w),
      y: random(h),
      diameter: random(10, 50),
      speedX: random(-2, 2), // Random horizontal speed
      speedY: random(-2, 2), // Random vertical speed
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
      ellipseObj.speedX *= -1;
    }
    if (ellipseObj.y < 0 || ellipseObj.y > height) {
      ellipseObj.speedY *= -1;
    }

    // Draw the ellipse
    stroke(235,140,250);
    strokeWeight(2);
    ellipse(ellipseObj.x, ellipseObj.y, ellipseObj.diameter);
  }
}
