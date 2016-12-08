/*
* Your names: Robert, David
*/
$(document).ready(function(){
  console.log("JS file is linked up!");
  var RIGHT = 0;
  var WRONG = 0;
  $("#showRight").text(RIGHT);
  $("#showWrong").text(WRONG);

  // define the class container
  class question {
    constructor(question, choice, correctAnswer) {
      this.question = question;
      this.choice = choice;
      this.correctAnswer = correctAnswer;
      }
  };

  // populate the class with the questions & answers
  questionNum = 0;
  var allQuestions = [];
  allQuestions.push(new question ("3+4?", [7,1,12], 0));
  allQuestions.push(new question ("3+2?", [3,5,6], 1));


  // show the questions on the page
  // show as radio buttons
  function showQuestion() {
    var radioText = '<input type="radio" class="radio-inline" name="answers">'
    $('#question').append('<p>'+allQuestions[0].question+'</p>');
    $('#answers').append(radioText + allQuestions[0].choice[0]);
    $('#answers').append(radioText + allQuestions[0].choice[1]);
    $('#answers').append(radioText + allQuestions[0].choice[2]);
  };

  showQuestion();


  // event listener on tthe button that
  $("#submit").click(function(e){
    e.preventDefault();
    verifyAnswer();
  });


  // checks radio button value against answer
  function verifyAnswer() {
    var checkedValue = $("input[name=answers]");
    if (checkedValue[allQuestions[0].correctAnswer].checked) {
      console.log("correct answer");
    }
  }


  // display answer wright or wrong to user



  // if correct increment correct/incorrect results
  if (true){
    RIGHT++;
  } else {
    WRONG++;
  }


  //add event lister to next questions,



  //go to next question if clicked, show next question

});
