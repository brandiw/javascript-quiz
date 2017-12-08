/*
* Tony Phan
* Adam Piette
* Antonia Villa
*/

// Global Variables
var questionNum;
var answers = [];

// Functions

// Initialize Page
function startQuiz() {
	questionNum = 0;
	document.getElementById("answers").style.visibility = 'visible';
	document.getElementById("previousQ").style.visibility = 'visible';
	document.getElementById("nextQ").style.visibility = 'visible';
	document.getElementById("resetQ").style.display = 'none';

	answers = new Array(questions.length);
	updateAnswer();
	showQuestion(questionNum);
}

// To go to the next question
function nextQuestion() {
	if(answers[questionNum]!= undefined){
		if(questionNum === questions.length-1){
			$("#questionText").animate({

				left: "-=100px",
				opacity: 0.0
			}, 200, function() {
				$("#questionText").css({left: "+=200px"});

				endQuiz();

				$("#questionText").animate({

					left: "-=100px",
					opacity: 1.0
				}, 200);
			});
		} else {
			$("#questionText").animate({

				left: "-=100px",
				opacity: 0.0
			}, 200, function() {
				$("#questionText").css({left: "+=200px"});

				questionNum++;
				showQuestion(questionNum);
				updateAnswer();

				$("#questionText").animate({

					left: "-=100px",
					opacity: 1.0
				}, 200);
			});

		}
	}
}

// To go to the previous question
function previousQuestion() {

	if(questionNum === 0){
		return;
	} else {
		$("#questionText").animate({

			left: "+=100px",
			opacity: 0.0
		}, 200, function() {
			$("#questionText").css({left: "-=200px"});

			questionNum--;
			showQuestion(questionNum);
			updateAnswer();

			$("#questionText").animate({

				left: "+=100px",
				opacity: 1.0
			}, 200);
		});
	}
}

function updateAnswer(){
	var test = document.getElementById("answerForm").querySelectorAll("input");
	for(var i = 0; i < test.length; i++){
		if(i === answers[questionNum]){
			test[i].checked = true;
		} else {
			test[i].checked = false;
		}
	}
}

// To calculate score
function scoreCounter() {
	var score = 0;

	for(var i = 0; i < questions.length; i++) {
		if (answers[i] === questions[i].correctAnswerIndex){
			score++;
		}
	}
	return score;
}

// To show questions

function showQuestion(x){

	document.getElementById("questionText").innerHTML = questions[x].question;

	var choices = questions[x].choices;

	for(var i =0; i < choices.length; i ++) {
		var label = "answer" + i;
		document.getElementById(label).innerHTML = choices[i];
	}

	for(var i = choices.length; i <= 4; i++){
		var container = "container" + i;
		document.getElementById(container).style.visibility = 'hidden';
	}

}

// To store answer
function getAnswer() {

	var choices = questions[questionNum].choices;
	var test = document.getElementById("answerForm").querySelectorAll("input");
	for(var i = 0; i < test.length; i++){
		if(test[i].checked === true){
			answers[questionNum] = i;
		}
	}
	nextQuestion();

}

// To show results
function endQuiz() {
	document.getElementById("answers").style.visibility = 'hidden';
	document.getElementById("previousQ").style.visibility = 'hidden';
	document.getElementById("nextQ").style.visibility = 'hidden';
	document.getElementById("resetQ").style.display = 'block';
	document.getElementById("questionText").innerHTML = "You're done!"
	document.getElementById("results").style.visibility = 'visible'
	if (scoreCounter() === questions.length) {
		document.getElementById("results").innerHTML = "You scored: " +scoreCounter()+" out of "+ questions.length+ '<br><img src=\'img/star.png\' id="star"> <br> You\'re a star!';
	} else {
		document.getElementById("results").innerHTML = "You scored: " +scoreCounter()+" out of "+ questions.length +'<br> <br> Try again!';
	}

}

function resetQuiz(){
	startQuiz();
	document.getElementById("results").style.visibility = 'hidden';
}

var next = document.getElementById('nextQ').addEventListener("click",getAnswer);
var prev = document.getElementById('previousQ').addEventListener("click",previousQuestion);
var restart = document.getElementById('resetQ').addEventListener("click",resetQuiz);
startQuiz();
