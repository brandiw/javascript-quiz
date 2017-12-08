$(function() {

  const QUESTIONS = [{
      question: 'The llama is a domesticated camelid that is native to which continent?',
      answers: {
        a: 'South America',
        b: 'North America',
        c: 'Europe',
        d: 'Antarctica'
      },
      correctAnswer: 'a'
    },
    {
      question: "Which snake, who's untreated bite is almost 100 percent fatal, is the world's fastest snake on land?",
      answers: {
        a: 'Black Adder',
        b: 'Black Mamba',
        c: 'Black Panther',
        d: 'Black Yeezies'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What is the common term for bovine spongiform encephalopathy, a disease that causes degeneration of the brain and spinal cord in cattle?',
      answers: {
        a: 'Moo Moo Brain',
        b: 'Mad Cow Disease',
        c: 'Mad Dog 22',
        d: 'Gingivitis'
      },
      correctAnswer: 'b'
    },
    {
      question: "A panda's daily diet consists almost entirely of what plant?",
      answers: {
        a: 'Jade Blossom',
        b: 'Buddhist Pine',
        c: 'Bamboo',
        d: 'Emerald Potatoes'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What was the name of the gorilla that was shot and killed at the Cincinnati zoo in 2016 after a three-year old boy fell into the enclosure?',
      answers: {
        a: 'Harambe',
        b: 'Shenaynay',
        c: 'Mojimbo',
        d: 'Action Jackson'
      },
      correctAnswer: 'a'
    }
  ]

  var score = 0;
  var currentQuestion = 0;
  var answersArr = [];

  function generateBoard(questionNumber) {
    if (doneWithTest()) { alert(); }

    $('#question-title').text(QUESTIONS[questionNumber].question);
    $('#radioAns1').text(QUESTIONS[questionNumber].answers.a);
    $('#radioAns2').text(QUESTIONS[questionNumber].answers.b);
    $('#radioAns3').text(QUESTIONS[questionNumber].answers.c);
    $('#radioAns4').text(QUESTIONS[questionNumber].answers.d);


  }

  function checkResult(input, questionNumber) {
    if (input == QUESTIONS[questionNumber].correctAnswer) {
      return true;
    }
  }

  function doneWithTest(input) {
    if (currentQuestion === QUESTIONS.length - 1) {

      $('#quizBox').empty().append(`
        <div class="row">
      <div class="col-sm-3 col-xs-12"></div>
      <div class="col-sm-6 col-xs-12">
         <h2 id="">Your score is ${score}</h2>
      </div>
        `);




    }
  }

  function readInput() {

    var radioValue = $("input[name='ansRadios']:checked").val();
    return (radioValue);

  }


  function init() {

    $('#next').on('click', () => {

      var userInput = readInput();
      console.log('user input read', userInput);
      if (userInput) {
        if (checkResult(userInput, currentQuestion)) {
          score += 1;
          console.log(score)
        }
        currentQuestion += 1;

        generateBoard(currentQuestion);


      } else {}


    })




  } //ends init()


  generateBoard(currentQuestion);
  init();









}())