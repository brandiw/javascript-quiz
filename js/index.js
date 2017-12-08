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
	question: "How long can cockroaches live without their heads? P.S. they die of starvation.",
	choices: ["21 days", "9 days", "5 days", "30 days"],
	correctAnswerIndex: 1
},
{
	question: "How did Aeschylus, the Greek poet and dramatist, die?",
	choices: ["He was stabbed by a contemporary", "He was poisoned after a poorly received poem", "A horse trampled him", "An eagle dropped a turtle on his head"],
	correctAnswerIndex: 3
},
{
	question: "How many people die in silos every year from grain entrapment?",
	choices: ["26", "5", "8", "32"],
	correctAnswerIndex: 0
},
{
	question: "How did Jimi Heselden, the owner of the Segway company, die?",
	choices: ["He was stampeded by Segways", "He drove his Segway off of a cliff", "He hit a pothole in the road and had a major spill", "He was driving his Segway while intoxicated"],
	correctAnswerIndex: 1
},
{
	question: "How many cells die in your body every day?",
	choices: ["70 billion", "30 billion", "50 billion", "20 billion"],
	correctAnswerIndex: 2
},
{
	question: "What kinds of animals don't die of old age?",
	choices: ["Jellyfish", "Giant squid", "Sponges", "Bigfoot"],
	correctAnswerIndex: 0
},
{
	question: "How did Bobby Leach die?",
	choices: ["From going over Niagara Falls in a barrel", "From slipping on an orange peel", "From a failed stunt in the Barnum and Bailey Circus", "From swimming in the whirlpool rapids at Niagara Falls"],
	correctAnswerIndex: 1
},
{
	question: "About how many dead bodies are on Mount Everest?",
	choices: ["150", "75", "25", "200"],
	correctAnswerIndex: 3
},
{
	question: "What was Italian serial killer Leonarda Cianciulli famous for?",
	choices: ["Cooking them in pasta sauce for her restaurant", "Turning them into tea cakes and serving them to guests", "Storing the bodies in her cheese fridge", "Leaving her victims in front of the Vatican"],
	correctAnswerIndex: 1
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