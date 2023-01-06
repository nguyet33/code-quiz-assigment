//Creating variable for start button
var startButton = document.getElementById("js-start-btn");
var questionContainer = document.getElementById("js-question-container");
var timeCountdownEl = document.getElementById("js-countdown");
var questionTextEl = document.getElementById("js-quiz");
var questionChoicesEl = document.getElementById("js-question-choices");

var choiceOne = document.getElementById("js-start-btn");
var choiceTwo = document.getElementById("js-start-btn");
var choiceThree = document.getElementById("js-start-btn");
var choiceFour = document.getElementById("js-start-btn");

//create an array of objects that represent questions and their answers
var objArray = [
  {
    question: "What does HTML stands for within coding language?",
    answer: ["Fasle", "Not True", "Incorrect", "HyperText Markup Langauge"],
    correctIndex: "HyperText Markup Langauge",
  },
  {
    question: "What does CSS stands for within coding language?",
    answer: ["Fasle", "Not True", "Cascading Styling Sheet", "Incorrect"],
    correctIndex: "Cascading Styling Sheet",
  },
];

startButton.addEventListener("click", function () {
  console.log("Start Quiz");
  //display question container by removing a "is-hidden"id
  questionContainer.classList.remove("is-hidden");
  startButton.classList.add("is-hidden");
  //create a timer countdown function outside this function
  startTimer();
  //have timer countdown by recalling the function inside here
});

var timeInterval;
var countdown = 10;

function startTimer() {
  timeInterval = setInterval(function () {
    console.log("1 second");
    countdown--;
    timeCountdownEl.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timeInterval);
      timeCountdownEl.textContent = "Time's Up!";
    }

    console.log(countdown);
  }, 1000);
}

// I now need to somehow get the question to appear as I click start quiz. This is somwthing I am struggling so hard to on. I can't make the connection. 