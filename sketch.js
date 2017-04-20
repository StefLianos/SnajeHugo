var s;
var scl = 30;
var img;
var imgwine;
var food;
var cdir = "r";

function setup() { 
  createCanvas(600, 600);
  s = new snake();
  img = loadImage("https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/17498881_1454658287919490_6900229120361464961_n.jpg?oh=974000b60a257de753623e8d0320baa0&oe=594D1C1E"); 
  imgwine = loadImage("wine.jpg")
  frameRate(10);
  pickLocation();
  
} 

function draw() { 
  background(51);

  s.death();
  s.update();
  s.show();

  if(s.eat(food)){
  	pickLocation();
  }

  fill(255,0,100);
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

