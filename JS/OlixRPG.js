var myGamePiece;
var myScore;

// array of stats
var heroesStats = ["Hero Name", "Hero HP", "Hero Strength", "Hero Magic", "Hero Defense"];
// array of values
var mainCharacterValues = ["Olix", 5, 1, 1, 1]


var items = [];


// Constructor function for Person objects

function Heroes(heroName, heroHP, heroStr, heroMgc, heroDf) {
    this.heroName =  heroName;
    this.heroHP = heroHP;
    this.heroStr = heroStr;
    this.heroMgc = heroMgc;
    this.heroDf = heroDf;
}
// this is a constructor
function Enemy(enemyName, enemyHP, enemyStr, enemyMgc, enemyDf,goldGiven, expGiven,) {
    this.enemyName = enemyName;
    this.enemyHP = enemyHP;
    this.enemyStr = enemyStr;
    this.enemyMgc = enemyMgc;
    this.enemyDf = enemyDf;
    this.goldGiven = goldGiven;
    this.expGiven = expGiven;
}


var mainCharacter = new Heroes("Olix", 5, 1, 1, 1);
var enemySlime = new Enemy("Slime",1,1,0, 0);

console.log(Heroes.length);
console.log(Heroes.prototype.constructor);
console.log(Heroes.val);

for (i = 0; i < Heroes.length; i++){
    $("#demo").append("<p class='mt-1 pt-1'> " + heroesStats[i] + ": " + mainCharacterValues[i] + " </p>");
}
    // $.each(mainCharacter, function(i=0,) {
    //     $("#demo").append("<p class='mt-1 pt-1'> " + HeroesStats[i] + "</p>")

    //     // $("#demo").append(document.createHTMLNode(""))
    // });



        


$("#startGame").click(function(){
    // empties the 'startGameHTML' div class on the olixRPG.html file
    
    // $("h1").animate({fontSize: '3em'}, "slow");
    
            $("#startGame").fadeOut();
            $("#demo").fadeOut("slow");
            $("#demo").fadeOut(1000).delay(3000);
            $("h1").css("color: red");
            // $("h1").slideDown("slow");
            $("h1").animate({
                left: '250px',
                opacity: '0.8',
                Color: "rgb(255, 0, 0)",
                height: '+=250px',
                fontSize: "10em",
                opacity: '-0.1'
                

                // width: '150px'
            
            });
            $("#startGameHTML").css("color: red");
            // $("h1").fadeOut(3000);
            $("#startGameHTML").delay(300).slideUp("slow").hide(3000,storyOne());
            // function sleep(delay) {
            //     var start = new Date().getTime();
            //     while (new Date().getTime() < start + delay);
            //     }
                
            

    
    });


function storyOne(){
   
    
    // $("#demo").text("Olix Awakens");storyOne
    $("#storyOne").show().append("<p class='mt-5 pt-5'>Olix Awakens</p>").delay(1000).append("<p class='mt-1 pt-1'>He's tired after a long battle at Wigloft</p>").append("<button> continue </button>");
        $("button").click(function(){
        
        $("#storyOne").empty();
            // alert("This is a test");
            $("#storyOne").show().append("<p class='mt-5 pt-5'>It has been a long and treacherous war that has been going on for many centuries. </p>").delay(1000).append("<p class='mt-1 pt-1'>Many say a legend has been born that will stop the bloodshed...</p>").append("<button> continue </button>");
        });

    // $("#startGameHTML").empty();
};