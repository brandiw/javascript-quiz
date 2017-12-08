$(function() {

  const questions = [
    {
      question: 'Question 1',
      answers: [{
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      }],
      correctAnswer: 'a'
    },
    {
      question: 'Question 2',
      answers: [{
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      }],
      correctAnswer: 'b'
    }
  ]


  var currentQuestion =0 ;

function generateBoard(){
}

// displays title screen and a start button

function changeQuestion(questions, currentQuestion){}

//changes the values of the question title to current quetion
//changes the values of the radio box inputs


function readInput(){

  //reads the value of the clicked radio button
}

function init(){

  $('#next').on('click', ()=>{

    currentQuestion +=1;


    changeQuestion(questions, currentQuestion);

  })
  
  generateBoard(questions);

}

init();







}())