// setup canvas- container for graphics
const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d'); //context on which to start to draw.

const width = canvas.width = window.innerWidth; //width of the browser viewport
const height = canvas.height = window.innerHeight; //Height of the browser viewpor


// function to generate random number
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

//Setting parameter
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

//creates the box
Ball.prototype.draw = function() {
    ctx.beginPath(); //draw a shape 
    ctx.fillStyle = this.color; //color of the shape
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //shape- x and y coordinates, size- radius, start 0 degrees end 2 degrees * PI which is 360 degrees in radians
    ctx.fill(); //finishing drawing the shape
}

let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
testBall.x
testBall.size
testBall.color
testBall.draw()

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    } 

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y + this.size) <=0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}
