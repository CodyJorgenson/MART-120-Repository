
var mouseShapeX;
var mouseShapeY;
var charX = 40;
var charY = 580

var shapeXs = []; 
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var eX = 1215;
var eY = 350;

function setup() {
    createCanvas(1250,700);
    for (var i = 0; i < 5; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeXs[i] = getRandomNumber(500);
    shapeYs[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(50);
    }

    createCharacter(charX,charY);
  }

//ƒ
function draw() {
    background("skyblue");

    drawScene();

    drawChar();
    
    characterMove();
    
    characterColl();
    
    keyPressed();

    exitDraw();

    enemyFunct();
    /*for (var i = 0; i < shapeXs.length; i++) 
    {
        circle(shapeXs[i],shapeYs[i],diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 5);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 5);


        shapeXs[i] += shapeXSpeeds;

        shapeYs[i] += shapeYSpeeds;

        if(shapeXs[i] > width)
            {
                shapeXs[i] = 0;
            }
        if(shapeXs[i] < 0)
            {
                shapeXs[i] = width;
            }
        if(shapeYs[i] > height)
            {
                shapeYs[i] = 0;
            }
        if(shapeYs[i] < 0)
            {
                shapeYs[i] = height;
            }
    }
*/
    createBorders(10)

    drawMouseC();
}


function drawChar()
{
    fill (0);
    circle(charX,charY,70);
}

function characterColl()
{
    if (charX>1240)
    {
        charX -=10;
    } else if(charX<20)
    {
        charX+=10;
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function keyPressed() 
{
  if (key == 'd') 
  {
    charX++;
  } 
  else if (key == 'a') 
  {
    charX--;
  }
  
  while (charX<=20)
  {
    charX++;
  }
       
  while (charX>=1240)
  {
    charX--;
  }
}

function characterMove()
{
    if(keyIsDown(68))
    {
        charX+=10;
    }
      if(keyIsDown(65))
    {
        charX-=10;
    } else if(keyPressed())
        {
            charX++;
        }

    if(keyIsDown(87))
    {
        charY-=10;
    } else if (charY == 580 || charY <=570)
    {
        charY+=10;
    }
    while (charY<=20)
    {
      charY++;
    }
}

function exitDraw()
{
    fill(0);
    textSize(19);
    text("'Exit'",eX-20,eY-35)

    fill("purple");
    circle(eX,eY,50,50);

    if(charX >= eX && charY <= eY)
    {
        fill(0);
        textSize(26);
        text("You Win!",width/2-50, height/2-50);
    }

}

function enemyFunct()
{
    for (var i = 0; i < shapeXs.length; i++) 
    {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 5);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 5);


        shapeXs[i] += shapeXSpeeds;

        shapeYs[i] += shapeYSpeeds;

        if(shapeXs[i] > width)
            {
                shapeXs[i] = 0;
            }
        if(shapeXs[i] < 0)
            {
                shapeXs[i] = width;
            }
        if(shapeYs[i] > height)
            {
                shapeYs[i] = 0;
            }
        if(shapeYs[i] < 0)
            {
                shapeYs[i] = height;
            }
    }

}

function createBorders(thickness)
{
    fill("white")
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height);
}

function drawMouseC()
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function drawScene()
{
    //ground
    fill ("green");
    rect (0,600,1300,100);
    fill ("brown")
    rect (0,630,1300,100);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 10;
}
