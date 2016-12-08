var questionCount = 0;
var score = 0;
var allQuestions = [{
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    choices: ["wrong", "right", "wrong", "wrong"],
    correctAnswerIndex: 1,
    selectedAnswerIndex: null,
}, {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    choices: ["wrong", "wrong", "right", "wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
}, {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    choices: ["wrong", "wrong", "right", "wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
}, {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    choices: ["right", "wrong", "wrong", "wrong"],
    correctAnswerIndex: 0,
    selectedAnswerIndex: null,
}, {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    choices: ["wrong", "wrong", "wrong", "right"],
    correctAnswerIndex: 3,
    selectedAnswerIndex: null,
}, {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    choices: ["wrong", "wrong", "right", "wrong"],
    correctAnswerIndex: 2,
    selectedAnswerIndex: null,
}, ];
$(document).ready(function() {

    //draw the first question and answer
    $('#questiontext').append("<p>" + allQuestions[questionCount].question + "</p>");

    for (i = 0; i < allQuestions[questionCount].choices.length; i++) {
        $('#' + i).append("<span>" + allQuestions[questionCount].choices[i] + "</span>");
    }

    //add the questions count in scorebox
    $('#scorebox p').remove();
    $('#scorebox').append("<p>Question " + (questionCount+1) + " of "+allQuestions.length+"</p>");

    //add the button listeners
    $('#submitButton').click(isChecked);
    $('#back').click(goBack);

});




console.log("JS file is linked up!");


function drawQuestion() {
    $('#questiontext p').remove();
    $('#questiontext').append("<p>" + allQuestions[questionCount].question + "</p>");

    //add the questions count in scorebox
    $('#scorebox p').remove();
    $('#scorebox').append("<p>Question " + (questionCount+1) + " of "+allQuestions.length+"</p>");

    for (i = 0; i < allQuestions[questionCount].choices.length; i++) {
        $('#' + i + " span").remove();
        $('#' + i).append("<span>" + allQuestions[questionCount].choices[i] + "</span>");
        }

}



function setAnswer() {
    console.log("submitting answer!");
    if ($('#answer' + allQuestions[questionCount].correctAnswerIndex)[0].checked) {  //if they selected the right answer, increase score
        score++;

    }

    $('#answer' + allQuestions[questionCount].correctAnswerIndex)[0].checked = true; //checks a radio button
    $('#answer' + allQuestions[questionCount].correctAnswerIndex)[0].checked = false; //then unchecks it so none are checked after the new question is drawn
    questionCount++;
    if (questionCount == allQuestions.length) {
        printAnswer();
    }
    drawQuestion();
}
    function printAnswer() {
        $('#answerbox').css("visibility", "hidden");
        $('#scorebox p').remove();
        $('#scorebox').append("Your score is " + score + " of " + allQuestions.length);

    }

    function isChecked() {
        for (i = 0; i < allQuestions[questionCount].choices.length; i++) {
            if ($('#answer' + i)[0].checked) {
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
        if (questionCount > 0) {
            questionCount--;

        }
        if (allQuestions[questionCount].selectedAnswerIndex == allQuestions[questionCount].correctAnswerIndex) {
            score--; //removes point from score if they had the right answer but hit the back button
        }
        $('#answer' + allQuestions[questionCount].selectedAnswerIndex)[0].checked = true; //sets the answer user chose.
        drawQuestion();
    }
