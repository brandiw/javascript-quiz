/*
* Joe, Winston, Sweeny
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
  change();
}

// var win = function (){
//   if (((allQuestions[0].question === "Winston's favorite cereal is...") && ($('#questionC').prop('checked', true))) ||
//       ((allQuestions[1].question === "Winston's favorite movie is...") && ($('#questionB').prop('checked', true)) ||
//       ((allQuestions[2].question === "Winston's favorite date night location...") && ($('#questionD').prop('checked', true))) {
//     correct ++;
//   } else {
//     console.log("answer incorrect");
//   }
// }

// $('#submit').on('click', nextQ);
$('#submit').click(function(event) {
    event.preventDefault();
    console.log("slicked");
    win();
    $('input').prop('checked', false);
    nextQ();
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
