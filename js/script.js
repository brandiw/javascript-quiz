// /*
// * Tobias Murphy
// Donnie Ellstrom
// Chris Whitaker
// */
console.log("JS file is linked up!");

$(document).ready(function(){

  //Variable for tracking player score
  var playerScore = 0;

  //Variable for quiz questions
  var quizQuestions = [
    "1. 'You will never find a more wretched hive of scum and villainy.' But where was Obi-Wan Kenobi referring to in Star Wars IV: A New Hope?",
    "2. How is George Lucas said to have given R2-D2 his name?",
    "3. Exactly what 'made the Kessel Run in less than 12 parsecs'?",
    "4. From which planet is Han Solo?",
    "5. What is the name of Lukeʼs friend from Tatooine who is killed during the attack on the Death Star?",
    "6. And what was Luke Skywalker's call sign in the same assault?",
    "7. In The Empire Strikes Back, which creatures attach themselves to the Millennium Falcon?"
    ];

    //Variable for possible answers and truth state
  var answers = [[{"Mos Eisley" : "Correct", "Bespin" : "Incorrect", "Coruscant" : "Incorrect"}],
                [{"It was from his postcode" : "Incorrect", "It was part of the number plate from his grandpa's car" : "Incorrect", "From a film editing abbreviation - Reel 2, Dialogue 2" : "Correct"}],
                [{"The Death Star" : "Incorrect", "Luke's X-Wing" : "Incorrect", "The Millennium Falcon" : "Correct"}],
                [{"Coreilla" : "Correct", "Tatooine" : "Incorrect", "Endor" : "Incorrect"}],
                [{"Huff Darklighter" : "Incorrect", "Biggs Darklighter": "Correct", "Wedge Darklighter": "Incorrect"}],
                [{"Red 3" : "Incorrect", "Walker 5" : "Incorrect", "Red 5" : "Correct"}],
                [{"Tuskan Raiders" : "Incorrect", "Mynocks" : "Correct", "Banthas" : "Incorrect"}]];


  var questionPush = $("#questionBox");
  //Set initial questionBox
  questionPush.text(quizQuestions[0]);

  //Set initial answer options
  $("#ans1").text(Object.keys(answers[0][0])[0]);
  $("#ans2").text(Object.keys(answers[0][0])[1]);
  $("#ans3").text(Object.keys(answers[0][0])[2]);

  //Set initial answer conditions
  $("#r1").val(Object.values(answers[0][0])[0]);
  $("#r2").val(Object.values(answers[0][0])[1]);
  $("#r3").val(Object.values(answers[0][0])[2]);

  //Update question field and answers on submit click
  $("#submit").on("click", function() {
    event.preventDefault();
    correctAnswer();
    nextQuestion();
    nextAnswers();


  });

  var i = 1;
  function nextQuestion(){
    questionPush.text(quizQuestions[i]);
    i++;
  }

  var x = 1;
  function nextAnswers() {
    $("#ans1").text(Object.keys(answers[x][0])[0]);
    $("#ans2").text(Object.keys(answers[x][0])[1]);
    $("#ans3").text(Object.keys(answers[x][0])[2]);
    $("#r1").val(Object.values(answers[x][0])[0]);
    $("#r2").val(Object.values(answers[x][0])[1]);
    $("#r3").val(Object.values(answers[x][0])[2]);
    if (x<7){
      x++;
  }};

  function correctAnswer() {
    if ($('input[type=radio]:checked').val() === "Correct") {
      playerScore ++;
      console.log("Correct!", playerScore);
      $("input:checked").removeAttr("checked");
    }
    else {
      console.log("WRONG!");
      $("input:checked").removeAttr("checked");
    }
  }


});
