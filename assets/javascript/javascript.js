//Timer
window.onload = function() {
  $("#start").on("click", start);
};

var intervalId;
var clockRunning = false;
var converted;
var time = 300;
var score = 0;
var minutes;
var seconds;

function start() {
  $(".QAdiv").show();
  clockRunning = true;
  if ((clockRunning = true)) {
    intervalId = setInterval(count, 1000);
    setTimeout(grade, 300000);
  } else {
    return;
  }

  $("#submit").on("click", function() {
    grade();
    $("#submit").hide();
  });
}

function displayTimer() {
  if (clockRunning == true) {
    $("#display").text(converted);
  } else {
    $("#display").text("00:00");
  }
}

function count() {
  time--;
  converted = timeConverter(time);
  displayTimer();
  if (minutes == 00 && seconds == 00) {
    return;
  }
}

function timeConverter(t) {
  minutes = Math.floor(t / 60);
  seconds = t - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

var userArr = [];
var answersArr = ["a", "a", "b", "d", "c", "d", "b", "b", "c", "a"];

function grade() {
  clockRunning = false;
  minutes == 00;
  seconds == 00;
  var a1 = $("input[name=question1]:checked").val();
  var a2 = $("input[name=question2]:checked").val();
  var a3 = $("input[name=question3]:checked").val();
  var a4 = $("input[name=question4]:checked").val();
  var a5 = $("input[name=question5]:checked").val();
  var a6 = $("input[name=question6]:checked").val();
  var a7 = $("input[name=question7]:checked").val();
  var a8 = $("input[name=question8]:checked").val();
  var a9 = $("input[name=question9]:checked").val();
  var a10 = $("input[name=question10]:checked").val();
  console.log(a1);
  userArr.push(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  for (var i = 0; i < userArr.length; i++) {
    if (userArr[i] == answersArr[i]) {
      score++;
      console.log(score);
    }
  }
  $(".QAdiv").hide();
  $("#retry").show();
  $("#hello").hide();
  rank();
}

function rank() {
  $("<button>").attr("");
  console.log(score);
  if (score == 10) {
    var rank1 = $("<h3>").text("You're a G-Rank Legend!");
    var rank1a = $("<p>").text(
      "Congratulations! You've earned a perfect score! You're one of the best of the best!"
    );
    $("#textDiv").append(rank1);
    $("#textDiv").append(rank1a);
  }
  if (score > 7 && score < 10) {
    var rank2 = $("<h3>").text("You're a G-Rank Hunter!");
    var rank2a = $("<p>").text(
      "Congratulations! You've earned an almost perfect score of " +
        score +
        "/10 You're an elite hunter!"
    );
    $("#textDiv").append(rank2);
    $("#textDiv").append(rank2a);
  }
  if (score === 7) {
    var rank3 = $("<h3>").text("You're a High Rank Hunter!");
    var rank3a = $("<p>").text(
      "You're a better than average hunter with a score of " +
        score +
        "/10. With time, you'll get even better."
    );
    $("#textDiv").append(rank3);
    $("#textDiv").append(rank3a);
  }
  if (score > 4 && score < 7) {
    var rank4 = $("<h3>").text("You're a Normal Rank Hunter!");
    var rank4a = $("<p>").text(
      "You've still got a long way to go with a score of " +
        score +
        "/10 but we all have to start somewhere right? Keep trying your best to improve."
    );
    $("#textDiv").append(rank4);
    $("#textDiv").append(rank4a);
  }
  if (score === 4 || score < 4) {
    var rank5 = $("<h3>").text("You're a Beginner Hunter!");
    var rank5a = $("<p>").text(
      "There's no shame in not knowing everything at the beginning! Your score was " +
        score +
        "/10. Keep hunting and you'll learn all you need to become the best you can be."
    );
    $("#textDiv").append(rank5);
    $("#textDiv").append(rank5a);
  }
  $("#retry").show();
}

$(".QAdiv").hide();
$("#retry").hide();
