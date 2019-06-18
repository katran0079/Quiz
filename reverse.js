//Timer
window.onload = function() {
  $("#start").on("click", start);
};
var intervalId;
var clockRunning = false;
var time = 300;
var score = 0;
function start() {
  score = 0;
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    Qwriter();
    Awriter();

    if (time < 0) {
      clockRunning = false;
      grade();
      rank();
    }
  }
}
function count() {
  time--;
  var converted = timeConverter(time);
  console.log(converted);
  $("#display").text(converted);
  if (time === 0) {
    return;
  }
}
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;
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

var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var a9;
var a10;

function Awriter() {
  var A1 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Great Jagras")
    .attr("id", "1a");
  var B1 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Anjanath")
    .attr("id", "1b");
  var C1 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Rathalos")
    .attr("id", "1c");
  var D1 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Paolomu")
    .attr("id", "1d");
  $("#a1").append(A1);
  $("#a1").append(B1);
  $("#a1").append(C1);
  $("#a1").append(D1);
  $(A1).on("click", function() {
    a1 = "a";
    console.log(a1);
  });
  $(B1).on("click", function() {
    a1 = "b";
    console.log(a1);
  });
  $(C1).on("click", function() {
    a1 = "c";
    console.log(a1);
  });
  $(D1).on("click", function() {
    a1 = "d";
    console.log(a1);
  });
  var A2 = $("<button>")
    .addClass("btn btn-success")
    .text("A. One")
    .attr("id", "2a");
  var B2 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Two")
    .attr("id", "2b");
  var C2 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Three")
    .attr("id", "2c");
  var D2 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Four")
    .attr("id", "2d");
  $("#a2").append(A2);
  $("#a2").append(B2);
  $("#a2").append(C2);
  $("#a2").append(D2);
  $(A2).on("click", function() {
    a2 = "a";
  });
  $(B2).on("click", function() {
    a2 = "b";
  });
  $(C2).on("click", function() {
    a2 = "c";
  });
  $(D2).on("click", function() {
    a2 = "d";
  });

  var A3 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Emperor")
    .attr("id", "3a");
  var B3 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Nuisance")
    .attr("id", "3b");
  var C3 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Queen")
    .attr("id", "3c");
  var D3 = $("<button>")
    .addClass("btn btn-success")
    .text("D. King")
    .attr("id", "3d");
  $("#a3").append(A3);
  $("#a3").append(B3);
  $("#a3").append(C3);
  $("#a3").append(D3);
  $(A3).on("click", function() {
    a3 = "a";
  });
  $(B3).on("click", function() {
    a3 = "b";
  });
  $(C3).on("click", function() {
    a3 = "c";
  });
  $(D3).on("click", function() {
    a3 = "d";
  });
  var A4 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Sword and Shield")
    .attr("id", "4a");
  var B4 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Heavy Bowgun")
    .attr("id", "4b");
  var C4 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Longsword")
    .attr("id", "4c");
  var D4 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Hammer")
    .attr("id", "4d");
  $("#a4").append(A4);
  $("#a4").append(B4);
  $("#a4").append(C4);
  $("#a4").append(D4);
  $(A4).on("click", function() {
    a4 = "a";
  });
  $(B4).on("click", function() {
    a4 = "b";
  });
  $(C4).on("click", function() {
    a4 = "c";
  });
  $(D4).on("click", function() {
    a4 = "d";
  });

  var A5 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Sword and Shield")
    .attr("id", "5a");
  var B5 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Longsword")
    .attr("id", "5b");
  var C5 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Hammer")
    .attr("id", "5c");
  var D5 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Hunting Horn")
    .attr("id", "5d");
  $("#a5").append(A5);
  $("#a5").append(B5);
  $("#a5").append(C5);
  $("#a5").append(D5);
  $(A5).on("click", function() {
    a5 = "a";
  });
  $(B5).on("click", function() {
    a5 = "b";
  });
  $(C5).on("click", function() {
    a5 = "c";
  });
  $(D5).on("click", function() {
    a5 = "d";
  });

  var A6 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Leshen")
    .attr("id", "6a");
  var B6 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Behemoth")
    .attr("id", "6b");
  var C6 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Fatalis")
    .attr("id", "6c");
  var D6 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Deviljho")
    .attr("id", "6d");
  $("#a6").append(A6);
  $("#a6").append(B6);
  $("#a6").append(C6);
  $("#a6").append(D6);
  $(A6).on("click", function() {
    a6 = "a";
  });
  $(B6).on("click", function() {
    a6 = "b";
  });
  $(C6).on("click", function() {
    a6 = "c";
  });
  $(D6).on("click", function() {
    a6 = "d";
  });
  var A7 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Kirin")
    .attr("id", "7a");
  var B7 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Zorah Magdaros")
    .attr("id", "7b");
  var C7 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Lunastra")
    .attr("id", "7c");
  var D7 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Deviljho")
    .attr("id", "7d");
  $("#a7").append(A7);
  $("#a7").append(B7);
  $("#a7").append(C7);
  $("#a7").append(D7);
  $(A7).on("click", function() {
    a7 = "a";
  });
  $(B7).on("click", function() {
    a7 = "b";
  });
  $(C7).on("click", function() {
    a7 = "c";
  });
  $(D7).on("click", function() {
    a7 = "d";
  });

  var A8 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Hunter Traps")
    .attr("id", "8a");
  var B8 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Slinger Ammo")
    .attr("id", "8b");
  var C8 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Barrel Bombs")
    .attr("id", "8c");
  var D8 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Status Ailments")
    .attr("id", "8d");
  $("#a8").append(A8);
  $("#a8").append(B8);
  $("#a8").append(C8);
  $("#a8").append(D8);

  $(A8).on("click", function() {
    a8 = "a";
  });
  $(B8).on("click", function() {
    a8 = "b";
  });
  $(C8).on("click", function() {
    a8 = "c";
  });
  $(D8).on("click", function() {
    a8 = "d";
  });

  var A9 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Water")
    .attr("id", "9a");
  var B9 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Ice")
    .attr("id", "9b");
  var C9 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Fire")
    .attr("id", "9c");
  var D9 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Thunder")
    .attr("id", "9d");
  $("#a9").append(A9);
  $("#a9").append(B9);
  $("#a9").append(C9);
  $("#a9").append(D9);

  $(A9).on("click", function() {
    a9 = "a";
  });
  $(B9).on("click", function() {
    a9 = "b";
  });
  $(C9).on("click", function() {
    a9 = "c";
  });
  $(D9).on("click", function() {
    a9 = "d";
  });

  var A10 = $("<button>")
    .addClass("btn btn-success")
    .text("A. Gold Rathian")
    .attr("id", "1a");
  var B10 = $("<button>")
    .addClass("btn btn-success")
    .text("B. Silver Rathalos")
    .attr("id", "1b");
  var C10 = $("<button>")
    .addClass("btn btn-success")
    .text("C. Nibelsnarf")
    .attr("id", "1c");
  var D10 = $("<button>")
    .addClass("btn btn-success")
    .text("D. Tigrex")
    .attr("id", "10d");
  $("#a10").append(A10);
  $("#a10").append(B10);
  $("#a10").append(C10);
  $("#a10").append(D10);

  $(A10).on("click", function() {
    a10 = "a";
  });
  $(B10).on("click", function() {
    a10 = "b";
  });
  $(C10).on("click", function() {
    a10 = "c";
  });
  $(D10).on("click", function() {
    a10 = "d";
  });
}

