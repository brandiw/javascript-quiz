/*
* Jenna Badanowski and Lauren Perez
*/

console.log("JS file is linked up!");


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
var numberQuestions = 3; 


function changeQuestion(){
  for (var i = 0; i < allQuestions.length; i++) {
      var label = document.createElement("p");
      label.append(allQuestions[i].question);
      $('form').append(label);

      for (var j = 0; j < allQuestions[i].choices.length; j++) {
        var input = $('<input type="radio" name='+allQuestions[i].name+'>');
        var text = allQuestions[i].choices[j]; 
        $(input).val(allQuestions[i].choices[j])
        $('form').append(input);
        $('form').append(text + '<br>');
      }

  }

  // if($('input[allQuestions[i].name]:checked').val() == allQuestions[i].choices[correctAnswerIndex]){
// console.log(input[allQuestions[i].name]':checked');
  // };
}

//if checked radio button's value = choices[correctAnswerIndex] then score ++
// indexof checked radio button == allQuestions[i].correctAnswerIndex;

