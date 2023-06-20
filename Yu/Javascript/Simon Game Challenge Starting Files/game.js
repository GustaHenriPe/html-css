var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()]
gamePattern.push(randomChosenColour)

console.log(randomChosenColour)
$("."+randomChosenColour).fadeOut(100).fadeIn(100)

switch(randomChosenColour){
        case "blue":
            var blue = new Audio('sounds/blue.mp3')
            blue.play();
        break;
        case "red":
            var red = new Audio('sounds/red.mp3')
            red.play();
        break;
        case "green":
            var green = new Audio('sounds/green.mp3')
            green.play();
        break;
        case "yellow":
            var yellow = new Audio('sounds/yellow.mp3')
            yellow.play();
        break;
    }


           
