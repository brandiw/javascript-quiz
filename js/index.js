var allQuestions = [{question: "Which of the following Wes Anderson film came first?",
					 choices: ["The Life Aquatic", "The Royal Tenenbaums", "The Darturneeling Limited", "Fantastic Mr. Fox"],
					 correctAnswerIndex:1},
					 {question: "Which Noah Bambauch film did Wes Anderson Produce?",
					 choices: ["Margot at the Wedding", "the Squid and the Whale", "The Meyerowitz Stories (New and Selected)", "Rushmore"],
					 correctAnswerIndex:0},
					 {question: "What is the name of the sought after animal in the Life Aquatic?",
					 choices: ["Leopard Otter", "Cougar Beluga", "Jaguar Shark ", "Jacques Cousteau "],
					 correctAnswerIndex:2},
					 {question: "What is the trademark matching outfit for Chas Tennenbaum (Ben Stiller) and his sons in the Royal Tenenbaums?",
					 choices: ["Blue jeans and a jean jacket (Canadian tuxedo)", "Red Adidas tracksuit", "Black turtle neck and blue jeans", "Vintage Chicago Cubs uniform"],
					 correctAnswerIndex:1},
					 {question: "What is the name of the most recent Wes Anderson film?",
					 choices: ["Moonrise Kingdom", "Grand Budapest Hotel", "Hotel Chevalier", "Bottle Rocket"],
					 correctAnswerIndex:1}];
var score = 0;
var turn = 0;
var submit = document.getElementsByClassName("submit")[0];
selectionsBoolean = [];
selections = [];

//selections is now arry of booleans from the select buttons
for(var i = 0; i < document.getElementsByClassName("selection").length; i++) {
	selectionsBoolean.push(document.getElementsByClassName("selection")[i].checked);
}

for(var i = 0; i < document.getElementsByClassName("selection").length; i++) {
	selections.push(document.getElementsByClassName("selection")[i]);
}

//removes event listeners
var endGame = function() {
	document.getElementsByClassName("question-box")[0].style.display = "none";
	document.getElementsByClassName("scoreFrame")[0].style.display = "block";
	document.getElementsByClassName("myScore")[0].textContent += score + " out of " + allQuestions.length + " correctly";
	document.getElementsByClassName("percent")[0].textContent += (score / allQuestions.length * 100) + "%";
	submit.removeEventListener("click", place);
	selections[0].removeEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[0] = true; console.log(selectionsBoolean);});
	selections[1].removeEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[1] = true; console.log(selectionsBoolean);});
	selections[2].removeEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[2] = true; console.log(selectionsBoolean);});
	selections[3].removeEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[3] = true; console.log(selectionsBoolean);});
	console.log("end");
}

//function when submit switch question, tally score
 var tally = function() {
 	if(turn != 0) {
		console.log(selectionsBoolean);
		var selectedButton = selectionsBoolean.indexOf(true);
		console.log("correct answer " + allQuestions[turn-1].correctAnswerIndex + " selected answer " + (selectedButton));
		
		if(allQuestions[turn-1].correctAnswerIndex === selectedButton) {
			score++;
		}
		console.log("score " + score);
	}
	//handles after submit button is clicked for the questions list length
	if(turn === (allQuestions.length)) {
		endGame();
	};
}	

//function put allquestions into li and ul
var place = function() {
	var check = 0;



	//tells if nothing is selected
	for(var i = 0; i < selections.length ; i++) {
	    if(selections[i].checked === false) {
	    	check++;
	    	console.log("second check is " + check);
	    }
	    
	}
	if(check === selections.length && turn != 0) {
		console.log("this is empty");
		alert("this is wrong");
		return false;
	}

	tally();

	//clears radio buttons
	for(var i = 0; i < selections.length; i++) {
	    selections[i].checked = false;
	}

	if(turn != allQuestions.length) {
		document.getElementById("query").textContent = allQuestions[turn].question;

		for(var i = 0; i < selectionsBoolean.length; i++) {
			document.getElementsByClassName("answer")[i].textContent = allQuestions[turn].choices[i];
		}
		turn++;
		console.log("turn " + turn);
	}
}



//when allQuestion.length go to complete screen
submit.addEventListener("click", place);
selections[0].addEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[0] = true; console.log(selectionsBoolean);});
selections[1].addEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[1] = true; console.log(selectionsBoolean);});
selections[2].addEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[2] = true; console.log(selectionsBoolean);});
selections[3].addEventListener("click", function() {for(var i = 0; i < selectionsBoolean.length; i++) {selectionsBoolean[i] = false;}; selectionsBoolean[3] = true; console.log(selectionsBoolean);});


place();

function myFunction(x) {
    x.classList.toggle("change");
}
