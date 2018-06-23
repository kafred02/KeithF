var myGamePiece;
var myScore;

function startGame() {
    myGamePiece = new component(30, 30, "red", 80, 75);
    myScore = new component("30px", "Consolas", "black", 40, 40, "text");
    myGameArea.start();
    
}

// this is an object
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[3]);
        this.interval = setInterval(updateGameArea, 20);  
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    }, 
        

    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// this is a class?
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 0.3;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
        ctx.beginPath();
        ctx.arc(this.x,this.y,30,0,2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill() = color;
        ctx.closePath();
        //line color
        // ctx.lineWidth = 30;
        // ctx.strokeStyle = "#000000";
        ctx.stroke();
          }

        // ctx.beginPath();
        // ctx.arc(this.x,this.y,100,0,2*Math.PI);
        // ctx.fillStyle = "yellow";
        // ctx.fill() = "yellow";
        // ctx.closePath();
        // ctx.stroke();

        // ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;

        
        
        // this.hitwall();
        this.hitBottom();
        // this.hitTop();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        var rockright = myGameArea.canvas.width - this.width;
        var rocktop = 1 + this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
            this.speedY -= 1
        }
        else if (this.y < this.height){
            this.y = this.height;
            
            this.speedY += 1
            // alert("This worked")
        }

        else if (this.x > rockright){
            this.x  = rockright
            this.speedX -= 5;

        }

        else if (this.x < this.width){
            this.x  = this.width
            this.speedX += 5;

        }

        
    }

    this.hitwall = function(){
        var rockright =  myGame.Area.canvas.width - this.width;

        if (this.x > rockright){
            this.x -= rockright;
            this.gravityspeed = 0;


        }


    }


    //This creates a cool dribble effect
    // this.hitBottom = function() {
    //     var rockbottom = myGameArea.canvas.height - this.height;
    //     var rocktop = myGameArea.canvas.height + this.height;
    //     if (this.y > rockbottom) {
    //         this.y = rockbottom;
    //         this.gravitySpeed = 0;
            
    //     }
    //     else if (this.y < 0){
    //         this.y = this.height;
    //         this.gravitySpeed = 1;
    //         // alert("This worked")
    //     }
    // }

    // this.hitTop = function() {
    //     var rocktop = myGameArea.canvas.height;
    //     if (this.y < rocktop) {
    //         this.y = rocktop;
    //         this.gravitySpeed = -(this.gravitySpeed * this.bounce);
    //     }
    // }

}

function updateGameArea() {
    // clears the game function
    myGameArea.clear();
    
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX -= 1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX += 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY -= 1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY += 1; }
    //uupdates the positions
    myGamePiece.newPos();
    myGamePiece.update();
    
}

    // this.hitTop = function() {
    //     var rockbottom = myGameArea.canvas.height + this.height;
    //     if (this.y < rockbottom) {
    //         this.y = rockbottom;
    //         this.gravitySpeed = +(this.gravitySpeed * this.bounce);
    //     }
    // }


    // if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    // if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    // if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    // if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }


// function checkinput(){
//     // left arrow
//     if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
//     // right arrow
//     if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
//     // up arrow
//     if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
//     // down arrow
//     if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }

// }

function moveup() {
    myGamePiece.speedY -= 1; 
}

function movedown() {
    myGamePiece.speedY += 1; 
}

function moveleft() {
    myGamePiece.speedX -= 1; 
}

function moveright() {
    myGamePiece.speedX += 1; 
}

// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.newPos();
//     myGamePiece.update();
// }

