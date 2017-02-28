var diameter; 
var angle = 0;

function setup() {
  createCanvas(700,700);
  background('#222222');
  diameter = height - 10;
  
}

function draw() {
  diameter = height - 10;
  var d1 = 10 + (sin(angle) * diameter/16) + diameter/2;
  var d2 = 10 + (sin(angle + PI/4) * diameter/8) + diameter/2;
  var d3 = 10 + (sin(angle + PI/2) * diameter/4) + diameter/2;
  var d4 = 10 + (sin(angle + PI) * diameter/2) + diameter/2;
  
  
  noStroke();
  fill(25,25,112);
  ellipse(width/2, height/2, d4, d4);
  
  noStroke();
  fill(255,215,0);
  ellipse(width/2, height/2, d1, d1);
  
  noStroke();
  fill(255,0,0);
  ellipse(width/2, height/2, d2, d2);
  
  noStroke();
  fill(0,0,250);
  ellipse(width/2, height/2, d3, d3);
  
  noStroke();
  fill(255,0,0);
  ellipse(350,350,190,190);
  
  angle += 0.03;
  
}