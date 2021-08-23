var x, y;
var speedX, speedY;
function setup() {
  createCanvas(400, 400);
	x = 100;
	y = 10;
	speedX = 2;
	speedY = 3;
}

function draw() {
  background(43,25,62);
  fill(141,45,86);
  ellipse(x, y, 25, 25);
	x = x + speedX;
	if(x < 0 || x > 400){
		speedX = speedX * -1;
	}

	y = y + speedY;
	if(y < 0 || y > 400){
		speedY = speedY * -1;
	}
}



