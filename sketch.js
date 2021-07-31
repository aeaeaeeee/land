var issimg, s1img, s2img, s3img, s4img, spaceimg;
var iss, spacecraft, hasdocked;

function preload()
{
  issimg = loadImage("Docking-undocking/iss.png");
  spaceimg = loadImage("Docking-undocking/spacebg.jpg");
  s1img = loadImage("Docking-undocking/spacecraft1.png");
  s2img = loadImage("Docking-undocking/spacecraft2.png");
  s3img = loadImage("Docking-undocking/spacecraft3.png");
  s4img = loadImage("Docking-undocking/spacecraft4.png");
}



function setup() {
  createCanvas(800,450);

  spacecraft = createSprite(285, 340);
  spacecraft.addImage(s1img);
  spacecraft.scale = 0.15;



  iss = createSprite(330, 140);
  iss.addImage(issimg);
  iss.scale = 0.95;
  hasdocked = false;
}

function draw() {
  background(spaceimg);  

  if(!hasdocked)
  {
  spacecraft.x = spacecraft.x + random(-1,1);
  if(keyDown(UP_ARROW))
  {
    spacecraft.y = spacecraft.y -2;
  }
  if(keyDown(LEFT_ARROW))
  {
    spacecraft.x = spacecraft.x -2;
  }
  if(keyDown(RIGHT_ARROW))
  {
    spacecraft.x = spacecraft.x +2;
  }
  if(keyDown(DOWN_ARROW))
  {
    spacecraft.addImage(sc2);
  }
  }

  if(spacecraft.y <= (iss.y+60) && spacecraft.x <= (iss.x-10))
  {
    hasdocked = true;
    textSize(30);
    fill("white");
    text("Docking Successful!", 200, 300)
  }
  drawSprites();
}