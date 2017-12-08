/*
* Jacquelyn, Taylor, Reilly
*/
var nextButton = document.getElementById("next-button");

var currentQ;

var currentC = [];

var quizArr = [
{
	question: "This is question 1",
	choices: ["A", "B", "C", "D"],
	correctAnswerIndex:0
},
{
	question: "This is question 2",
	choices: ["A", "B", "C", "D"],
	correctAnswerIndex:1
},
{
	question: "This is question 3",
	choices: ["A", "B", "C", "D"],
	correctAnswerIndex:2
},
{
	question: "This is question 4",
	choices: ["A", "B", "C", "D"],
	correctAnswerIndex:3
}];



function nextQuestion(){
	console.log(quizArr);
}

function updateScore(){

}


document.addEventListener("DOMContentLoaded", function(){
	nextQuestion();
	nextButton.addEventListener("click", nextQuestion);
	
})