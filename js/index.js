/*
* Andres Fresnedo, Niko Tsafos
data validation bonus
*/
var correctAns;
var score = 0;
var questionArray;
var asked = 0;
console.log("JS file is linked up!");

// question object
// take a string, array, number
function Question(question, choices, index) {
  this.question = question;
  this.choices = choices;
  this.index = index;
}




function ask(q) {
  asked++;
  correctAns = q.index;
  //asks question
  $('#questionBox').empty();
  $('#questionBox').append(q.question);
  //gives choices
  $('#choices').empty();
  for (var i = 0; i < q.choices.length; i++) {
    // create the radio elements
    $('#choices').append("<input id=choice-" + i + " type='radio' name='choice' value=" + i + " />" + q.choices[i] + "</br>");
  }
  // ask next question

}
$(document).ready(function() {
  console.log('app.js is loaded, and were using jquery!!!')

  console.log("hi");
  $('#sub').click(function(e) {
    e.preventDefault();
    console.log('form was submitted!');

    var checked = $('input[name=choice]:checked').val();
    console.log(checked);
    console.log(correctAns);
    if (checked === undefined) {
      console.log('please select answer');
    } else {
    var correct = (checked == correctAns);
    if (correct) {
      score++;
      console.log("You have chosen wisely,");
      console.log("You have a score of: " + score);
    }
    else {
      console.log("You have chosen poorly.");
    }
    // ask next question
    if (asked < questionArray.length) {
      ask(questionArray[asked]);
    }
    else {
      $('#choices').empty();
      $('#questionBox').empty();
      $("#questionBox").append("Game over. Score: " + score);
      console.log("it's over!");
    }
  }
  })

})

function init() {
  var q1 = new Question("What day of the week is it?", ["Monday", "Tuesday", "Wednesday"], 2);
  var q2 = new Question("What does GA stand for?", ["Get Ahead", "Good Afternoon", "Gorilla Apes", "General Assembly"], 3);
  var q3 = new Question("What year did the US become independent?", ["1776", "1999", "1775", "1779", "All of the above"], 0);
  console.log(q1.choices[q1.index]);
  console.log(q2.choices[q2.index]);
  console.log(q3.choices[q3.index]);

  questionArray = [q1, q2, q3];
  ask(questionArray[asked]);

}

init();
