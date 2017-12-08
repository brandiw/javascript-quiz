var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", 
					 choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
					 correctAnswerIndex:0},
					 {question: "Who is Prime Minister of the United Kingdom?2", 
					 choices: ["David Cameron2", "Gordon Brown2", "Winston Churchill2", "Tony Blair2"], 
					 correctAnswerIndex:1}];
var score = 0;
var j = 0;
selections = [];

for(var i = 0; i < document.getElementsByClassName("selection").length; i++) {
	selections.push(document.getElementsByClassName("selection")[i]);
}

console.log(selections);
// var answers = [];
// for(var i = 0; i < document.getElementsByClassName("answer").length; i++) {
// 	answers[i] = document.getElementsByClassName("answer")[i].textContent;
// }


// document.getElementsByClassName("answer")[0].textContent = allQuestions[1].choices[0];


//function put allquestions into li and ul
var place = function() {
	// for(var i = 0; i < 4; i++) {
	// 	answers[i] = allQuestions[0].choices[i];
	// 	console.log(answers[i]);
	// 	console.log(allQuestions[0].choices[i]);
	// }

	document.getElementById("query").textContent = allQuestions[j].question;
	document.getElementsByClassName("answer")[0].textContent = allQuestions[j].choices[0];
	document.getElementsByClassName("answer")[1].textContent = allQuestions[j].choices[1];
	document.getElementsByClassName("answer")[2].textContent = allQuestions[j].choices[2];
	document.getElementsByClassName("answer")[3].textContent = allQuestions[j].choices[3];
	j++;
}
place();


//function when submit switch question, tally score

//when allQuestion.length go to complete screen

document.getElementsByClassName("submit")[0].addEventListener("click", place);