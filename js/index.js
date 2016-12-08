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
  allQuestions.push(new question ("3+4 ?", [7,1,12], 0));
  allQuestions.push(new question ("3+2 ?", [3,5,6], 1));
  allQuestions.push(new question ("1+1 ?", [1,2,-1], 1));
  allQuestions.push(new question ("5-2 ?", [7,2,3], 2));
  allQuestions.push(new question ("1 x -1 ?", [0,1,-1], 2));

  // show the questions on the page
  // show as radio buttons
  function showQuestion() {
    var radioText = '<input type="radio" class="radio-inline" name="answers">'
    var pText = ['<p>','</p>']
    $('#question').append(pText[0] + allQuestions[questionNum].question+ pText[1]);
    $('#answers').append(radioText + allQuestions[questionNum].choice[0]);
    $('#answers').append(radioText + allQuestions[questionNum].choice[1]);
    $('#answers').append(radioText + allQuestions[questionNum].choice[2]);
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
    if (checkedValue[allQuestions[questionNum].correctAnswer].checked) {
      console.log("correct");
      RIGHT++;
      displayResults(true);
    } else if (!checkedValue[allQuestions[questionNum].correctAnswer].checked) {
      console.log("incorrect");
      WRONG++
      displayResults(false);
    } else {
      console.log("something strange going on!");
    }
  }

  // display answer wright or wrong to user
  function displayResults(bool) {
    if (bool) {
      $("#results").html("You are right!");
      $("#showRight").text(RIGHT);
    } else {
      $("#results").html("Sorry, that is wrong.");
      $("#showWrong").text(WRONG);
    }
    // $("input[type=radio]").attr('disabled', true);
    nextQuestion();
  }

  // change button to next




  //add event lister to next questions,



  //go to next question if clicked, show next question
  function nextQuestion() {
    questionNum++;
    if (questionNum < allQuestions.length) {
      $('#question').html("");
      $('#answers').html("");
      $('#answers').html("");
      $('#answers').html("");
      showQuestion();
    } else {
      $("#results").html("This quiz is over! ");
      $("#results").append("You had " + RIGHT + " right ");
      $("#results").append("And " + WRONG + " wrong.");
      $("#submit").unbind("click");
    }
  }

});