function Qwriter() {
  $("#textDiv").empty();
  $("#q1").text(
    "What is the first large monster that you encounter in Monster Hunter World?"
  );
  $("#q2").text(
    "How many times can you and your group collectively 'cart' in a hunt?"
  );
  $("#q3").text("Rathalos is known as the ______ of the Skies?");
  $("#q4").text("Which of the following weapon types cannot cut tails?");
  $("#q5").text(
    "Which of the following weapon types (without impact mantle) cannot 'KO' a monster?"
  );
  $("#q6").text(
    "Which of the following monsters has not appeared in Monster Hunter World?"
  );
  $("#q7").text(
    "Which of the following monsters are considered Elder Dragons?"
  );
  $("#q8").text(
    "Which of the following mechanics are Elder Dragons immune to?"
  );
  $("#q9").text("Which element is most effective against Nergigante?");
  $("#q10").text(
    "Which of these monsters are set to return in Monster Hunter World's expansion, Iceborne?"
  );
}
function grade() {
  $(".QAdiv").empty();
  if (a1 === "a") {
    score++;
  } else {
    var t1 = $("<p>").text(
      "You got Question 1 wrong. The correct answer was A."
    );
    $(".QAdiv").append(t1);
  }
  if (a2 === "b") {
    score++;
  } else {
    var t2 = $("<p>").text(
      "You got Question 2 wrong. The correct answer was B."
    );
    $(".QAdiv").append(t2);
  }
  if (a3 === "c") {
    score++;
  } else {
    var t3 = $("<p>").text(
      "You got Question 3 wrong. The correct answer was C."
    );
    $(".QAdiv").append(t3);
  }
  if (a4 === "d") {
    score++;
  } else {
    var t4 = $("<p>").text(
      "You got Question 4 wrong. The correct answer was D."
    );
    $(".QAdiv").append(t4);
  }

  if (a5 === "b") {
    score++;
  } else {
    var t5 = $("<p>").text(
      "You got Question 5 wrong. The correct answer was B."
    );
    $(".QAdiv").append(t5);
  }

  if (a6 === "c") {
    score++;
  } else {
    var t6 = $("<p>").text(
      "You got Question 6 wrong. The correct answer was C."
    );
    $(".QAdiv").append(t6);
  }
  if (a7 === "d") {
    score++;
  } else {
    var t7 = $("<p>").text(
      "You got Question 7 wrong. The correct answer was D."
    );
    $(".QAdiv").append(t7);
  }
  if (a8 === "a") {
    score++;
  } else {
    var t8 = $("<p>").text(
      "You got Question 8 wrong. The correct answer was A."
    );
    $(".QAdiv").append(t8);
  }
  if (a9 === "d") {
    score++;
  } else {
    var t9 = $("<p>").text(
      "You got Question 9 wrong. The correct answer was A."
    );
    $(".QAdiv").append(t9);
  }
  if (a10 === "d") {
    score++;
  } else {
    var t10 = $("<p>").text(
      "You got Question 10 wrong. The correct answer was D."
    );
    $(".QAdiv").append(t10);
  }
}

