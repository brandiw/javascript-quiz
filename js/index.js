var allQuestions = [{question: "Which of the following Wes Anderson film came first?",
					 choices: ["The Life Aquatic", "The Royal Tenenbaums", "The Darjeeling Limited", "Fantastic Mr. Fox"],
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

					 // [{question: "Who is Prime Minister of the United Kingdom?", 
					 // choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
					 // correctAnswerIndex:0},
					 // {question: "Who is Prime Minister of the United Kingdom?2", 
					 // choices: ["David Cameron2", "Gordon Brown2", "Winston Churchill2", "Tony Blair2"], 
					 // correctAnswerIndex:1}
var score = -1;
var j = 1;
selections = [];

for(var i = 0; i < document.getElementsByClassName("selection").length; i++) {
	selections.push(document.getElementsByClassName("selection")[i].checked);
}

console.log(selections);
// var answers = [];
// for(var i = 0; i < document.getElementsByClassName("answer").length; i++) {
// 	answers[i] = document.getElementsByClassName("answer")[i].textContent;
// }


// document.getElementsByClassName("answer")[0].textContent = allQuestions[1].choices[0];

//function when submit switch question, tally score
 var tally = function() {
	console.log(selections);
	var selectedButton = selections.indexOf(true);
	console.log("correct answer " + allQuestions[j].correctAnswerIndex + " selected answer " + (selectedButton += 1));
	
	if(allQuestions[j].correctAnswerIndex === selectedButton) {
		score++;
	}
	console.log("score " + score);
}	

//function put allquestions into li and ul
var place = function() {
	var ele = document.getElementsByClassName("selection");
	var check = 0;
	console.log("first check is " + check);

	for(var i=0;i<ele.length;i++) {
	    if(ele[i].checked === false) {
	    	check++;
	    	console.log("second check is " + check);
	    }
	    
	}
	if(check === ele.length && j != 1) {
		console.log("this is empty");
		alert("this is wrong");
		//j--;
		//console.log("turn2 " + j);
		return false;
	}

	tally();

	//clears radio buttons
	
	for(var i=0;i<ele.length;i++)
	    ele[i].checked = false;

	document.getElementById("query").textContent = allQuestions[(j-1)].question;
	document.getElementsByClassName("answer")[0].textContent = allQuestions[(j-1)].choices[0];
	document.getElementsByClassName("answer")[1].textContent = allQuestions[(j-1)].choices[1];
	document.getElementsByClassName("answer")[2].textContent = allQuestions[(j-1)].choices[2];
	document.getElementsByClassName("answer")[3].textContent = allQuestions[(j-1)].choices[3];
	j++;
	console.log("turn " + j);

	if(j === 5) {
		document.getElementsByClassName("myScore")[0].style.display = "inline-block";
		document.getElementsByClassName("myScore")[0].textContent += score;
	}
}









//when allQuestion.length go to complete screen

document.getElementsByClassName("submit")[0].addEventListener("click", place);
document.getElementsByClassName("selection")[0].addEventListener("click", function() {for(var i = 0; i < selections.length; i++) {selections[i] = false;}; selections[0] = true; console.log(selections);});
document.getElementsByClassName("selection")[1].addEventListener("click", function() {for(var i = 0; i < selections.length; i++) {selections[i] = false;}; selections[1] = true; console.log(selections);});
document.getElementsByClassName("selection")[2].addEventListener("click", function() {for(var i = 0; i < selections.length; i++) {selections[i] = false;}; selections[2] = true; console.log(selections);});
document.getElementsByClassName("selection")[3].addEventListener("click", function() {for(var i = 0; i < selections.length; i++) {selections[i] = false;}; selections[3] = true; console.log(selections);});
// for(var k = 0; k < document.getElementsByClassName("selection").length; k++) {
// 	document.getElementsByClassName("selection")[k].addEventListener("click", function() {selections[k] = true; console.log(selections);});
// }
place();
