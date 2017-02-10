/* let's get it on
* Your names
*/
// IS IT WORKING

console.log("JS file is linked up!");
$('#start').on('click', function(){
  startGame();
  $('#start').remove();
})
$('#reset').on('click', function(){
  location.reload();
})

var allQuestions = [
  {question: "What is H2O: ", choices: ["Ice", "Steam", "Mist", "Water"], correctAnswerIndex:3},
  {question: "How many atoms are in are in a mole: ", choices: ["6.022 x 10^21", "6.022 x 10^22", "6.022 x 10^23", "6.022 x 10^24"], correctAnswerIndex:2},
  {question: "When did the Neil Armstrong land on the moon?", choices: ["Never, it was fake", "June 14 2013", "July 20th 1969", "June 10th 1969"], correctAnswerIndex:0},
  {question: "Where is the World Headquarters of the Illuminati?", choices: ["Cincinatti", "Belize", "Rome", "Denver"], correctAnswerIndex:3},
  {question: "Where does Tupac currently reside?", choices: ["Fargo", "In Our Hearts", "Bogota", "Singapore"], correctAnswerIndex:2},
  {question: "Who shot JFK?", choices: ["Ted Cruz's Father", "Mark Wahlberg", "Katy Perry", "Secret Service"], correctAnswerIndex:1},
  {question: "What Happened to the Titanic?", choices: ["It Sunk", "Polar Bears", "Aliens", "Mark Wahlberg"], correctAnswerIndex:2}
];


var score = 0;
  $('#userScore').append('<h2 id="actualScore">' + score+ '</h2>');
var questionCounter = 0;
var firstQuestion = null;
var Answers = null;
var correctAns = null;


function startGame(){
  firstQuestion = allQuestions[questionCounter].question;
  Answers = allQuestions[questionCounter].choices;
  correctAns = allQuestions[questionCounter].correctAnswerIndex;
  $('#question').append('<h2 id="questionTitle">' + firstQuestion + '</h2>');

  for(var i =0; i < Answers.length; i++){
    $('#choices').append('<li id='+ i +'>' + Answers[i] + '</li>');
  }
  checkAns();
}

function checkAns(){
  $('#0').on('click', function(){
    console.log('0');
    if (this.id == correctAns){
      console.log('correct');
      score++;
      console.log(score);
    }else{
      console.log('wrong');
    }
    handleResponse();
  })
  $('#1').on('click', function(){
    console.log('1');
    if (this.id == correctAns){
      console.log('correct');
      score++;
    }else{
      console.log('wrong');
    }
    handleResponse();
  })
  $('#2').on('click', function(){
    console.log('2');
    if (this.id == correctAns){
      console.log('correct');
      score++;
    }else{
      console.log('wrong');
    }
    handleResponse();
  })
  $('#3').on('click', function(){
    console.log('3');
    if (this.id == correctAns){
      console.log('correct');
      score++;
    }else{
      console.log('wrong');
    }
    handleResponse();
  })
}

function handleResponse(){
  $('#userScore').children().remove();
  $('#userScore').append('<h2>' + score+ '</h2>');
  $('#choices').children()[correctAns].style.color ='red';
  console.log($('#choices').children()[correctAns])
  $('#choices').children()[correctAns].addClass('choice');
  $('#questionTitle').fadeOut();
  $('#choices').children().fadeOut();
  setTimeout(function(){
    nextQuestion();
  }, 2000);
}

function nextQuestion(){
  $('#questionTitle').remove();
  $('#choices').children().remove();
  questionCounter++;
  if(questionCounter == allQuestions.length){
    gameOver();
  }else{
    startGame();
  }
}
