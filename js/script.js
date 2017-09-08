var score = 0;

var allQuestions = [
{
	question: "What makes a muskrat guard hus musk?",
	choices: ["Flair", "GREAT SCOTT", "Courage", "Rosebud"],
	correctAnswerIndex: 2
	},
	{
	question: "Whooo aaarrrreeee yooooouuuuu?",
	choices: ["Owl", "Alice", "Mr Bean", "The Great and Powerful Oz"],
	correctAnswerIndex: 2
	},
	{
	question: "First person to single-hand around the world?",
	choices: ["Joshua Slocum", "Steven Jackson", "Tristan Jones", "Joe Momma"],
	correctAnswerIndex: 0
	},
	{
	question: "Most common hull material of sailing yachts",
	choices: ["Wood", "Copper", "Cement", "Fiber Reinforced Plastic"],
	correctAnswerIndex: 3
	},
	{
	question: "Favorite beer of Petaluma, CA",
	choices: ["Fieldwork", "Sierra Nevada", "Lagunitas", "Rainier"],
	correctAnswerIndex: 2
	},
	{
	question: "Chlorophyll, more like...? ",
	choices: ["plants", "Borophyll", "Chloroplasts", "greenie"],
	correctAnswerIndex: 2
	},
	{
	question: "If peeing in your pants is cool, consider me...?",
	choices: ["Barack Obama", "Steven Jackson", "James Brown", "Miles Davis"],
	correctAnswerIndex: 3
	},
	{
	question: "O'Doyle...?",
	choices: ["Rules", "Kicks Butt", "Wins", "Cools"],
	correctAnswerIndex: 0
	},
	{
	question: "How do you call for the widged monkeys in the wizard of oz?",
	choices: ["Ep-pe, pep-pe, kak-ke! Hil-lo, hol-lo, hel-lo! Ziz-zy, zuz-zy, zik!", "Ep-pe, pep-pe, kak-ke! Ziz-zy, zuz-zy, zik! Hil-lo, hol-lo, hel-lo!", "Ziz-zy, zuz-zy, zik! Ep-pe, pep-pe, kak-ke!  Hil-lo, hol-lo, hel-lo!", "There's no place like home"],
	correctAnswerIndex: 0
	},
	{
	question: "Your score is: ",
	choices: ["","","",""],
	correctAnswerIndex: 0
	}

];

//counter to tell what question we are on
var questionCounter = 0;
var selectedAnswer = $("input[name=question1]:checked").val();
var submitAnswer = $("#userClick");


var getUserSelection = function(){
    var checked = $('input[name="question1"]:checked').val();
    return checked;
}

var answerIsCorrect = function(){
    userSelection = parseInt(getUserSelection());   
	if(allQuestions[questionCounter].correctAnswerIndex === userSelection){
          console.log(allQuestions[questionCounter].correctAnswerIndex, userSelection);
          score++;
          var win = "Your score is " + score;
          allQuestions[allQuestions.length-1].question = win;
          return true;

      } else {
          return false;
          console.log(allQuestions[questionCounter].correctAnswerIndex, userSelection);
      } 
} 


function changeQuestion() {
	$("div h1").text(allQuestions[questionCounter].question);
}

function changeAnswers() {
	var answers = allQuestions[questionCounter].choices;
	//console.log("test one");
	var getAnswers = function(){
	 for (i=0; i<answers.length; i++){
	     $("#" + i).text(answers[i]);
	     //console.log("test 2");
	}};
	getAnswers();
}

submitAnswer.on("click", function() {
	//getUserSelection();
	console.log(answerIsCorrect());
	questionCounter++;
	changeQuestion();
	changeAnswers();

});