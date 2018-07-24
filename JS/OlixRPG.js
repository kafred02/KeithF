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
            $("#demo").fadeOut(1000);
            $("h1").css("color: red");
            // $("h1").slideDown("slow");
            $("h1").animate({
                left: '250px',
                opacity: '0.5',
                Color: "rgb(255, 0, 0)",
                height: '+=150px',
                fontSize: "10em"
                

                // width: '150px'
            
            });
            $("h1").css("color: red");
            // $("h1").fadeOut(3000);
            $("h1").slideUp("slow").hide(3000,storyOne());
            // function sleep(delay) {
            //     var start = new Date().getTime();
            //     while (new Date().getTime() < start + delay);
            //     }
                
            

    
    });


function storyOne(){
   
    
    // $("#demo").text("Olix Awakens");
    $("#storyOne").show().append("<p class='mt-5 pt-5'>Olix Awakens</p>");

    
    // $("#startGameHTML").empty();
};