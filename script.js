var startButtonEl = document.querySelector("#startButton");
var timeEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var questionBodyEl = document.querySelector("#questionBody");

var time = 60;
var qIndex = 0;
var questions = [
	{
		title: "Which of these is not an animal?",
		choices: ["cat", "dog", "bird", "tree"],
		answer: "tree"
	},
	{
		title: "Which of these is a State?",
		choices: ["Guam", "Kansas", "American Samoa", "Puerto Rico"],
		answer: "Kansas"
	}
]

// function createChoices(array) {
//     for (var i = 0; i < questions[qIndex].choices.length; i++) {
//         var choice = document.createElement("button");
//         choice.textContent = questions[qIndex].choices[i];
//         questionBodyEl.textContent = "";
//         questionBodyEl.appendChild(choice);
//     }
// }

timeEl.textContent = "Time: " + time;

// Counts the timer down from 60
function timer() {
    setInterval(function(){
        timeEl.textContent = ("Time: " + --time);
    }, 1000 )
}

// Listens for the start button to be clicked and starts the timer
startButtonEl.addEventListener("click", function() {
    timer();
    questionEl.textContent = questions[0].title;
    // createChoices(questions);


})

// Once the timer reaches 0
if (time == 0) {

}