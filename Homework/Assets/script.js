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
		answer: "parentheses",
	},
];

var timer = document.querySelector(".timer");
var time = document.querySelector("#time");
var wrapper = document.querySelector(".wrapper");
var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#startBtun");
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

function startQuiz() {
	//hide the start screen and start the timer
	startScreen.setAttribute("class", "hide");
	questions.removeAttribute("class");
	//sets the timer to count down by 1 second every 1 second
	timerState = setInterval(setTimeInterval, 1000);
}

//start function
//cycle questions function
//timer function
//check questions against answers
//end quiz function

// codequestions[0].title
// codequestions[0].choices[0] //forEach codequestions(blah blah) create a button for each of them
// codequestions[0].answer[0]
