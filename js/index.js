//Variables

$(document).ready(function(){
	$("#quizQuestion").hide();


var score = 0;
var allQuestions = [{
	question: "What is the capital of Idaho?",
	choices: ["Ketchum", "Boise", "Haley", "Twin Falls"],
	correctAnswerIndex: 1},

	{question: "What is the Capital of California?",
	choices: ["Sacramento", "San Francisco", "Rancho Cucamonga", "Irvine"],
	correctAnswerIndex: 0},

	{question: "What is the capital of Oregon",
	choices: ["Portland", "Redmond", "Vancouver", "Salem"],
	correctAnswerIndex: 3},

	{question: "What is the capital of Montana?",
	choices: ["Missoula","Billings","Bozeman","Helena" ],
	correctAnswerIndex: 3},

	{question: "What is the capital of Arizona?",
	choices: ["Tempe","Phoenix","Tuscon","Scottsdale"],
	correctAnswerIndex: 1}

];

var i = 0;
var currentQuestion = 0;

// allQuestions[i].correctAnswerIndex === allQuestions[i].choices[1];
	

function checkAnswer() {
	var checked = $('input[name=choice]:checked').val();
	if (checked == allQuestions[0].correctAnswerIndex) {
		score++
	} else if (checked == allQuestions[1].correctAnswerIndex) {
		score++
	} else if (checked == allQuestions[2].correctAnswerIndex) {
		score++
	} else if (checked == allQuestions[3].correctAnswerIndex) {
		score++
	} else if (checked == allQuestions[4].correctAnswerIndex) {
		score++
	} else {
		console.log("wrong")
	}

};	




$("#startButton").click(function (){
	$("#quizStart").hide();
	$("#quizQuestion").show();
	// questionTemplate();

})

$("#next").click(function() {
	$("h3").text(allQuestions[i++].question);
	$("#a1").text(allQuestions[i-1].choices[0]);
 	$("#a2").text(allQuestions[i-1].choices[1]);
 	$("#a3").text(allQuestions[i-1].choices[2]);
 	$("#a4").text(allQuestions[i-1].choices[3]);
 	checkAnswer();
 	console.log(score);
});


});






