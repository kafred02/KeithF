var myGamePiece;
var myObstacles = [];
var myScore;
var x = 350
var r = 50

//https://www.w3schools.com/graphics/game_intro.asp

function startGame() {
    // myGamePiece = new component(30, 30, "blue", 240, 10);
    // myGamePiece.gravity = 0.05;
    // The px size, style size, color, x, y axis and type componenent
    // myScore = new component("30px", "Consolas", "black", 280, 40, "text");

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    var n = 0
    var x = 320
    
    // height (y) = 480, width (x) = 640
    ctx.arc(320,470,r,Math.PI,0);
    
    // Math.radians = function(degrees) {
    //     return degrees * Math.PI / 180;
    // };

    // ctx.arc(320,470,10,Math.radians(90),Math.radians(90));
    
    // draws the diameter of the circle  
    ctx.moveTo(270,470);
    ctx.lineTo(370,470);
    // draws the arrow of circle
    ctx.moveTo(x,470);
    ctx.lineTo(x,400);
    ctx.stroke();    


    // adds a bucket to the screen
    // var bucketball1 = new component(30, 30, "red", 10, 120);
    myGamePiece = new component(40, 40, "red", 10, 600);
    myGamePiece.update();
    
    


   
    

 }



function moveshaftright(event){
    var x = event.clientX;
    var mousex = event.clientX
    var r = 50;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var ymouse = event.clientY;
    // if x is less than 200 than subtract the middle of the circle (320) from x to return x back to the value it would if greater than 200
    if (x < 321){
        var y = (Math.sqrt(Math.abs(Math.pow(0,2) - Math.pow(x + ((320-x)*2),2 ))));
        var x = Math.max(x,195);
     }else{
        var y = (Math.sqrt(Math.abs(Math.pow(0,2) - Math.pow(x,2))));
        var x = Math.min(x,445);
     }


    //clears the canvas
    canvas.width = canvas.width;

     // height (y) = 480, width (x) = 640
     ctx.arc(320,470,r,Math.PI,0);

     // draws the diameter of the circle  
    ctx.moveTo(270,470);
    ctx.lineTo(370,470);
    // draws the diameter of the circle  
    ctx.moveTo(270,470);
    ctx.lineTo(370,470);
    // draws the arrow of circle
    ctx.moveTo(320,470);
    // draws the ending point of the line
    ctx.lineTo(x,Math.min(y,445)+25);
    ctx.stroke(); 
   
    // displays the coordinates in html
    var coor = "X coords: " + mousex + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;



    }


function fire(){

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var x = event.clientX;
    var y = event.clientY;
    
    // alert("This worked!")
         // draws the arrow of circle
    ctx.moveTo(320,470);
    // draws the ending point of the line
    ctx.lineTo(x,y);
    ctx.stroke(); 
    
        // alert("This worked!")
    // draws the arrow of circle  // ctx.moveTo(320,470);
    // // draws the ending point of the line
    // ctx.lineTo(x,y-300);
    // ctx.stroke(); 
    
  
    }




function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;

}


function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}



// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         // x variable for height
//         this.canvas.width = 480;
//         // y variable for width
//         this.canvas.height = 640;
//         this.canvas.style = solid;
//         this.canvas.color = d3d3d3;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.context.beginPath();
//         this.context.arc(95,50,40,0,2*Math.PI);
//         this.context.stroke();
//         // this.frameNo = 0;
//         // this.interval = setInterval(updateGameArea, 20);
//         },
        
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }



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
        var rocktop = myGameArea.canvas.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
            alert("this worked!")
        }
        else if (this.y < rocktop){
            this.y = rocktop;
            this.gravitySpeed = 0;
            alert("This worked")
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

// function everyinterval(n) {
//     if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
//     return false;
// }

