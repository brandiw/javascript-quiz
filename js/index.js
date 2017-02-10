/*
* Justin & Hailey & Kelly
*/
$('document').ready(function() {
console.log("JS file is linked up!");

var allQuestions = [{question:"What was Arnold's catchphrase?", choices: ['I knew I should have stayed home today.', 'I think this is against school policy.', 'Are we all going to die.', 'Hey! Hey! it is Fat Albert'], correctAnswerIndex:0},
					{question:"What is Ms. Frizzle first name?", choices: ['Vicky','Valerie', 'Fran', 'Joyce'], correctAnswerIndex:1},
					{question:"Which student is a recent transfer?", choices: ['Phoebe', 'Dorothy Ann', 'Ralphie', 'Jake'], correctAnswerIndex:0},
					{question:"What topic isn't mentioned in the theme song?", choices: ['volcanoes','sound waves', 'dinosaurs', 'marine biology'], correctAnswerIndex:2},
					{question:"Which student was constantly getting groans for their corny jokes?", choices: ['Arnold', 'Carlos', 'Keesha', 'Jim'], correctAnswerIndex:1},
					{question:"Which classic comedian provides the voice for Ms. Frizzle?", choices: ['Carol Burnett', 'Elaine Stritch', 'Lily Tomlin', 'Betty White'], correctAnswerIndex:2},
					{question:"Which classic Nickelodeon show did Arnold's voice actor star on?", choices: ['Hey Dude', 'Clarissa Explains It All', 'Pete and Pete', 'Thats so Raven'], correctAnswerIndex:2},
					{question:"What was Ms. Frizzle's motto?", choices: ['If at first you don’t succeed, try, try again.', 'Take chances, make mistakes, get messy.', 'Knowledge is power!', 'Just Keep Going!'], correctAnswerIndex:1},
					{question:"What is the name of Ms. Frizzle's pet lizard?", choices: ['Izzy', 'Liz', 'Lionel', 'Larry'], correctAnswerIndex:1},
					{question:"Which Mean Girls actor voiced one of the Magic School Bus kids?", choices: ['Lacey Chabert (Gretchen Wieners)', 'Rajiv Surendra (Kevin Gnapoor)', 'Daniel DeSanto (Jason)', 'Raven Simon (Raven'], correctAnswerIndex:2},
					{question:"What is the name of the school The Magic School Bus kids attend?", choices: ['Walkerville Elementary', 'Lakeview Prep', 'Ivy Drive Elementary', 'WestLake Elementary'], correctAnswerIndex:0},
					{question:"Which student's cousin often tags along on field trips?", choices: ['Keesha', 'Wanda Li', 'Arnold', 'Carlos'], correctAnswerIndex:2},
					{question:"What real life singer voices The Magic School Bus rock star Molly Cule?", choices: ['Wynona Judd', 'Joan Jett', 'Cher', 'Sting'], correctAnswerIndex:0},
					{question:"What phrase does Wanda Li repeat when she's stressed?", choices: ['Oh dear, oh dear, oh dear!', 'Not good, not good, not good!', 'What are we gonna do, what are we gonna do, what are we gonna do!?', 'Oh my Goodness! Where is Ms. Frizzle?'], correctAnswerIndex:2}]

var questionNumber = 3;
var score;
var time;

// append question here
$('#question').html(allQuestions[questionNumber].question);


$('#lab1').html(allQuestions[questionNumber].choices[0]);
$('#lab2').html(allQuestions[questionNumber].choices[1]);
$('#lab3').html(allQuestions[questionNumber].choices[2]);
$('#lab4').html(allQuestions[questionNumber].choices[3]);

timer();



$('#nextButton').on('click', function() {
	$("p").fadeOut(800); 
	$("input").fadeOut(800); 
	checkEndgame();
	clearInterval(tickDown);
	if (questionNumber === allQuestions.length) {
		switchToSubmitButton()
	}
});

function timer() {
	time = 5;
	var tickDown = setInterval(function(){
		time -= 1;
		$('#timeDisplay').text(time.toString());

		if (time === 0) {
			console.log('next question will now commence'); //placeholder			
			clearInterval(tickDown);
			checkEndgame();
		}
	}, 1000)
}
function checkEndgame() {
	questionNumber += 1;
	if (questionNumber === allQuestions.length) {
		checkAnswer();
		tallyScore();
	} else {
		nextQuestion();
		timer();
	}
}			
function checkAnswer(){
	
};

function tallyScore(){

};

function nextQuestion(){
	$("p").fadeIn(800); 
	$("input").fadeIn(800); 
	$('#lab1').html(allQuestions[questionNumber].choices[0]);
	$('#lab2').html(allQuestions[questionNumber].choices[1]);
	$('#lab3').html(allQuestions[questionNumber].choices[2]);
	$('#lab4').html(allQuestions[questionNumber].choices[3]);
	$('#question').html(allQuestions[questionNumber].question);
};

function switchToSubmitButton(){
	$('#nextButton').hide();
	$('#submitButton').show();

};

$('#submitButton').on('click', function(){
	showScore();
});

function showScore(){
	$('#question').html(score);
};

});





