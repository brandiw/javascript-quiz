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


  var currentQuestion = 0;
  var questionsHtml = [];



  // takes an object containg questions and generate an array containing the 
  //HTML for each question

  function generateBoard(questionNumber) {

    $('#question-title').text(QUESTIONS[questionNumber].question);
    $('#radioAns1').text(QUESTIONS[questionNumber].answers.a);
    $('#radioAns2').text(QUESTIONS[questionNumber].answers.b);
    $('#radioAns3').text(QUESTIONS[questionNumber].answers.c);
    $('#radioAns4').text(QUESTIONS[questionNumber].answers.d);
    

  }

  // displays title screen and a start button
  //takes in the current question number; 
  //empties the div containg the previous question
  //appends the newly generated question from a questionsHtml array 
  function changeQuestion(currentQuestion) {

    console.log('current question: ', currentQuestion);

    // $('#quizBox').empty();

    // $('#quizBox').append(questionsHtml[currentQuestion]);

    init();
  }

  function checkResult(input, questionNumber) {
    if (input === QUESTIONS[questionNumber].correctAnswer) {
      return true;
    }
  }

  function doneWithTest(input) {
    if (currentQuestion === QUESTIONS.length) {
      alert('Done');
    }
  }
  //cycle through to next question in questions
  //changes the values of the question title to current quetion
  //changes the values of the radio box inputs


  function readInput() {


    // $("input[type='radio']").click(function(event) {

    var radioValue = $("input[name='ansRadios']:checked").val();
    if (radioValue) {
      console.log(radioValue);
    }
    // });

    //reads the value of the clicked radio button
    //returns said value 
    // checks value against correct answer
    //add value to new array?
  }

  // runs when page loaded
  function init() {
    // console.log('before done', currentQuestion);
    // console.log(doneWithTest(currentQuestion));

    //generate questions array

    // generates the board from start screen
    $('#button').on('click', generateBoard);

    //increments the questions by 1 and changes call change questions
    $('#next').on('click', () => {

      currentQuestion += 1;

      readInput();
      changeQuestion(currentQuestion);
    })




  } //ends init()


  generateBoard(currentQuestion);
  init();









}())