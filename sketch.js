var s;
var scl = 50;
var img;
var imgwine;
var food;
var cdir = "r";

function setup() { 
  createCanvas(1000, 1000);
  s = new snake();
  img = loadImage("hugo.jpg"); 
  imgwine = loadImage("wine.jpg")
  frameRate(10);
  pickLocation();
  
} 

function draw() { 
  background(220);

  s.death();
  s.update();
  s.show();

  if(s.eat(food)){
  	pickLocation();
  }

  //fill(255,0,100);
  //rect(food.x, food.y, scl, scl);
  image(imgwine, food.x, food.y, scl,scl);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW && cdir !== "d"){
		s.dir(0,-1);
		cdir = "u";
	} else if(keyCode === DOWN_ARROW && cdir !== "u"){
		s.dir(0,1);
		cdir = "d";
	}else if(keyCode === RIGHT_ARROW && cdir !== "l"){
		s.dir(1,0);
		cdir = "r";
	}else if(keyCode === LEFT_ARROW && cdir !== "r"){
		s.dir(-1,0);
		cdir = "l";
	}
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector( floor(random(cols)), floor(random(rows)) );
	food.mult(scl);
}

