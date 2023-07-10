
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var audio;
var level = 0;
var gameStarted = false;
var gameCheck;
var buttonSequence = 0;


$(document).keypress(function(e){

  if (gameStarted === false) {
  nextSequence();
  gameStarted = true;
}
})

$(".btn").click(function(e){
  userChosenColour = $(e.target).attr("id");console.log(userChosenColour);  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);  playSound(userChosenColour);


  gameCheck = checkAnswer(buttonSequence);
  console.log(gameCheck);
  if (gameCheck === true && buttonSequence === level ) {
    setTimeout(nextSequence, 1000);
  } else if (gameCheck === false ) {
    startOver();
  }
})










function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}


function checkAnswer(lev) {
  var val;
  // for (var i = 0; i < level ; i++) {
  if (userClickedPattern[lev] === gamePattern[lev]) {  val =  true; }
  else {
    audio = new Audio("sounds/wrong.mp3");    audio.play();

    $("body").addClass("game-over");    $("h1").text("Game Over, Press Any Key to Restart");    setTimeout(function () {$("body").removeClass("game-over");},200);

    val = false;
  }
// }
buttonSequence++;
return val;
}


function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4); var randomChosenColour = buttonColors[randomNumber];

  level++; $("h1").text("Level " + level);

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#" + randomChosenColour).fadeIn(1000).fadeOut(100).fadeIn(1000);
  playSound(randomChosenColour);
  userClickedPattern = [];
  buttonSequence = 0;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
      $("#" + name).removeClass("pressed");
  }, 100);
}
