$(function() {

  const QUESTIONS = [{
      question: 'Question 1',
      answers: {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      },
      correctAnswer: 'a'
    },
    {
      question: 'Question 2',
      answers: {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      },
      correctAnswer: 'b'
    },
    {
      question: 'Question 3',
      answers: {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      },
      correctAnswer: 'b'
    }
  ]


  var currentQuestion = 0;
  var questionsHtml = [];

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
              <li id="ans1">${QUESTIONS[i].answers.a}</li>
              <li id="ans2">${QUESTIONS[i].answers.b}</li>
              <li id="ans3">${QUESTIONS[i].answers.c}</li>
              <li id="ans4">${QUESTIONS[i].answers.d}</li>
            </ul>
          </div>
          <div class="col-sm-3 col-xs-12"></div>
        </div>
        <div class="row">
        <div class="col-xs-6"></div>
        <div class="col-xs-6">
          <button id="next">Next Question</button>
        </div>
      </div>
      `;
          questionsHtml.push(questionHtml);
     //     console.log(questionHtml);
    }
    
    // $('#quizBox').append(questionsHtml);

  }

  // displays title screen and a start button

  function changeQuestion(currentQuestion) {


    console.log('current question: ',currentQuestion);

    $('#quizBox').empty();

    $('#quizBox').append(questionsHtml[currentQuestion]);

    init();
  }
  
function checkResult(input, questionNumber){
  if (input=== QUESTIONS[questionNumber].correctAnswer) {
    return true;
  }
}

function doneWithTest(input){
  if (currentQuestion===QUESTIONS.length){
    alert('Done');
  }
}
  //cycle through to next question in questions
  //changes the values of the question title to current quetion
  //changes the values of the radio box inputs


  function readInput() {


    //reads the value of the clicked radio button
    //returns said value 
    // checks value against correct answer
    //add value to new array?
  }

  function init() {
    console.log('before done', currentQuestion);
    console.log(doneWithTest(currentQuestion));

    $('#button').on('click', generateBoard);

    $('#next').on('click', () => {

      currentQuestion += 1;

      changeQuestion(currentQuestion);
    })

    generateBoard();

  }

  init();








}())