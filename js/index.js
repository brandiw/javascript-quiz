/*
* Your names
*/

console.log("JS file is linked up!");



// Global Variables 
var questionNum;
var answers = [];

// Functions 

// Initialize Page
function startQuiz() {
	questionNum = 0;
	
	showQuestion(questionNum);
}

// To go to the next question
function nextQuestion() {
	if(questionNum === questions.length -1){
		// END QUIZ
	}
	questionNum++;
	showQuestion(questionNum);
}

// To calculate score
function scoreCounter() {

}

// To show questions

function showQuestion(x){

	document.getElementById("questionText").innerHTML = questions[x].question;

	var choices = questions[x].choices;
	console.log(choices);

	for(var i =0; i < choices.length; i ++) {
		var label = "answer" + i;
		// console.log(label);
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
		console.log(test[i]);
		if(test[i].checked === true){
			answers.push(i);
		}
	}
	console.log(answers);
	nextQuestion();

}

// To show results
function endQuiz() {

}

var next = document.getElementById('nextQ').addEventListener("click",getAnswer);
startQuiz();
