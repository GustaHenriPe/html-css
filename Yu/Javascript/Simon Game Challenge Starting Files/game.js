var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;


$("body").keydown(function() { 
    if (gameStarted ==  false) {
        nextSequence()
        gameStarted = true;
    }
});


$(".btn").on("click", function(event){
    if (gameStarted == true){
        var userChosenColour = event.target.id
        userClickedPattern.push(userChosenColour)
    
        playSound(userChosenColour);
        animatePress(userChosenColour);
    
        checkAnswer(userClickedPattern.length-1);
    }
    
});



function nextSequence(){

    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    
    $("." + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    
    level++
}


function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    }, 100)
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence()
            }, 1000);

            userClickedPattern = []
        }

    }else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)
        $("h1").text("Game Over, Press Any Key to Restart ");
        startOver()
    }
}

function startOver(){
   level = 0
   gamePattern = []
   userClickedPattern = []
   gameStarted = false
}




           
