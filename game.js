
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];


var gameLevel = 1;
var game = true;
var btnColor;





function nextSequence() {
  var ranBtn = ranButton();
  gamePattern.push(ranBtn);

}


function ranButton() {
return buttonColors[Math.floor(Math.random() * 4)];
}


while (game) {

  for (var p = 0; p < gameLevel; p++) {
    nextSequence();
  }

  var q = 0;
  while (game && q < gameLevel) {
  console.log(q);

  // $(".btn").click(btnClicked);
  $(".btn").click(checkAnswer);

  // console.log(userBtn);
  // userBtn = userSelectedButton();
  // game = checkAnswer(btnColor, q );
  console.log(game);
  q++;
}

  // gameLevel++;
  game= false;
}


function btnClicked(e) {
  btnColor  = $(e.target).attr("id");
  console.log(btnColor);
}



function checkAnswer(e) {
  console.log("checkAnswer is working!");
  //
  // if ($(e.target).attr("id") === gamePattern[q]) {
  //   console.log("Correct!");
  //   game = true;
  // } else {
  //   console.log("Wrong!");
  //   game = false;
  // }
}

function userSelectedButton() {

}
