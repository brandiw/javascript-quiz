/*
* Jacquelyn, Taylor, Reilly
*/
var nextButton = document.getElementById("next-button");
var currentIndex = 0;
var currentQ;
var displayQ = document.getElementById("current-question");
var choiceSpans = document.getElementsByClassName("choice");
var currentChoices =[];
var currentScore;

var quizArr = [
{
	question: "This is question 1",
	choices: ["A", "B", "C", "D"],
	correctAnswerIndex:0
},
{
	question: "This is question 2",
	choices: ["E", "B", "C", "D"],
	correctAnswerIndex:1
},
{
	question: "This is question 3",
	choices: ["F", "B", "C", "D"],
	correctAnswerIndex:2
},
{
	question: "This is question 4",
	choices: ["G", "B", "C", "D"],
	correctAnswerIndex:3
}];



function nextQuestion(){
	//validate();
	console.log("current index is:",currentIndex);
	currentQ = quizArr[currentIndex].question;
	currentChoices = quizArr[currentIndex].choices;
	displayQ.textContent = currentQ;
	for(var i=0; i<currentChoices.length; i++) {
		choiceSpans[i].textContent=currentChoices[i];
	}
	if (currentIndex<quizArr.length) {
		currentIndex++;
	}
	// else {
		//displayResults();
	// }
}

function updateScore(){

}


document.addEventListener("DOMContentLoaded", function(){
	nextQuestion();
	nextButton.addEventListener("click", nextQuestion);
})