// Kim, Jacob & Carlos

$(document).ready(function(){

	//hide questions and button by default
	$("#question2").hide();
	$("#question3").hide();
	$("#tryAgain").hide();

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

		//if no answer, show alert
		if (answer1 == null) {
			alert("Please pick an answer");
			return;
		};
		$("#question2").fadeIn(1000);
		$("#question1").hide();
	});


	//Question 2 click event
	var question2Correct = false;
	$("#submitButton2").click(function(e){
		e.preventDefault();
		answer2 = $("input[name=question2]:checked").val();

		//if no answer, show alert
		if (answer2 == null) {
			alert("Please pick an answer")
			return;
		};
		$("#question2").hide();
		$("#question3").fadeIn(1000);
	});


	//Question 3 click event
	$("#submitButton3").click(function(e){
		e.preventDefault();
		answer3 = $("input[name=question3]:checked").val();

		//if no answer, show alert
		if (answer3 == null) {
			alert("Please pick an answer")
			return;
		};
		//check user inputs and calculate score
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
		//show try again button
		$("#tryAgain").show();

		//show score and related image
		if (score == 0) {
			$(".message").text("You got " + score + " questions correct. You suck. How do you not like pizza?!")
		};
		if (score == 1) {
			$(".message").text("You got " + score + " question correct. Good for you (not impressed).");
			$("#pictures").html("<img src='https://upload.wikimedia.org/wikipedia/commons/7/7d/Barack_Obama_with_artistic_gymnastic_McKayla_Maroney_2.jpg'/>");
		};
		if (score == 2) {
			$(".message").text("You got " + score + " questions correct. Congratulations, you're average.");
			$("#pictures").html("<img src='http://cdn.totalsororitymove.com/wp-content/uploads/2016/03/02a0d3cd39543bcd763313c26a0406a6.jpg'/>");
		};
		if (score == 3) {
			$(".message").text("You got " + score + " questions correct. YOU. ARE. AWESOME.");
			$("#pictures").html("<img src='https://cdn.meme.am/instances/44156106.jpg'/>");
		};
	});


	//Question 1 back button
	$("#backButton1").click(function(e){
		e.preventDefault();
		$("#question1").fadeIn(1000);
		$("#question2").hide();
		answered1 = false;
	});


	//Question 2 back button
	$("#backButton2").click(function(e){
		e.preventDefault();
		$("#question2").fadeIn(1000);
		$("#question3").hide();
		answered2 = false;
		question2Correct = false;
	});

	//Try Again Button
	$("#tryAgain").click(function(e){
		e.preventDefault();
		location.reload();
	});

});