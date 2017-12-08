/*
* Jacquelyn, Taylor, Reilly
*/
var nextButton = document.getElementById("next-button");
var currentIndex = 0;
var currentQ;
var displayQ = document.getElementById("current-question");
var choiceSpans = document.getElementsByClassName("choice");
var currentChoices =[];
var currentScore = 0;
var userSelection;

var quizArr = [
{
	question: "How many people choke to death on ballpoint pens every year?",
	choices: ["341", "27", "100", "42"],
	correctAnswerIndex: 2
},
{
	question: "This is question 2",
	choices: ["E", "B", "B", "D"],
	correctAnswerIndex: 1
},
{
	question: "This is question 3",
	choices: ["F", "B", "C", "D"],
	correctAnswerIndex: 2
},
{
	question: "This is question 4",
	choices: ["G", "B", "C", "D"],
	correctAnswerIndex: 3
}];

// Separated out the first part of "nextQuestion" function so that it doesnt change the index
// yet or check the score upon initial load, but we can reuse this function later
// and call it when we click the button
function loadQuestion() {
	currentQ = quizArr[currentIndex].question; 
	currentChoices = quizArr[currentIndex].choices;
	displayQ.textContent = currentQ;

	for(var i=0; i<currentChoices.length; i++) {
		choiceSpans[i].textContent=currentChoices[i];
	}
}

function nextQuestion(){
	// Because for a 4 question quiz, index 2 of the array (the third question)
	// is the last one where we want to actually move onto the next question, so need to length -2
	if (currentIndex <= quizArr.length - 2) { 
		updateScore();
		currentIndex++;
		loadQuestion();

	// Index 3 of the array is the final question, but quizArr.length = 4, so need to -1 for this to work
	} else if (currentIndex === quizArr.length - 1) {
	 	updateScore();
		document.getElementById("container").className = "complete";
		document.getElementById("results-container").className = "complete";
		document.getElementById("results-container").textContent = "You got " + currentScore + " out of " + quizArr.length + " correct.";
	}
}

function updateScore(){
	userSelection = document.querySelector('input[name="option"]:checked');
	if(userSelection==undefined) {
		console.log("You must make a choice.");
		currentIndex--;
		return;
	}
	else if (userSelection.value === "option" + quizArr[currentIndex].correctAnswerIndex) {
		currentScore++;
	}

	userSelection.checked = false;

	console.log("Current score is " + currentScore);
}

document.addEventListener("DOMContentLoaded", function(){
	loadQuestion();
	nextButton.addEventListener("click", nextQuestion);
})