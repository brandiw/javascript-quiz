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


  // show the questions on the page
  // show as radio buttons
  function showQuestion() {
    var radioText = ['<input type="radio" name="answers">','<br>']
    $('#answerContainer').append('<p>'+allQuestions[0].question+'</p>');
    $('#answerContainer').append(radioText[0] + allQuestions[0].answer1 + radioText[1]);
    $('#answerContainer').append(radioText[0] + allQuestions[0].answer2 + radioText[1]);
  };

  showQuestion();


  // event listener on tthe button that
  $("#submit").click(function(e){
    e.preventDefault();
    verifyAnswer();
  });


  // checks radio button value against answer
  function verifyAnswer() {
    console.log(answerContainer);
  }



  // display answer wright or wrong to user



  // if correct increment correct/incorrect results



  //add event lister to next questions,



  //go to next question if clicked, show next question

});
