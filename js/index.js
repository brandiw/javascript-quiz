/*
* Your names
*/

console.log("JS file is linked up!");

// var allQuestions = [
// {question: "Do you like pizza?",
// choices: ["yes", "no"],
// correctAnswer: 0},

// {question: "What's the ice king's real name?",
// choices: ["Nice King", "Simon", "Leslie"],
// correctAnswer: 1}
// ];








//set up variables
var answered1 = false;
var answered2 = false;
var score = 0;


	// if (answer1 !== "yes" && answer1 !== "no") {
	// 	alert("Please pick an answer")
	// 	return;
	// };
	

//Question 1 click event
$("#submitButton1").click(function(e){
	e.preventDefault();


	$("#question2").css("display", "inline");
	$("#question1").css("display", "none");
	var answer1 = $("input[name=question1]:checked").val();
	
	if (answer1 == "yes" && answered1 == false) {
		score++;
	};
	answered1 = true;
});


//Question 2 click event
$("#submitButton2").click(function(e){
	e.preventDefault();
		if (answer2 == null) {
		alert("Please pick an answer")
		return;
	};
	$("#question2").css("display", "none");
	$("#question3").css("display", "inline");

	var answer2 = $("input[name=question2]:checked").val();
	if (answer2 == "simon" && answered2 == false) {
		score++;
	};
	answered2 = true;
});


//Question 3 click event
$("#submitButton3").click(function(e){
	e.preventDefault();
		if (answer3 == null) {
		alert("Please pick an answer")
		return;
	};
	$("#question3").css("display", "none");
	var answer3 = $("input[name=question3]:checked").val();
	if (answer3 == "darthVader") {
		score++;
	}
	$(".message").text("You got " + score + " questions correct!")
	console.log(score);
});


//Question 1 back button
$("#backButton1").click(function(e){
	e.preventDefault();
	$("#question1").css("display", "inline");
	$("#question2").css("display", "none");
});


//Question 2 back button
$("#backButton2").click(function(e){
	e.preventDefault();
	$("#question2").css("display", "inline");
	$("#question3").css("display", "none");
});





