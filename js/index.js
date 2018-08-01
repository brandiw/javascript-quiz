/*
* Your names
*/

console.log("JS file is linked up!");

var allQuestions = [
{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswerIndex:1}, 
{question: "This trivia quiz is great for many situations:", choices: ["Parties", "Social gatherings", "Pub events", "School Groups"], correctAnswerIndex:0}, 
{question: "What is the world's longest river?", choices: ["Colorado river", "Ohio river", "Nioe river", "Amazon"], correctAnswerIndex:3}];
var questionNum = 0;
var scores = 0;
console.log(allQuestions); 


$(document).ready(function(){
	console.log('index.js is loaded, and it\'s using jQuery');
	startQuiz();	
	changeQuestion(questionNum);


})

function startQuiz(){
	$("#startBtn").click(function(){
		$(this).hide();
		//changeQuestion(questionNum);
		$("p").text(allQuestions[0].question);
		$("input[type=radio").text(allQuestions[0].choices);
		$("p").show();
		$("input[type=radio").show();
		$("form").show();
	})

}


function checkRight(x){
	var v = $('input[name=answer]:checked').val();
	console.log('user input is', v);
	console.log("index of the correct answer " + allQuestions[x -1].correctAnswerIndex);
	if (v == allQuestions[x -1].correctAnswerIndex){

		return true;
	}else {
		return false;
	}
}

function changeQuestion(int){
	// remove the old questions and insert the new questions:
	$("#submit").click(function(e){
		e.preventDefault();
		console.log("submit button is clicked");
		//checkRight();
		int += 1
		if (checkRight(int)) {
			scores += 1;
		}
		if(int < 3){
			$('p').text(allQuestions[int].question);
			$('input[type=radio]').text(allQuestions[int].choices);
		} else { 
			$('p').text(scores);
			$('form').hide();
		}
		
		console.log('this is the score', scores);	
	});

	$("#backBtn").click(function(e){
		e.preventDefault();
		console.log("back button is clicked!")
		int -= 1;
		if(int < 3){
			$('p').text(allQuestions[int].question);
		} 
	});
}



