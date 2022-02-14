var codequestions = [
	{
		title: "Commonly used data types DO NOT include:",
		choices: ["strings", "booleans", "alerts", "numbers"],
		answer: "alerts",
	},
	{
		title: "The condition in an if / else statement is enclosed within ____.",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses",
	},
	{
		title: "Spiderman’s real name is…",
		choices: ["Bob Sagat", "Ryu", "Peter Parker", "Clark Kent"],
		answer: "Peter Parker",
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

var displayTime = 60;
var startIndex = 0;
var timerState;

//startIndex 0 for question 1, which shows codequestions [0].title

//connects to start quiz function to start timer, and when time <= 0, fires quiz end function
function setTimeInterval() {
	//updates the displayTime integer
	displayTime--;
	time.textContent = displayTime;
	if (time <= 0) {
		//quiz end function
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
		choiceBtn.textContent = choice;
		//TODO: mention to TA and ask about solutions to lines 74 through 76 vs. line 77
		// choiceBtn.addEventListener("click", function () {
		// 	checkAnswer();
		// });
		choiceBtn.onclick = checkAnswer;

		choices.appendChild(choiceBtn);
	});
}
function checkAnswer() {
	if (this.value === codequestions[startIndex].answer) {
		console.log("burp");
	} else {
		console.log("fart");
	}
	startIndex++;
	if (startIndex === codequestions.length) {
		quizEnd();
	} else {
		nextQuestion();
	}
}

function quizEnd() {
	questions.setAttribute("class", "hide");
	endScreen.removeAttribute("class");
}

startBtn.addEventListener("click", function (event) {
	event.preventDefault();
	startQuiz();
});

//cycle questions function
//timer function
//check questions against answers and move to next question
//end quiz function

// codequestions[0].title
// codequestions[0].choices[0] //forEach codequestions(blah blah) create a button for each of them
// codequestions[0].answer[0]

//goes inside of end quiz function
// clearInterval (timerstate)
