/*
* Jenna Badanowski and Lauren Perez
*/

// to do:
//add reset button to end


var allQuestions = [
{
  question: "How many feet are there in a fathom?", 
  choices: ["4", "5", "6"], 
  correctAnswerIndex:2,
  name: "one"
},
{
  question: "What type of animal is a kolinsky?", 
  choices: ["weasel", "muskrat", "bear"], 
  correctAnswerIndex:0,
  name: "two"
},
{
  question: "Which of these colors does not appear on the Italian flag?", 
  choices: ["green", "red", "blue"], 
  correctAnswerIndex:2,
  name:"three"
}
]; 

var score = 0; 
var counter = 0; 
var numberQuestions = 3; 

$(document).ready(changeQuestion());

function changeQuestion(){
    if(counter < 3){
      $("form").empty();
      var label = document.createElement("p");
      label.append(allQuestions[counter].question);
      $('form').append(label);
      for (var j = 0; j < allQuestions[counter].choices.length; j++) {
        var input = $('<input type="radio" name='+allQuestions[counter].name+'>');
        var text = allQuestions[counter].choices[j]; 
        $(input).val(j);
        $('form').append(input);
        $('form').append(text + '<br>');
          }
      counter++; 
  }else{
    $("form").empty();
    $("#submit").toggle();
    $("#score").text("You got "+score+" out of 3 questions correct!");
  }
 } 


function checkAnswer(){
  var answerIndex = allQuestions[counter-1].correctAnswerIndex;

  if (!$("input:checked").val()) {
   $("#score").text("Please select an answer.");
  }else if($('input:checked').val() == answerIndex) { 
    score++;
    $("#score").text("");
    changeQuestion();
   }else{
    $("#score").text("");
    changeQuestion();
   }
}
