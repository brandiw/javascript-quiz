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
      console.log('quiz finished')
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