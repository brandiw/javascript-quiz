
console.log("JS file is linked up!");
$(function() {
var answer0 = $(".answer0");
var answer1 = $(".answer1");
var answer2 = $(".answer2");
var answer3 = $(".answer3");
var question = $(".question");
var currentQuestion = 0;
var points = 0;
var playerAnswer;


var allQuestions = [{question: "What is the official language of the Canadian province Quebec?", choices: ["French", "English", "German", "Spanish"], correctAnswerIndex: 0},
{question: "Where did the sport of curling originate?", choices: ["United Kingdom", "Greenland", "Canada", "Scottland"], correctAnswerIndex: 3}]

displayQA();

// DISPLAY QUESTION/ANSWER
function displayQA() {
		question.text(allQuestions[currentQuestion].question); 
		answer0.text(allQuestions[currentQuestion].choices[0]);
		answer1.text(allQuestions[currentQuestion].choices[1]);
		answer2.text(allQuestions[currentQuestion].choices[2]);
		answer3.text(allQuestions[currentQuestion].choices[3]);
};

// CHECK ANSWER ON CLICK

$(".checkAnswer").click(checkScore)

function checkScore() {
		playerAnswer = $("#container input[type='radio']:checked").val();
	if (playerAnswer == allQuestions[currentQuestion].correctAnswerIndex) {
		points = points + 10;
		console.log("correct")
		console.log(points)
	} else {
		console.log("wrong")
	}
};

	

// NEXT FUNCTION
$(".next").click(function(){
	if (currentQuestion >= allQuestions.length -1) {
		console.log("No more quesitons");
		checkScore();
		displayScore();
	} else {
		checkScore();
		currentQuestion++
		displayQA();
		console.log(currentQuestion)
	}
});

// DISPLAY SCORE
function displayScore() {
	$(".score h3").text(points);
	$(".next").prop("disabled", true);
	$("#container").hide();
}



});