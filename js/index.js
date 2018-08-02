var answers = [];
var questions = [
  {color: '#32cd32', choices: ['Spring Green', 'Pale Green', 'Lime Green', 'Chartreuse'], answer: 2},
  {color: '#ff6347', choices: ['Tomato', 'Light Salmon', 'Coral', 'Dark Salmon'], answer: 0},
  {color: '#ffefd5', choices: ['Antique White', 'Peach Puff', 'Wheat', 'Papaya Whip'], answer: 3},
  {color: '#6495ed', choices: ['Aqua', 'Cornflower Blue', 'Steel Blue', 'Royal Blue'], answer: 1},
  {color: '#d2691e', choices: ['Indian Red', 'Pumpkin', 'Sienna', 'Chocolate'], answer: 3},
  {color: '#6a5acd', choices: ['Blue Violet', 'Medium Blue', 'Slate Blue', 'Thistle'], answer: 2},
  {color: '#daa520', choices: ['Goldenrod', 'Peru', 'Maize', 'Gold'], answer: 0}
];
var questionIndex = 0;

$(document).ready(function() {
  $('#startQuiz').on('click', function() {
    $(this).hide();
    $('#instructions').hide();
    $('#mainForm').show();
    $('#back').hide();2
    updateQuestion();
    $('.totalNumberQuestions').text(questions.length);
    updateQuestionNumber();
  });

  $('#back').on('click', function(){
    if(questionIndex !== 0){
    questionIndex--;
    updateQuestionNumber();
    updateQuestion();
    // Get the last value in the answers array.
    var lastAnswer = answers.pop();
    $('#choice' + lastAnswer).prop('checked', true);
    // Check the radio button of the user's answer.
    }
    if(questionIndex === 0) {
      $('#back').hide();
    }
  });

  $('#next').on('click', function() {
    var response = $('input[name=choice]:checked').val();
    console.log('response', response);
    if(!response){
      alert('You need to make a selection.');
    } else {
      $('#back').show();
      answers.push(response);
      $('input[name=choice]').prop('checked', false);
      if(questionIndex < questions.length - 1){
        questionIndex++;
        updateQuestionNumber();
        updateQuestion();
      } else {
        getScore();
      }
    }
  });
});

function updateQuestion(){
  console.log(questions[questionIndex].answer);
  $('#color').css('background-color', questions[questionIndex].color);
  $('body').css('background-color', questions[questionIndex].color);
  $('#label0').text(questions[questionIndex].choices[0]);
  $('#label1').text(questions[questionIndex].choices[1]);
  $('#label2').text(questions[questionIndex].choices[2]);
  $('#label3').text(questions[questionIndex].choices[3]);


  console.log('update question');
}

function updateQuestionNumber() {
  $('#currentQuestionNumber').text(questionIndex + 1);
}

function getScore() {
  $('#mainForm').hide();
  console.log('quiz is complete');
  var score = 0;
  for(var i = 0; i < questions.length; i++) {
    console.log('user answer:', answers[i], 'answer', questions[i].answer);
    if(answers[i] == questions[i].answer) {
      score++;
    }
  }
  $("body").toggleClass("endScreen");
  $('#score').show();
  $('#rightAnswer').text(score);
  $('.totalNumberQuestions')
  console.log('score', score);
}
