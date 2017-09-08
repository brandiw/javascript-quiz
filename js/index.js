/*
* Your names
*/
$(function() {

var submitButton = $("#submitButton");
var currentScore = 0;
var counter = 0
var choices = nextQuestionArr[counter].choices
var nextQuestionArr = [];

var questions = [
	{	question: "what is 1 + 1?",
		choices: ["one", "two", "three", "four"],
		correctAnswer: 1 },
	{
		question: "what is 4 + 3?",
		choices: ["five", "six", "seven", "eight"],
		correctAnswer: 2 },
	{
		question: "what is 0 + 0?",
		choices: ["zero", "two", "three", "four"],
		correctAnswer: 0 },
	{
		question: "what is 10 + 0?",
		choices: ["five", "six", "seven", "ten"],
		correctAnswer: 3 }
];
console.log(choices);

var loadQuestion = function() {
	$("#question").append.nextQuestionArr[counter].question;
	for (i=0; i<choices.length; i++) {
		$("#c1").append(choices[i]);
		$("#c2").append(choices[i]);
		$("#c3").append(choices[i]);
		$("#c4").append(choices[i]);
	}
	counter += 1;
}
loadQuestion();

var lastQuestionCheck = function() {
	if (counter === questions.length) {
		$("#quesiton").remove();
		$(".answers").remove();
		$("#question").append(currentScore);
	} else {
		console.log("More questions to answer");
		loadQuestion();
	}
}

});

//IF ANSWER IS CORRECT . 					IF ANSWER IS INCORRECT
//currentScore += 1;
//lastQuestionCheck();						lastQuestionCheck();

