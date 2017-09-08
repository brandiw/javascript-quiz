/*
* Your names
*/
$(function() {

var submitButton = $("#submitButton");
var currentScore = 0;
var counter = 0
// var choices = nextQuestionArr[counter].choices
// var nextQuestionArr = [];

var questions = [
	{	question: "what is 1 + 1?",
		choices: ["one", "two", "three", "four"],
		correctAnswer: "two" },
	{
		question: "what is 4 + 3?",
		choices: ["five", "six", "seven", "eight"],
		correctAnswer: "seven" },
	{
		question: "what is 0 + 0?",
		choices: ["zero", "two", "three", "four"],
		correctAnswer: "zero" },
	{
		question: "what is 10 + 0?",
		choices: ["five", "six", "seven", "ten"],
		correctAnswer: "ten" }
];

var nextQuestion = questions[counter];
// var r1 = $("#c1");

var loadQuestion = function() {
	// var nextQuestion = questions[counter];
	// console.log("is loadQuestion running?")
	$("#question").append(nextQuestion.question);
		$("#c1").append(nextQuestion.choices[0]);
		$("#c2").append(nextQuestion.choices[1]);
		$("#c3").append(nextQuestion.choices[2]);
		$("#c4").append(nextQuestion.choices[3]);
		$("#r1").val(nextQuestion.choices[0]);
		$("#r2").val(nextQuestion.choices[1]);
		$("#r3").val(nextQuestion.choices[2]);
		$("#r4").val(nextQuestion.choices[3]);
	// }
}
loadQuestion();

var checkAnswer = function(answer) {
	console.log(answer);
	console.log(nextQuestion.correctAnswer);
	console.log(counter);
	counter += 1;
	if (answer === nextQuestion.correctAnswer) {
		currentScore += 1;
		$("#question").empty();
		$("#c1").empty();
		$("#c2").empty();
		$("#c3").empty();
		$("#c4").empty();
		lastQuestionCheck();
		// console.log("checkAnswer, correct answer");
	} else {
		$("#question").empty();
		$("#c1").empty();
		$("#c2").empty();
		$("#c3").empty();
		$("#c4").empty();
		lastQuestionCheck();
		// console.log("checkAnswer, incorrect answer");
	}
}


var lastQuestionCheck = function() {
	if (counter === questions.length) {
		$("#question").empty();
		$(".answers").empty();
		$("#question").append("Your current score is " + currentScore + ".");
	} else {
		nextQuestion = questions[counter];
		loadQuestion();
	}
}

$("#submitButton").click(function() {
	checkAnswer($('input[name="gender"]:checked').val());
})

});

//IF ANSWER IS CORRECT . 					IF ANSWER IS INCORRECT
//currentScore += 1;
//lastQuestionCheck();						lastQuestionCheck();

