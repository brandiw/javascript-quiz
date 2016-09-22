/*
* Jamie, Alford, Sarah
*/

console.log("JS file is linked up!");

$(document).ready(function(){
	// get variables
	var startButton = $("#start-button");
	var nextButton = $("#next-button");
	var quizArea = $(".quiz");
	var choiceArea = $(".choices");
	var questionEl = $(".question");
	var allQuestions = [
		{question: "Nobody puts Baby in a corner.", choices: ["Dirty Dancing", "Three Men and a Baby", "Pretty Woman"], correctAnswer:0},
		{question: "I ate his liver with some fava beans and a nice Chianti.", choices: ["Silence of the Lambs", "Psycho", "Friday the 13th"], correctAnswer:0},
		{question: "My name is Inigo Montoya. You killed my father. Prepare to die", choices: ["Gone with the Wind", "Fargo", "The Princess Bride"], correctAnswer:2},
		{question: "I drink your milkshake!", choices: ["Animal House", "There Will Be Blood", "Back to the Future"], correctAnswer:1},
		{question: "Say hello to my little friend!", choices: ["The Godfather", "Donnie Brasco", "Scarface"], correctAnswer:2},
		{question: "Show me the MONEY!", choices: ["Jerry Maguire", "Titanic", "Casino"], correctAnswer:0},
		{question: "I see dead people.", choices: ["Sixth Sense", "A Nightmare on Elm Street", "Hellraiser"], correctAnswer:0},
		{question: "You're gonna need a bigger boat.", choices: ["The Perfect Storm", "Jaws", "Captain Ron"], correctAnswer:1},
		{question: "I'm gonna make him an offer he can't refuse.", choices: ["Glengarry Glen Ross", "The Wolf of Wall Street","The Godfather"], correctAnswer:2}
	];
	var score = 0;
	var questionIndex = 1;

	startButton.click(function() {
		startButton.css("display", "none");
		//display quiz wrapper
		$(".quiz-wrapper").css("display", "initial");
		// Display first quesiton
		questionEl.prepend("<div>" + allQuestions[0].question + "</div>");
		allQuestions[0].choices.forEach(function(choice){
			console.log(choiceArea);
			choiceArea.append("<input type='radio' name='choice' value='" + choice + "'>" + choice);
		});
	});

	nextButton.click(function() {
		// get value of selected radio button
		console.log();
		var choices = allQuestions[questionIndex].choices;
		var userInput = $("input[name='choice']:checked").val();
		var userInputIndex = choices.indexOf(userInput);
		console.log("user input " + userInputIndex);
		// Need to - check for correctnes, if correct add point to score
		var correctAnswerNum = allQuestions[questionIndex].correctAnswer;
		//allQuestions[questionIndex].choices[correctAnswerNum] == correctAnswerNum
		var correctChoicesIndex = allQuestions[questionIndex].correctAnswer;
		console.log("correct asnwer num " + choices.indexOf(choices[correctAnswerNum]));
		if (choices.indexOf(choices[userInputIndex]) == correctAnswerNum) {
		    score++;
		};
		//increase index
		questionIndex++;
		console.log(score);
		// empty the choice element
		choiceArea.empty();
		//empty the question element
		questionEl.empty();

		if (questionIndex < allQuestions.length) {
		//check what quesiton your on if your on a question that's < allQuestions.length then show next quesiton
		questionEl.prepend("<div>" + allQuestions[questionIndex].question + "</div>");
		// CHANGE to a function
		allQuestions[questionIndex].choices.forEach(function(choice){
			console.log(choiceArea);
			choiceArea.append("<input type='radio' name='choice' value='" + choice + "'>" + choice);
		});
		} else {
			questionEl.append("<div class='score'>" + score + "</div>");
		}

		// if statement to see if last question and if so show score if not, do above


	});


	// function hideButton (el) {
	// 	el.css("visibilty", "hidden");
	// }




});