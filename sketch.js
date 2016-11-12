var xalpha, beta, gamma;
var xpos, ypos;

function setup() 
{
  var myCanvas = createCanvas(400, 400,400);
  xpos = 200;
  ypos = 200;
  xalpha = 0;
  beta = 0;
  gamma = 0;
}

function draw() 
{
  // set background color to white
  background(255);

  // display variables
  fill(100);
  noStroke();
  fill(color(244,0,100));
  text("alpha: " + xalpha, 25, 25);
  fill(color(233,233,1));
  text("beta: " + beta, 25, 50);
  fill(0,233,124);
  text("gamma: " + gamma, 25, 75);
  
  push();
  translate(100, 200);
  strokeWeight(5);
  stroke(color(244,0,100));
  line(0,0,40*sin(radians(xalpha)),40*cos(radians(xalpha)));
  stroke(color(233,233,1));
  line(0,0,40*sin(radians(beta)),40*cos(radians(beta)));
  stroke(color(0,233,123));
  line(0,0,40*sin(radians(gamma)),40*cos(radians(gamma)));
  pop();	
  push();
  translate(300, 200);
  strokeWeight(5);
  stroke(color(244,0,100));
  line(0,0,map(xalpha,-180,180,-10,10),0);
  stroke(color(233,233,1));
  line(0,0,0,map(beta,-180,180,-10,10));
  pop();	
}

// accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
  xalpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});