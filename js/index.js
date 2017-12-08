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
    }
  ]


  var currentQuestion = 0;

  function generateBoard() {

    var questionsHtml = []
    var questionHtml = null;
    for (let i = 0; i < QUESTIONS.length; i += 1) {

      questionHtml = `<div class="col-xs-12">
          <h1>${QUESTIONS[i].question}</h1>
        </div>        
        <div class="col-xs-12">
            <ul>
              <li id="ans1">${QUESTIONS[i].answers.a}</li>
              <li id="ans2">${QUESTIONS[i].answers.b}</li>
              <li id="ans3">${QUESTIONS[i].answers.c}</li>
              <li id="ans4">${QUESTIONS[i].answers.d}</li>
            </ul>
          </div>`;
          questionsHtml.push(questionHtml);
          console.log(questionHtml);
    }
    
     $('#quizBox').append(questionsHtml);

  }

  // displays title screen and a start button

  function changeQuestion(questions, currentQuestion) {}

  //changes the values of the question title to current quetion
  //changes the values of the radio box inputs


  function readInput() {

    //reads the value of the clicked radio button
    //returns said value
  }

  function init() {
    $('#button').on('click', generateBoard);

    $('#next').on('click', () => {
      currentQuestion += 1;
      changeQuestion(questions, currentQuestion);
    })

    generateBoard(QUESTIONS);

  }

  init();







}())