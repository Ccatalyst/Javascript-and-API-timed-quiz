var codequestions = [
	{
		title: "The syntax for a variable is:",
		choices: ["var varName;", "variable (navName)", "var:navName", "v navName"],
		answer: "var varName;",
	},
	{
		title: "The condition in an if / else statement is enclosed within ____.",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses",
	},
	{
		title: "Comments are started with what symbols?",
		choices: ["**", "~", "//", "<<!>"],
		answer: "//",
	},
	{
		title: "Is Javascript case-sensitive?",
		choices: ["Yes", "No"],
		answer: "Yes ",
	},
	{
		title: "Where is the correct place to insert a JavaScript?",
		choices: ["<head>", "<body>", "Both"],
		answer: "Both",
	},
];

var timer = document.querySelector(".timer");
var time = document.querySelector("#time");
var wrapper = document.querySelector(".wrapper");
var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#startBtn");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var scoresList = document.querySelector("#scoresList");

var displayTime = 60;
var startIndex = 0;
var timerState;
var score = 0;
var savedScores = JSON.parse(localStorage.getItem("score")) || [];
console.log(savedScores);
//startIndex 0 for question 1, which shows codequestions [0].title

//connects to start quiz function to start timer, and when time <= 0, fires quiz end function
function setTimeInterval() {
	//updates the displayTime integer
	displayTime--;
	time.textContent = displayTime;
	if (displayTime <= 0) {
		quizEnd();
		console.log("quiz is over");
	}
}

//start function
function startQuiz() {
	//hide the start screen
	startScreen.setAttribute("class", "hide");
	//removes the display:none element in css from the .hide divs
	questions.removeAttribute("class");
	//sets the timer to count down by 1 second every 1 second
	timerState = setInterval(setTimeInterval, 1000);
	time.textContent = displayTime;
	//fire cycle questions function
	nextQuestion();
}

function nextQuestion() {
	//starts the codequestions array at index point 0
	var showQuestion = codequestions[startIndex];

	questionTitle.textContent = showQuestion.title;
	choices.innerHTML = "";
	//fires the same function for EACH of the array points in an array
	showQuestion.choices.forEach(function (choice) {
		var choiceBtn = document.createElement("button");
		choiceBtn.setAttribute("value", choice);
		choiceBtn.setAttribute("class", ".quizButton");
		choiceBtn.textContent = choice;
		choiceBtn.onclick = checkAnswer;
		choices.appendChild(choiceBtn);
	});
}
function checkAnswer() {
	//if else to mark values of vars depending on if the answer is correct or not
	if (this.value === codequestions[startIndex].answer) {
		console.log("correct");
		score += 5;
		console.log(score);
	} else {
		displayTime -= 5;
		console.log("incorrect");
	}
	startIndex++;
	//if there are no more questions, run quiz end function
	if (startIndex === codequestions.length) {
		quizEnd();
	} else {
		nextQuestion();
	}
}

function quizEnd() {
	//clears the timer
	clearInterval(timerState);
	//hides the questions
	questions.setAttribute("class", "hide");
	//shows the end screen
	endScreen.removeAttribute("class");
	//a prompt to enter initials
	var inits = window.prompt("Enter your initials");
	var scoreboard = {
		inits,
		score,
	};
	savedScores.push(scoreboard);
	localStorage.setItem("score", JSON.stringify(savedScores));

	finalScore.textContent = score;
	renderScores();
}
//scoreboard with local storage information
function renderScores() {
	for (let i = 0; i < savedScores.length; i++) {
		const element = savedScores[i];
		var newLi = document.createElement("li");
		newLi.textContent = element.inits + " -- " + element.score;
		scoresList.appendChild(newLi);
	}
}
//button that starts the quiz
startBtn.addEventListener("click", function (event) {
	event.preventDefault();
	startQuiz();
});

//BUG LIST:
//
