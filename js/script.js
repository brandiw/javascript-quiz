/*
* Ryne Schillinger &
* Congcong Li
*/


$(document).ready(function() {

	// GENERATING THE QUESTIONS

	class question {
	  constructor(question, answer1, answer2,answer3,answer4,correctAnswer) {
	    this.question = question;
		this.answers = [answer1, answer2, answer3, answer4];
	    this.correctAnswer=correctAnswer;
	  }
	}

	var questions = [];
	questions.push(new question("Is Kanye the best?", "no", "no", "yes", "no", 2));
	questions.push(new question("What country has the highest population?", "USA", "China", "India", "Indonesia", 1));


	// DISPLAYING THE CURRENT QUESTION

	function showQuestion(current) {
		$("#question-title").text(current.question);
		$("#answer1").text(current.answers[0]);
		$("#answer2").text(current.answers[1]);
		$("#answer3").text(current.answers[2]);
		$("#answer4").text(current.answers[3]);
	}


	// TRACKING QUIZ PROGRESS

	var choice = 0;
	var numCorrect=0;
	var numQuestion=0;

	$("#numQuestion").text(numQuestion+1);
	$("#totalQuestions").text(questions.length);


	// CHOOSING AN ANSWER

	$("#1").click(function () {
		choice = 0;
		console.log(choice);
	});

	$("#2").click(function () {
		choice = 1;
		console.log(choice);
	});

	$("#3").click(function () {
		choice = 2;
		console.log(choice);
	});


	$("#4").click(function () {
		choice = 3;
		console.log(choice);
	});


	// SUBMITTING THE ANSWER AND RETRIEVING NEXT QUESTION

	$("#submit").click(function(event) {
		event.preventDefault();
		if (numQuestion === questions.length-1) {
			console.log("GAME OVER");
			if(choice===questions[numQuestion].correctAnswer){
			numCorrect++;}
			$("#numCorrect").text(numCorrect);
		} else {
			if(choice===questions[numQuestion].correctAnswer){
			numCorrect++;
			numQuestion++;
			$("#numCorrect").text(numCorrect);
			$("#numQuestion").text(numQuestion+1);
			showQuestion(questions[numQuestion]);
		};
		}
	});


	// RESTARTING THE QUIZ

	$("#reset").click(function(event) {
		numQuestion = 0;
		numCorrect = 0;
		showQuestion(questions[numQuestion]);
		$("#numCorrect").text(numCorrect);
		$("#numQuestion").text(numQuestion+1);
		console.log(numQuestion);
		console.log(numCorrect);
	});


	// LOADING THE FIRST QUESTION
	showQuestion(questions[numQuestion]);

});

