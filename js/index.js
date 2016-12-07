/*
* Jamie, Alford, Sarah
*/

console.log("JS file is linked up!");

$(document).ready(function(){
	// get variables
	var startButton = $(".start");
	var nextButton = $("#next-button");
	var quizArea = $(".quiz");
	var choiceArea = $(".choices");
	var questionEl = $(".question");
	var quizWrapper = $(".quiz-wrapper");
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
	var questionIndex = 0;

	startButton.click(function() {
		changeElDisplay(startButton, "none")
		$(".instructions").empty();
		//display quiz wrapper
		changeElDisplay(quizWrapper, "initial");
		// Display first quesiton
		questionEl.prepend('<div>"' + allQuestions[questionIndex].question + '"</div>');
		allQuestions[questionIndex].choices.forEach(function(choice){
			console.log(choiceArea);
			choiceArea.append("<div class='input'>" + "<input type='radio' name='choice' value='" + choice + "'><p>" + choice + "</p></div>");
		});
	});

	nextButton.click(function() {
		var userInput = $("input[name='choice']:checked").val();
		var choicesArray = allQuestions[questionIndex].choices;
		console.log(userInput);
		var userInputIndex = choicesArray.indexOf(userInput);
		console.log("user input " + userInputIndex);
		// Need to - check for correctnes, if correct add point to score
		var correctAnswerNum = allQuestions[questionIndex].correctAnswer;
		//allQuestions[questionIndex].choices[correctAnswerNum] == correctAnswerNum
		var correctChoicesIndex = allQuestions[questionIndex].correctAnswer;
		console.log("correct asnwer num " + choicesArray.indexOf(choicesArray[correctAnswerNum]));


		if (userInput) {
			// get value of selected radio button
			if (choicesArray.indexOf(choicesArray[userInputIndex]) == correctAnswerNum) {
			    score++;
			};
			//increase index
			questionIndex++;
			// empty the choice element
			choiceArea.empty();
			//empty the question element
			questionEl.empty();

			if (questionIndex < allQuestions.length) {
			//check what quesiton your on if your on a question that's < allQuestions.length then show next quesiton
			var questionDisplay = '<div>"' + allQuestions[questionIndex].question + '"</div>';
			insertEl(questionEl, "prepend", questionDisplay);
			// CHANGE to a function
			allQuestions[questionIndex].choices.forEach(function(choice){
				var choiceDisplay = "<div class='input'>" + "<input type='radio' name='choice' value='" + choice + "'><p>" + choice + "</p></div>";
				insertEl(choiceArea, "append", choiceDisplay)
			});
			} else {
				var textDisplay = "<div class='score'> You scored " + score + " out of " + allQuestions.length + ".</div>";
				insertEl(questionEl, "append", textDisplay);
				insertEl(questionEl, "append", "<img class='main-image' src='img/2001.jpg'>")
				changeElDisplay(nextButton, "none");
				$(".choices").remove();
			}

			// if statement to see if last question and if so show score if not, do above

		} else {
			alert("ANSWER THE QUESTION");
		}

	});

	function insertEl(parentEl, appendOrPrepend, newEl) {
		if (appendOrPrepend == "append") {
			parentEl.append(newEl);
		} else {
			parentEl.prepend(newEl);
		}
	}

	function changeElDisplay (el, noneOrinitial) {
		el.css("display", noneOrinitial);
	}



});