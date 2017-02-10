/*
* Justin & Hailey & Kelly
*/
$('document').ready(function() {
console.log("JS file is linked up!");
var allQuestions = [{question:"Complete the following Mark Twain quote: 'Go to Heaven for the climate, Hell for the... '.", choices: ['food', 'fun', 'company', 'music'], correctAnswerIndex:2},
					{question:"What poker hand did Wild Bill Hickok have when he was shot in a Deadwood saloon?", choices: ['Full House (Queens over fives)','2 pair (Aces and eights)', 'Flush (Hearts to the ten)', 'Three of a Kind (Sevens)'], correctAnswerIndex:1},
					{question:"What is the last word in the Declaration of Independence?", choices: ['Honor', 'Fortunes', 'Lives', 'Republic'], correctAnswerIndex:0},
					{question:"What is Canada's most populous city?", choices: ['Montreal','Quebec City', 'Winnipeg', 'Toronto'], correctAnswerIndex:3}]
var questionNumber = 0;
var score;

// append question here
$('#question').html(allQuestions[questionNumber].question);


$('#lab1').html(allQuestions[questionNumber].choices[0]);
$('#lab2').html(allQuestions[questionNumber].choices[1]);
$('#lab3').html(allQuestions[questionNumber].choices[2]);
$('#lab4').html(allQuestions[questionNumber].choices[3]);


$('#nextButton').on('click', function() {
	checkAnswer();
	tallyScore();
	nextQuestion();
	questionNumber++;
	if (questionNumber === allQuestions.length) {
		switchToSubmitButton()
	}

});

function checkAnswer(){
	
};

function tallyScore(){

};

function nextQuestion(){
	$('#lab1').html(allQuestions[questionNumber].choices[0]);
	$('#lab2').html(allQuestions[questionNumber].choices[1]);
	$('#lab3').html(allQuestions[questionNumber].choices[2]);
	$('#lab4').html(allQuestions[questionNumber].choices[3]);
	$('#question').html(allQuestions[questionNumber].question);
};

function switchToSubmitButton(){
	$('#nextButton').hide();
	$('#submitButton').show();

};

$('#submitButton').on('click', function(){
	showScore();
});

function showScore(){
	$('#question').html(score);
};

});




