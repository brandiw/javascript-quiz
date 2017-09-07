/*
* Jenna Badanowski and Lauren Perez
*/

console.log("JS file is linked up!");


var allQuestions = [
{
  question: "How many feet are there in a fathom?", 
  choices: ["4", "5", "6"], 
  correctAnswerIndex:2
},
{
  question: "What type of animal is a kolinsky?", 
  choices: ["weasel", "muskrat", "bear"], 
  correctAnswerIndex:0
},
{
  question: "Which of these colors does not appear on the Italian flag?", 
  choices: ["green", "red", "blue"], 
  correctAnswerIndex:2
}
]; 

for (var i = 0; i < allQuestions.length; i++) {
  var label = document.createElement("LABEL");
  label.append(allQuestions[i].question);
  $('form').append(label);
  for (var j = 0; j < allQuestions[i].choices[j]; j++) {
    var input = document.createElement('INPUT')
    input.attr({
      "type":"radio",
      "name": "q1",
      });
    input.val(allQuestions[i].choices[j]);
    $('form').append(input);
  }
}
