/*
*Brian Glaser
*Nate Dominguez
*/
console.log("JS file is linked up!");
var index = 0;
var score = 0;

//need array with 4 questions and correct answers 
//need logic to grab submission from

var allQuestions = [{
	question: "What is question 1?", 
	choices: ["question 1 answer 1", "question 1 answer 2", "question 1 answer 3", "question 1 answer 4"], 
	correctAnswerIndex:0
	},{
	question: "What is question 2?", 
	choices: ["question 2 answer 1", "question 2 answer 2", "question 2 answer 3", "question 2 answer 4"], 
	correctAnswerIndex:0
	},{
	question: "What is question 3?", 
	choices: ["question 3 answer 1", "question 3 answer 2", "question 3 answer 3", "question 3 answer 4"], 
	correctAnswerIndex:0
	},{
	question: "What is question 4?", 
	choices: ["question 4 answer 1", "question 4 answer 2", "question 4 answer 3", "question 4 answer 4"], 
	correctAnswerIndex:0
}]; 

//confirms that the answer was submitted
$("#quiz-form").on("submit", function(e){
		e.preventDefault(); 
		console.log("form submitted");

		var answerSubmit = $("input:checked").val(); 
		console.log(answerSubmit)
		$('#quiz-form')[0].reset();
});

//pulls question content into message area but unformatted! Need to format
$("#startrestart").on("click", function(){
	$('#quizquestion').text(allQuestions[index].question);
	$('#a1').append(allQuestions[index].choices[0]);
	$('#a2').text(allQuestions[index].choices[1]);
	$('#a3').text(allQuestions[index].choices[2]);
	$('#a4').text(allQuestions[index].choices[3]);
})

//function confirming that answer submitted matches answer in array 

// CODE GOES HERE

// function getQuestion() {
// 	$.each(allQuestions, function(index, val) {
//     console.log(val.category);
// });

//get first question to display in message div
// function getQuestion(){
// 	$("#resetQuestion").on("click", function(){
// 		$("#quizquestion").empty();
// 		$("#quizquestion").append();
// 	})
// }

