var timeEl = document.querySelector("#timer");
var areaEl = document.querySelector("#quizArea");
var questionEl = document.querySelector("#question");
var descriptionEl = document.querySelector("#quizDescription");
var answersEl = document.querySelector("#answers");
var startButtonEl = document.querySelector("#startButton");

var correctText = document.createElement("div");

var time = 60;
var score = 0;
var qIndex = 0;
var userAnswer = "";

var questions = [
	{
		title: "Question 1: What attribute assigns a 'value' or 'selector' to one, specific element?",
		choices: ["class", "id", "name", "img"],
		answer: "id"
	},
	{
		title: "Question 2: What tag is used to create links?",
		choices: ["<body>", "<img>", "<a>", "<div>"],
		answer: "<a>"
	},
	{
		title: "Question 3: What function creates a random number from 0 to almost 1",
		choices: ["Math.random()", "Math.floor()", "setInterval()", "function()"],
		answer: "Math.random()"
	},
	{
		title: "Question 4: What variable type stores a list of values?",
		choices: ["integer", "float", "string", "array"],
		answer: "array"
	},
	{
		title: "Question 5: What does JSON stand for?",
		choices: ["JavaScript Object Notation", "Jeremy said Oh No", "JavaScript Orientation Notes", "JavaScript Or Not"],
		answer: "JavaScript Object Notation"
	}
]

timeEl.textContent = "Time: " + time;


// Populates the list of answers
function createChoices(array) {
	answersEl.innerHTML = "";
	questionEl.textContent = questions[qIndex].title;
	for (var i = 0; i < questions[qIndex].choices.length; i++) {
		var choice = document.createElement("button");
		choice.setAttribute("class", "choice d-block btn btn-outline-primary");
		choice.setAttribute("id", questions[qIndex].choices[i]);
		choice.textContent = questions[qIndex].choices[i];
		answersEl.appendChild(choice);
	}
}

// Counts the timer down from 60
function timer() {
	interval = setInterval(function () {
		--time;
		timeEl.textContent = ("Time: " + time);
	}, 1000)
}

// Listens for the start button to be clicked and starts the timer
startButtonEl.addEventListener("click", function () {
	startButtonEl.setAttribute("class", "d-none btn btn-primary")
	timer();
	descriptionEl.textContent = "";
	createChoices(questions);
})

function timeCheck() {
	if (time <= 0) {
		questionEl.textContent = "Finished!";
		descriptionEl.textContent = "";
		answersEl.innerHTML = "";
		clearInterval(interval);
		// Records left over time to score
		score = time;
		finish();
	}
}

// Checks the answer selected against the correct answer.
function checkAnswer(answer) {
	answerText = answer.textContent;
	var correctAnswer = questions[qIndex].answer;

	// If correct, it moves to the next questions after the user receives feedback that their answer was correct.
	if (answerText === correctAnswer) {
		correctText.setAttribute("style", "font-style: italic; border-top: 1px solid lightgrey");
		correctText.textContent = "Correct!";
		answersEl.append(correctText);
		qIndex++;
		if (time > 0 && qIndex !== questions.length) {
			setTimeout(function () {
				answersEl.innerHTML = "";
				correctText.textContent = "";
				correctText.setAttribute("style", "border-top: 0;");
				createChoices();

			}, 1500);
		} else {
			questionEl.textContent = "Finished!";
			descriptionEl.textContent = "";
			answersEl.innerHTML = "";
			clearInterval(interval);
			// Records left over time to score
			score = time;
			finish();

		}


		// If the answer is incorrect, the user receives the feed back and loses time.
	} else {
		time = time - 10;
		timeCheck();
		correctText.setAttribute("style", "font-style: italic; border-top: 1px solid lightgrey");
		correctText.textContent = "Incorrect!";
		answersEl.append(correctText);
		setTimeout(function () {
			correctText.textContent = "";
			correctText.setAttribute("style", "border-top: 0;");
		}, 1500);
	}
}



function finish() {

	var formEl = document.createElement("form");
	formEl.setAttribute("id", "inputForm");
	var labelEl = document.createElement("label");
	var inputEl = document.createElement("input");
	var inputForm = document.getElementById("inputForm");

	descriptionEl.innerHTML = "Your score: " + score;

	labelEl.setAttribute("id", "initials");
	inputEl.setAttribute("type", "text");

	labelEl.textContent = "Enter Initials: ";
	descriptionEl.appendChild(formEl);
	formEl.appendChild(labelEl);
	formEl.appendChild(inputEl);

	// var highScoreCount = 0;

	function saveData(event) {
		event.preventDefault();
		alert("Submitted!");
		var inputInitials = document.getElementById("initials");
		var user = {
			userinitials: inputInitials.value.trim(),
			userScore: score
		}
		// highScoreCount++;

		// localStorage.setItem("highScore" + highScoreCount, user);
	}
	console.log(inputForm);
	console.log(inputEl);

	document.addEventListener('DOMContentLoaded', function () {
		inputForm.addEventListener("submit", saveData);
	});
}

// Controls when an answer is clicked
answersEl.addEventListener("click", function () {
	var targetButton = event.target;
	checkAnswer(targetButton);
})