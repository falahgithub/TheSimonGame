

var gamePattern = [];                                              // pattern to match
var buttonColors = ["red", "blue", "green", "yellow"];             // buttons to pick from

var i = 0;
var randomChosenColor
while (i < 4){
randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
console.log(gamePattern);

document.querySelector("." + randomChosenColor).classList.add("pressed");
setTimeout(function (){
document.querySelector("." + randomChosenColor).classList.remove("pressed");},1000);
i++;
}




//while (i< gamelevel):
//for (p = 0; p< document.querySelectorAll(".btn").length; p++){
//document.querySelectorAll(".btn")[p].addEventListener("click", function (e){
//console.log(this.classList[1]);
//buttonPressed = this.classList[1];
//game = matchArray(buttonPressed);
//})
//}
//
//
//gamelevel++;
//}



function nextSequence() {
var randomNumber = Math.floor(Math.random() * 4) ;
return randomNumber;
}




//function matchArray(key) {
//if (key === gamePattern[j]) {
//console.log("Correect");
//return true;
//} else {
//return false;}
//}
//
//
