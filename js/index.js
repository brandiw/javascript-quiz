/*
* Joe, Winston, Sweeny TEAM AWESOME!
*/

var correct = 0;
var turn = 0;

var allQuestions = [
  {question: "Winston's favorite cereal is...",
  choices: ["Cornflakes", "Fruit Loops", "Reese's Puffs", "Cheerios"],
  correctAnswerIndex:2},
  {question: "Winston's favorite movie is...",
  choices: ["Dirty Dancing", "Ocean's 11", "Toy Story 3", "The Sound of Music"],
  correctAnswerIndex:1},
  {question: "Winston's favorite date night location...",
  choices: ["Walking on the Beach", "Candle-lit Dinner", "Playing Video Games", "Music Museum"],
  correctAnswerIndex:3}
];

console.log("JS file is linked up!");
$( document ).ready(function() {
    console.log( "ready!" );

var nextQ = function (){
  turn ++;
  $('input').prop('checked', false);
  change();
}

var win = function(){
  if ((turn == 0) && ($("#answers-C").is(":checked"))){
    correct++;
    nextQ();
  }else if ((turn == 1) && ($("#answers-B").is(":checked") )){
    correct++;
    nextQ();
  }else if ((turn == 2) && ($("#answers-D").is(":checked") )){
    correct++;
    alert("You got " + correct + " right!")
  }else{
    alert("Guess Again!")
  }
};

$('#submit').click(function(event) {
    event.preventDefault();
    console.log("slicked");
    win();
});

// Replace Questions
var change = function (){
  $('h3').text(allQuestions[turn].question);
  $('#questionA').text("A " + allQuestions[turn].choices[0]);
  $('#questionB').text("B " + allQuestions[turn].choices[1]);
  $('#questionC').text("C " + allQuestions[turn].choices[2]);
  $('#questionD').text("D " + allQuestions[turn].choices[3]);
}

change();


//Ends DOM
});
