var questionCount = 0;
var score = 0;
var allQuestions = [
    {
    question: "Question 1?",
    choices: ["wrong","wrong","right","wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
    },
    {
    question: "Question 2?",
    choices: ["wrong","wrong","right","wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
    },{
    question: "Question 3?",
    choices: ["wrong","wrong","right","wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
    },{
    question: "Question 4?",
    choices: ["wrong","wrong","right","wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
    },{
    question: "Question 5?",
    choices: ["wrong","wrong","right","wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
    },{
    question: "Question 6?",
    choices: ["wrong","wrong","right","wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
    },
];
$(document).ready(function(){

    //draw the first question and answer
    $('#questiontext').append("<p>" + allQuestions[questionCount].question + "</p>");

    for(i=0; i < allQuestions[questionCount].choices.length; i++){
        $('#'+i).append("<span>"+allQuestions[questionCount].choices[i]+"</span>");
    }
    //add the button listener
    $('#submitButton').click(isChecked);
    $('#back').click(goBack);

});




console.log("JS file is linked up!");



function setAnswer (){
    console.log("submitting answer!");
    if ($('#answer'+allQuestions[questionCount].correctAnswerIndex)[0].checked){
        score ++;

    }

    $('#answer'+allQuestions[questionCount].correctAnswerIndex)[0].checked = true;
    $('#answer'+allQuestions[questionCount].correctAnswerIndex)[0].checked = false;
    questionCount++;
    if(questionCount == allQuestions.length) {
        printAnswer();
    }
    // DRY up later by calling draw question function
    $('#questiontext p').remove();
    $('#questiontext').append("<p>" + allQuestions[questionCount].question + "</p>");
    $('#scorebox p').remove();
    for(i=0; i < allQuestions[questionCount].choices.length; i++){
        $('#'+i+" span").remove();
        $('#'+i).append("<span>"+allQuestions[questionCount].choices[i]+"</span>");
    }

}

function printAnswer (){
    $('#answerbox').css("visibility", "hidden");
    $('#scorebox p').remove();
    $('#scorebox').append("Your score is " + score + " of " + allQuestions.length);

}
function isChecked(){
    for ( i=0; i<allQuestions[questionCount].choices.length; i++){
        if ($('#answer'+i)[0].checked) {
            allQuestions[questionCount].selectedAnswerIndex = i;
            console.log('setting answer');
             setAnswer();
             return;
        } else {
            console.log("no answer");
            $('#scorebox p').remove();
            $('#scorebox').append("<p>Please select an answer</p>");

        }

    }
}


function goBack() {
    console.log("going back");
    if(questionCount>0){
        questionCount--;

    }
    $('#answer'+allQuestions[questionCount].selectedAnswerIndex)[0].checked = true;
    //call "draw question function"
    $('#questiontext p').remove();
    $('#questiontext').append("<p>" + allQuestions[questionCount].question + "</p>");
    $('#scorebox p').remove();
    for(i=0; i < allQuestions[questionCount].choices.length; i++){
        $('#'+i+" span").remove();
        $('#'+i).append("<span>"+allQuestions[questionCount].choices[i]+"</span>");
    }
}
