$(function() {

  const QUESTIONS = [{
      question: 'Question 1',
      answers: {
        a: 'This is the right answer',
        b: 'This is a wrong answer',
        c: 'This is a wrong answer',
        d: 'This is a wrong answer'
      },
      correctAnswer: '1'
    },
    {
      question: 'Question 2',
      answers: {
        a: 'This is the right answer',
        b: 'This is a wrong answer',
        c: 'This is a wrong answer',
        d: 'This is a wrong answer'
      },
      correctAnswer: '2'
    },
    {
      question: 'Question 3',
      answers: {
        a: 'This is the right answer',
        b: 'This is a wrong answer',
        c: 'This is a wrong answer',
        d: 'This is a wrong answer'
      },
      correctAnswer: '3'
    }
  ]

  var score = 0;
  var currentQuestion = 0;
  var answersArr = [];



  // takes an object containg questions and generate an array containing the 
  //HTML for each question

  function generateBoard(questionNumber) {
    if (doneWithTest()) { alert(); }

    $('#question-title').text(QUESTIONS[questionNumber].question);
    $('#radioAns1').text(QUESTIONS[questionNumber].answers.a);
    $('#radioAns2').text(QUESTIONS[questionNumber].answers.b);
    $('#radioAns3').text(QUESTIONS[questionNumber].answers.c);
    $('#radioAns4').text(QUESTIONS[questionNumber].answers.d);


  }

  // function changeQuestion(currentQuestion) {

  //   console.log('current question: ', currentQuestion);

  //   // $('#quizBox').empty();

  //   // $('#quizBox').append(questionsHtml[currentQuestion]);

  //   init();
  // }

  function checkResult(input, questionNumber) {
    if (input === QUESTIONS[questionNumber].correctAnswer) {
      return true;
    }
  }

  function doneWithTest(input) {
    if (currentQuestion === QUESTIONS.length) {
      $('#quizBox').empty();
    }
  }
  //cycle through to next question in questions
  //changes the values of the question title to current quetion
  //changes the values of the radio box inputs


  function readInput() {

    var radioValue = $("input[name='ansRadios']:checked").val();
    if (radioValue) {
      return (radioValue);
    }
 
  }


  function init() {

    $('#next').on('click', () => {

      if (checkResult(readInput(), currentQuestion)) {
        score +=1;
        console.log(score)
      }
      currentQuestion += 1;
      generateBoard(currentQuestion);
    })




  } //ends init()


  generateBoard(currentQuestion);
  init();









}())