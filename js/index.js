/*
* Your names
*/

var allQuestions = [{question: "Who is the Mayor of Seattle?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswerIndex:0}, {question: "who"}]; 

console.log(allQuestions[0].question); 
console.log(allQuestions[0].choices);
console.log(allQuestions[0].correctAnswerIndex);

$("#submit").click("submitQuiz()");


	function submitQuiz () {
		console.log("FIRING?");
	};