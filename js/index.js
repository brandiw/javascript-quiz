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


$("#question2").hide();
$("#question3").hide();


//set up variables
var answered1 = false;
var answered2 = false;
var score = 0;
var answer1;
var answer2;
var answer3;





//Question 1 click event
$("#submitButton1").click(function(e){
	e.preventDefault();
	answer1 = $("input[name=question1]:checked").val();
	if (answer1 == null) {
		alert("Please pick an answer");
		return;
	};
	$("#question2").fadeIn(1000);
	$("#question1").hide();
	console.log(score);
});


//Question 2 click event
var question2Correct = false;
$("#submitButton2").click(function(e){
	e.preventDefault();
	answer2 = $("input[name=question2]:checked").val();
	if (answer2 == null) {
		alert("Please pick an answer")
		return;
	};
	$("#question2").hide();
	$("#question3").fadeIn(1000);
	console.log(score);
});


//Question 3 click event
$("#submitButton3").click(function(e){
	e.preventDefault();

	answer3 = $("input[name=question3]:checked").val();
	if (answer3 == null) {
		alert("Please pick an answer")
		return;
	};
	$("#question3").css("display", "none");
	if (answer1 == "yes") {
		score++;
	};
	if (answer2 == "simon") {
		score++;
	};
	if (answer3 == "darthVader") {
		score++;
	};


	if (score == 0) {
	$(".message").text("You got " + score + " questions correct. You suck. How do you not like pizza?!")
	};
	if (score == 1) {
	$(".message").text("You got " + score + " question correct. Good for you (not impressed).")
	};
	if (score == 2) {
	$(".message").text("You got " + score + " questions correct. Congratulations, you're average.")
	};
	if (score == 3) {
	$(".message").text("You got " + score + " questions correct. YOU. ARE. AWESOME.")
	};
	console.log(score);
});


//Question 1 back button
$("#backButton1").click(function(e){
	e.preventDefault();
	$("#question1").fadeIn(1000);
	$("#question2").hide();
	answered1 = false;
	console.log(score);
});


//Question 2 back button
$("#backButton2").click(function(e){
	e.preventDefault();
	$("#question2").fadeIn(1000);
	$("#question3").hide();
	answered2 = false;
	question2Correct = false;
	console.log(score);
});





