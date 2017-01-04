/*
* Ryne Schillinger &
* Congcong Li
*/


$(document).ready(function() {

	// STARTING THE QUIZ

	$("#title-container").show();
	$("#questions-container").hide();
	$("#score-container").hide();
	$("#1").prop("checked", true)

	$("#start").click(function(event) {
		$("#title-container").hide();
		$("#questions-container").show();
	});


	// GENERATING THE QUESTIONS

	class question {
	  constructor(question, answer1, answer2,answer3,answer4,correctAnswer) {
	    this.question = question;
		this.answers = [answer1, answer2, answer3, answer4];
	    this.correctAnswer=correctAnswer;
	  }
	}

	var questions = [];

	questions.push(new question(
		"''Most rappers' taste level ain't at my waist level / Turn up the bass 'til it's ______ level''",
		"Somewhere-in-space",
		"Up-in-yo-face",
		"Just-a-disgrace",
		"Give-me-some-space",
		1));

	questions.push(new question(
		"''Maybe 15 minutes, took some pictures with your sister / ______, then I'm finished, then it's back to business''",
		"Get forgiveness", 
		"Get a witness", 
		"Merry Christmas", 
		"Get some distance", 
		2));

	questions.push(new question(
		"''You like piña coladas, getting caught in the rain / Or rocking flannels all summer like ______''",
		"You're from the Ukraine",
		"Jack Lalanne",
		"Kurt Cobain",
		"Garth and Wayne",
		2));

	questions.push(new question(
		"''Her man in the store tryna try his best / But he just can't seem to ______''",
		"Find the right vest",
		"Catch Kanye West",
		"Get any press",
		"Get Kanye fresh",
		3));

	questions.push(new question(
		"''Break records at Louis, ate breakfast at Gucci / My girl a superstar all from ______''",
		"A home movie",
		"Selling jewelry",
		"Juice getting off scot-free",
		"Starring in a nudie",
		0));


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
	});

	$("#2").click(function () {
		choice = 1;
	});

	$("#3").click(function () {
		choice = 2;
	});


	$("#4").click(function () {
		choice = 3;
	});


	// SUBMITTING THE ANSWER AND RETRIEVING NEXT QUESTION

	$("#submit").click(function(event) {
		event.preventDefault();
		if (numQuestion === questions.length-1) {
			if (choice === questions[numQuestion].correctAnswer) {
				numCorrect++;}
				$("#numCorrect").text(numCorrect);
				$("#questions-container").hide();
				$("#score-container").show();
				$("#kanye").css("max-height", "54%").css("height", "520px");
				resultsMessage(numCorrect);
			} else {
				if (choice===questions[numQuestion].correctAnswer) {
					numCorrect++;
				};
				numQuestion++;
				$("#numCorrect").text(numCorrect);
				$("#numQuestion").text(numQuestion+1);
				showQuestion(questions[numQuestion]);
			}
		$("#1").prop("checked", true)

	});


	// DISPLAYING RESULTS MESSAGE

	function resultsMessage(num) {
		if (num === 0) {
			$("#result-message").text("Working graveshift.");
		} else if (num === 1) {
			$("#result-message").text("You a fake Denzel like the Allstate n***a.");
		} else if (num === 2) {
			$("#result-message").text("Too many Urkels on your team, that's why your win's low.");
		} else if (num === 3) {
			$("#result-message").text("You gave it your Kanye's best.");
		} else if (num === 4) {
			$("#result-message").text("Doctors say you're the illest 'cause you're suffering from realness.");
		} else if (num === 5) {
			$("#result-message").text("Walking living legend.");
		}
	}


	// RESTARTING THE QUIZ

	$("#reset").click(function(event) {
		numQuestion = 0;
		numCorrect = 0;
		showQuestion(questions[numQuestion]);
		$("#numCorrect").text(numCorrect);
		$("#numQuestion").text(numQuestion+1);
		$("#title-container").show();
		$("#score-container").hide();
		$("#kanye").css("max-height", "42%").css("height", "400px");
	});


	// LOADING THE FIRST QUESTION
	showQuestion(questions[numQuestion]);

});

