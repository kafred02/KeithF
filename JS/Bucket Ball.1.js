var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
    // myGamePiece = new component(30, 30, "blue", 240, 10);
    // myGamePiece.gravity = 0.05;
    // The px size, style size, color, x, y axis and type componenent
    // myScore = new component("30px", "Consolas", "black", 280, 40, "text");

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    
    // ctx.beginPath();
    // ctx.setLineDash([5, 15]);
    // ctx.moveTo(0, 50);
    // ctx.lineTo(400, 50);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.setLineDash([]);
    // ctx.moveTo(0, 150);
    // ctx.lineTo(400, 150);
    // ctx.stroke();

    // ctx.beginPath();
    //circle 
    //ctx.arc(100,75,50,0,2*Math.PI);
    // ctx.arc(95,50,40,0,2*Math.PI);
    // ctx.arc(100,75,50,1.5*Math.PI,0*Math.PI)
    // ctx.arc(100,75,50,0,1.5*Math.PI)
    //center, center, start angle, end angle
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise); https://www.w3schools.com/tags/canvas_arc.asp
    
    // height (y) = 480, width (x) = 640
    ctx.arc(320,470,50,Math.PI,0);
    
    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    };

    ctx.arc(320,470,10,Math.radians(90),Math.radians(90));
    

    ctx.stroke();
    // // draws the diameter of the circle  
    // ctx.moveTo(270,470);
    // ctx.lineTo(370,470);
    // // draws the arrow of circle
    // // ctx.moveTo(320,470);
    // // ctx.lineTo(320,400);
    // ctx.stroke();    
    
    
    // alert(Math.PI/2);
//     //moves the arrow of the circle
//     ctx.moveTo(320,470);
//     ctx.lineTo(320+70*Math.cos(90 * (Math.PI/180))),(400+70*Math.sin(90 * (Math.PI/180)));
//     ctx.stroke();
// //(1,0)
//     // ctx.moveTo(320, +70      470);
//     ctx.lineTo(320,400);
//     ctx.stroke();

// var toRadian = Math.PI / 180;
// var toDegree = 180 / Math.PI;

// var angle = 90;

// // alert("hello");
// var angleInRadians = angle * toRadian;
// var angleInDegrees = angleInRadians * toDegree;

// alert(Math.sin(Math.radians(60)));
// alert(Math.cos(Math.radians(60)));

// // Converts from degrees to radians.
// Math.radians = function(degrees) {
//     return degrees * Math.PI / 180;
//   };
   
//   // Converts from radians to degrees.
//   Math.degrees = function(radians) {
//     return radians * 180 / Math.PI;
//   };

// alert(Math.radians(90));  // 1.5707963267948966
// alert(Math.radians(180)); // 3.141592653589793
 
// alert(Math.degrees(1.5707963267948966)); // 90
// alert(Math.degrees(3.141592653589793));  // 180



// // alert(Math.cos(60));
    

//     // ctx.moveTo(320,470)
//     // ctx.lineTo(320,400 + Math.sin(0));
//     // ctx.stroke();

//     // ctx.moveTo(320+Math.cos(360),470+Math.sin(360));
//     // ctx.lineTo(370+Math.cos(360),400+Math.sin(360));
//     // ctx.stroke();

//     // ctx.moveTo(320+Math.cos(10000),470+Math.sin(10000));
//     // ctx.lineTo(370+Math.cos(10000),400+Math.sin(10000));
//     // ctx.stroke();

//     //converts radians to degrees
//     function toDegrees (angle) {
//         return angle * (180 / Math.PI);
//       }

      

  
   
//     var linex1, linex2, liney1, liney2

//     // myGameArea.start();
// }

// function accelerate(n) {
//     myGamePiece.gravity = n;
// }

// function startGame1() = {
//     canvas : document.createElement("canvas")
//     // var c = document.getElementById("myCanvas");
//     // x variable for height
//     this.canvas.width = 480;
//     // y variable for width
//     this.canvas.height = 640;
//     this.context = this.canvas.getContext("2d");

//     document.body.insertBefore(this.Canvas, document.body.childNodes[0]);
//     // var ctx = c.getContext("2d");
//     this.context.beginPath();
//     this.context.arc(95,50,40,0,2*Math.PI);
//     this.context.stroke();

 }


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        // x variable for height
        this.canvas.width = 480;
        // y variable for width
        this.canvas.height = 640;
        this.canvas.style = solid;
        this.canvas.color = d3d3d3;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context.beginPath();
        this.context.arc(95,50,40,0,2*Math.PI);
        this.context.stroke();
        // this.frameNo = 0;
        // this.interval = setInterval(updateGameArea, 20);
        },
        
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}


// This section updates the games.  Moves the backs from left to right


// function updateGameArea() {
//     var x, height, gap, minHeight, maxHeight, minGap, maxGap;
//     for (i = 0; i < myObstacles.length; i += 1) {
//         if (myGamePiece.crashWith(myObstacles[i])) {
//             return;
//         } 
//     }
//     // clears the game area
//     myGameArea.clear();
//     // increases frame by 1
//     myGameArea.frameNo += 1;
//     if (myGameArea.frameNo == 1 || everyinterval(150)) {
//         x = myGameArea.canvas.width;
//         minHeight = 20;
//         maxHeight = 200;
//         height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
//         minGap = 50;
//         maxGap = 200;
//         gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
//         myObstacles.push(new component(10, height, "green", x, 0));
//         myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
//     }
//     for (i = 0; i < myObstacles.length; i += 1) {
//         myObstacles[i].x += -1;
//         myObstacles[i].update();
//     }
//     // myScore.text="SCORE: " + myGameArea.frameNo;
//     myScore.text="SCORE: ";
//     myScore.update();
//     myGamePiece.newPos();
//     myGamePiece.update();
// }

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

