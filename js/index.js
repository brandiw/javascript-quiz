/*
* Your names
    -Justin Rashall-
    -Gwendllyn Jones-
*/

var score, currentIndex;

currentIndex = 0;
score = 0;

console.log("JS file is linked up!");

var allQuestions = [{
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswerIndex:0
},
{
    question: "What is my name?",
    choices: ["Dan", "Justin", "Robert", "Tony"],
    correctAnswerIndex:1
}];

// Get questions from object array onto the quiz div
// Get choices from object array onto the quiz with radio buttons as selections

// allQuestions[0].choices[]

function initQuiz() {
    if(currentIndex < allQuestions.length) {
        console.log("Questions at current index", allQuestions[currentIndex]);
        var questionElement = document.getElementById("quiz-question");
        questionElement.innerHTML = allQuestions[currentIndex].question;

        var answers = document.createElement("form");

        for (var i = 0; i < allQuestions[currentIndex].choices.length; i++) {
            var choice = document.createElement('input');
            var label = document.createElement('label');

            choice.type = "radio";
            choice.name = "name";
            choice.value = i;
            label.for = i;
            label.innerHTML = allQuestions[currentIndex].choices[i];
            label.appendChild(choice);
            answers.appendChild(label);
            answers.appendChild(document.createElement("br"));
        }

        document.getElementById('quiz-answers').appendChild(answers);
    } else {
        console.log("Game is done. Score is ", score);
    }
    currentIndex++;
};

initQuiz();