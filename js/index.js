$(function() {

  const QUESTIONS = [{
      question: 'Question 1',
      answers: {
        1: 'This is the right answer',
        2: 'This is a wrong answer',
        3: 'This is a wrong answer',
        4: 'This is a wrong answer'
      },
      correctAnswer: '1'
    },
    {
      question: 'Question 2',
      answers: {
        1: 'This is the right answer',
        2: 'This is a wrong answer',
        3: 'This is a wrong answer',
        4: 'This is a wrong answer'
      },
      correctAnswer: '2'
    },
    {
      question: 'Question 3',
      answers: {
        1: 'This is the right answer',
        2: 'This is a wrong answer',
        3: 'This is a wrong answer',
        4: 'This is a wrong answer'
      },
      correctAnswer: '3'
    }
  ]


  var currentQuestion = 0;
  var questionsHtml = [];



  // takes an object containg questions and generate an array containing the 
  //HTML for each question

  function generateBoard() {


    var questionHtml = null;
    for (let i = 0; i < QUESTIONS.length; i += 1) {

      questionHtml =

        `
      <div class="row">
        <div class="col-sm-3 col-xs-12"></div>
        <div class="col-sm-6 col-xs-12">
          <h1>${QUESTIONS[i].question}</h1>
        </div>
        <div class="col-sm-3 col-xs-12"></div>
      </div>
      <div class="row">
        <div class="col-sm-3 col-xs-12"></div>
        <div class="col-sm-6 col-xs-12">
            <ul>
            <div class="radio"><label><input type="radio" name="ansRadios" value="1" id="radioAns1">${QUESTIONS[i].answers.a}</label></div>
            <div class="radio"><label><input type="radio" name="ansRadios" value="2" id="radioAns2">${QUESTIONS[i].answers.b}</label></div>
            <div class="radio"><label><input type="radio" name="ansRadios" value="3" id="radioAns3">${QUESTIONS[i].answers.c}</label></div>
            <div class="radio"><label><input type="radio" name="ansRadios" value="4" id="radioAns4">${QUESTIONS[i].answers.d}</label></div>
            </ul>
          </div>
          <div class="col-sm-3 col-xs-12"></div>
        </div>
        <div class="row buttons">
        <div class="col-xs-6"></div>
        <div class="col-xs-6">
          <button id="next" class="btn btn-primary">Next Question</button>
        </div>
      </div>
      `;
      questionsHtml.push(questionHtml);
      //     console.log(questionHtml);
    }

    // $('#quizBox').append(questionsHtml);

  }

  // displays title screen and a start button
  //takes in the current question number; 
  //empties the div containg the previous question
  //appends the newly generated question from a questionsHtml array 
  function changeQuestion(currentQuestion) {

    console.log('current question: ', currentQuestion);

    $('#quizBox').empty();

    $('#quizBox').append(questionsHtml[currentQuestion]);

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
    console.log('before done', currentQuestion);
    console.log(doneWithTest(currentQuestion));

    // generates the board from start screen
    $('#button').on('click', generateBoard);

    //increments the questions by 1 and changes call change questions
    $('#next').on('click', () => {

      currentQuestion += 1;

      readInput()
      changeQuestion(currentQuestion);
    })

    generateBoard();


   


  } //ends init()















  init();








}())
