/*
* Your names
*/
$(function() {

console.log("JS file is linked up!");



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


var submitButton = $("#submitButton");
var currentScore = 0;
var questionsAnswered = 0;
var counter = 0
var choices = nextQuestionArr[counter].choices


var loadQuestion = function() {
	$("#question").append.nextQuestionArr[counter].question;
	for (i=0; i < choices.length; i++) {
		$("#c1").append(choices[i]);
		$("#c2").append(choices[i]);
		$("#c3").append(choices[i]);
		$("#c4").append(choices[i]);
	}
	counter += 1;
}
loadQuestion();


//put check correct score function here:  	if (questions.choices === questions.correctAnswer) { next 4 lines }
//put this next:  							questionsAnswered += 1;
//put this next: 							$(XXXXX).remove();
//put this next: 							loadQuestion();
//put this next: 			currentScore += 1;

var lastQuestionCheck = function() {
	if (questionsAnswered === questions.length) {
		$("#question").append(currentScore);
	} else {
		console.log("Not last question, yet");
	}
}






});