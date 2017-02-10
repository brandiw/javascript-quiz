
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
var interval;
var timer = 10;

function startTimer(){
	timer = 10;
	$(".timer h3").text("Time left: " + timer);
	interval = setInterval(function() {
		if( timer > 0 ) {
			timer--;
		}
		$(".timer h3").text("Time left: " + timer);
	}, 1000)
}

function stopTimer(){
	clearInterval(interval);
}

startTimer();

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
		$("#container").fadeIn(2000);
};

// CHECK ANSWER ON CLICK

$(".checkAnswer").click(checkScore)

function checkScore() {
		playerAnswer = $("#container input[type='radio']:checked").val();
	if (playerAnswer == allQuestions[currentQuestion].correctAnswerIndex) {
		points = points + 10;
		console.log("correct")
	} else {
		console.log("wrong")
	}
};



// NEXT FUNCTION
$(".next").click(function(){
	stopTimer();
	if (currentQuestion >= allQuestions.length -1) {
		console.log("No more quesitons");
		if(timer >0 ){
				checkScore();
		}
		displayScore();
	} else {
		//only check score if timer is > 0
		if(timer > 0){
			checkScore();
		}
		//restart timer

		currentQuestion++
		$("#container").fadeOut(2000);
		setTimeout(function() {
		displayQA();
		startTimer();
	}, 2000);
		console.log(currentQuestion)
	}
});

// DISPLAY SCORE
function displayScore() {
	$(".score h3").text("You've earned " + points + "! Nice job.");
	console.log("You Suck.");
	$(".next").prop("disabled", true);
	$("#container").hide();
	$(".timer").hide();
	//stop interval
	clearInterval();
}



});
