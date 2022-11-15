var mouseShapeX;
var mouseShapeY;
var x = 40;
var y = 580
var point = x,y;
var intP = x + 0.01;
var intN = x + 0.01;
var headX = 300;
var headY = 250;
var shapeXSpeed;
var shapeYSpeed;
var hX = 600;
var hY = 250;
var shapeXSpeed2;
var shapeYSpeed2;
var eX = 1215;
var eY = 350;

function setup() {
    createCanvas(1250,700);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
  }

//ƒ
function draw() {
    background("skyblue");
    textSize(12);

    //ground
    fill ("green");
    rect (0,600,1300,100);
    fill ("brown")
    rect (0,630,1300,100);


    fill (0);

    circle(x,y,70)

    if (x>1240)
    {
        x -=10;
    } else if(x<20)
    {
        x+=10;
    }
    function keyPressed() 
    {
      if (key == 'd') 
      {
        x++;
      } 
      else if (key == 'a') 
      {
        x--;
      }
      
      while (x<=20)
      {
        x++;
      }
           
      while (x>=1240)
      {
        x--;
      }
    }

    if(keyIsDown(68))
    {
        x+=10;
    }
      if(keyIsDown(65))
    {
        x-=10;
    } else if(keyPressed())
        {
            x++;
        }

    if(keyIsDown(87))
    {
        y-=10;
    } else if (y == 580 || y <=570)
    {
        y+=10;
    }
    while (y<=20)
    {
      y++;
    }

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 5);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 5);

    fill(240,240,240)
    circle(headX,headY,80);

    headX += shapeXSpeed;

    headY += shapeYSpeed;

    if(headX > width)
    {
        headX = 0;
    }
    if(headX < 0)
    {
        headX = width;
    }
    if(headY > height)
    {
        headY = 0;
    }
    if(headY < 0)
    {
        headY = height;
    }

    shapeXSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) - 2);
    shapeYSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);

    fill(240,240,240)
    circle(hX,hY,80);

    hX += shapeXSpeed2;

    hY += shapeYSpeed2;

    if(hX > width)
    {
        hX = 0;
    }
    if(hX < 0)
    {
        hX = width;
    }
    if(hY > height)
    {
        hY = 0;
    }
    if(hY < 0)
    {
        hY = height;
    }

    fill(0);
    textSize(19);
    text("'Exit'",eX-20,eY-35)

    fill("purple");
    circle(eX,eY,50,50);

    if(x >= eY && y < eY)
    {
        fill(0);
        textSize(26);
        text("Passed",width/2-50, height/2-50);
    }

    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
