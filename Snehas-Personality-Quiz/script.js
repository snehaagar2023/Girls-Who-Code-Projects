/*Add your JavaScript here*/

var horrorScore = 0; 
var adventureScore = 0;
var romcomScore = 0;
var mysteryScore = 0;

var questionCount = 0;
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");

q1a1.addEventListener("click", adventure);
q1a2.addEventListener("click", romcom);
q1a3.addEventListener("click", mystery);
q1a4.addEventListener("click", horror);

q2a1.addEventListener("click", horror);
q2a2.addEventListener("click", adventure);
q2a3.addEventListener("click", mystery);
q2a4.addEventListener("click", romcom);

q3a1.addEventListener("click", adventure);
q3a2.addEventListener("click", mystery);
q3a3.addEventListener("click", romcom);
q3a4.addEventListener("click", horror);

q4a1.addEventListener("click", adventure);
q4a2.addEventListener("click", romcom);
q4a3.addEventListener("click", mystery);
q4a4.addEventListener("click", horror);

q5a1.addEventListener("click", adventure);
q5a2.addEventListener("click", mystery);
q5a3.addEventListener("click", romcom);
q5a4.addEventListener("click", adventure);
q5a5.addEventListener("click", horror);


function adventure() {
  adventureScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " adventureScore = " + adventureScore);

  if (questionCount == 5) {
  console.log("the quiz is done");
    updateResults();
}
}



function horror() {
  horrorScore+= 1;
  questionCount+= 1;

  console.log("questionCount = " + questionCount + " horrorScore = " + horrorScore);

  if (questionCount == 5) {
  console.log("the quiz is done");
    updateResults();
}
  
}

function romcom() {
  romcomScore+= 1;
  questionCount+= 1;

  console.log("questionCount = " + questionCount + " romcomScore = " + romcomScore);

  if (questionCount == 5) {
  console.log("the quiz is done");
    updateResults();
}
  
}

function mystery() {
  mysteryScore+= 1;
  questionCount+= 1;

  console.log("questionCount = " + questionCount + " mysteryScore = " + mysteryScore);

  if (questionCount == 5) {
  console.log("the quiz is done");
    updateResults();
}
}

function updateResults() {
  if(adventureScore >= mysteryScore && adventureScore >= horrorScore && adventureScore >= romcomScore) {
    result.innerHTML = "Your genre is adventure!";
    console.log("Your genre is adventure!");
  }
  else if(mysteryScore >= adventureScore && mysteryScore >= horrorScore && mysteryScore >= romcomScore) {
    result.innerHTML = "Your genre is mystery!";
    console.log("Your genre is mystery!");
  }
  else if(horrorScore >= adventureScore && horrorScore >= mysteryScore && horrorScore >= romcomScore) {
    result.innerHTML = "Your genre is horror!";
    console.log("Your genre is horror!");
  }
  else{
    result.innerHTML = "Your genre is romcom!";
    console.log("Your genre is romcom!");
  }
}