function rank() {
  if (score === 10) {
    var rank1 = $("<h3>").text("You're a G-Rank Legend!");
    var rank1a = $("<p>").text(
      "Congratulations! You've earned a perfect score! You're one of the best of the best out there!"
    );
  }
  if (score > 7 && score < 10) {
    var rank2 = $("<h3>").text("You're a G-Rank Hunter!");
    var rank2a = $("<p>").text(
      "Congratulations! You've earned an almost perfect score of " +
        score +
        "/10 You're an elite hunter!"
    );
  }
  if (score === 7) {
    var rank3 = $("<h3>").text("You're a High Rank Hunter!");
    var rank3a = $("<p>").text(
      "You're a better than average hunter with a score of " +
        score +
        "/10. With time, you'll get even better."
    );
  }
  if (score > 4 && score < 7) {
    var rank4 = $("<h3>").text("You're a Normal Rank Hunter!");
    var rank4a = $("<p>").text(
      "You've still got a long way to go with a score of " +
        score +
        "/10 but we all have to start somewhere right? Keep trying your best to improve."
    );
  }
  if (score === 4 || score < 4) {
    var rank5 = $("<h3>").text("You're a Beginner Hunter!");
    var rank5 = $("<p>").text(
      "There's no shame in not knowing everything at the beginning! Your score was " +
        score +
        "/10. Keep hunting and you'll learn all you need to become the best you can be."
    );
  }
}

var submit = $("<button>").attr("id, submit");
$("#submitplace").append(submit);
submit.on("click", function() {
  rank();
  grade();
});
