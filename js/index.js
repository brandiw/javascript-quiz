/*
* Your names: Robert, David
*/
$(document).ready(function(){


  console.log("JS file is linked up!");

  // define the class container
  class question {
    constructor(question, answer1, answer2, correctAnswer) {
      this.question = question;
      this.answer1 = answer1;
      this.answer2 = answer2;
      this.correctAnswer = correctAnswer;
      }
  };


  // populate the class with the questions & answers
  questionNum = 0;
  var allQuestions = [];
  allQuestions.push(new question ("3+4?", 7, 1, 7));
  allQuestions.push(new question ("2+2?", 3, 4, 4));



  console.log(allQuestions);
  console.log($("#answer1"));

  // show the questions on the page
  // show as radio buttons
  function showQuestion() {
    $('#container').append('<p>'+allQuestions[0].question+'</p>');
  };
/*
    $("#question").html(allQuestions[0].question);
    console.log("start radio");
    $("#answers").append( allQuestions[0].answer1);
    console.log("end radio");
  }
  */

  showQuestion();


  // event listener on tthe button that



  // checks radio button value against answer




  // display answer wright or wrong to user



  // if correct increment correct/incorrect results



  //add event lister to next questions,



  //go to next question if clicked, show next question

});
