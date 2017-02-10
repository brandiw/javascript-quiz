
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
themesongSound = document.getElementById("themesong");
themesongSound.play();

var allQuestions = [{question: "Where was the first burger ever made?", choices: ["Berlin, Germany", "Hamburg, Germany", "Harelbeke, Belgium", "Beringen, Belgium"], correctAnswerIndex: 1},
{question: "Burgers comprise what % of the beef servings in commercial restaurants?", choices: ["50%", "21%", "84%", "71%"], correctAnswerIndex: 3},
{question: "The most expensive burger can be found in Las Vegas, what's its cost?", choices: ["$495", "$5000", "$799", "$365"], correctAnswerIndex: 1},
{question: "Where is the hamburger hall of fame?", choices: ["Seymour, WI", "Greenville, OH", "Knox, IN", "Decatur, IL"], correctAnswerIndex: 0},
{question: "Which chain is essentially the same as Carl's Jr., but on the East Coast?", choices: ["Checkers", "ShakeShack", "Hardees", "Fat Burger"], correctAnswerIndex: 2},
{question: "How many hamburgers are eaten in a year in the US?", choices: ["700 million", "3 billion", "300 billion", "50 billion"], correctAnswerIndex: 3},
{question: "French fries became an important item on hamburger chain menu during:", choices: ["1890s", "World War II", "1920s", "World War I"], correctAnswerIndex: 1},
{question: "What was the first US national hamburger chain?", choices: ["White Castle", "Bob's Big Boy", "Wendy's", "McDonald's"], correctAnswerIndex: 0},
{question: "How much did the biggest cheeseburger ever made weigh?", choices: ["1,314lbs", "989lbs", "2,014lbs", "3,450lbs"], correctAnswerIndex: 2},
{question: "WHat is the world record for most burgers eaten in 3 minutes?", choices: ["8", "9", "11", "12"], correctAnswerIndex: 3},]

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
			var themesongSound = document.getElementById("themesong");
  			themesongSound.pause();
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
	$(".score h3").text("You've earned " + points + "points! Nice job.").append('<img src="./img/burgerminis.png" height="64px" width="72px">');
	console.log("You Suck.");
	$(".next").prop("disabled", true);
	$("#container").hide();
	$(".timer").hide();
	//stop interval
	clearInterval();
}



});
