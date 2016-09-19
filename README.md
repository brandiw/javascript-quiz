Build a quiz:

<strong>This is a group assignment</strong>
<em>Work with one OR two others.</em>
<em>Only one of you is required to submit, but include names of partners</em>

It is a simple quiz that has radio button choices, and it will show the quiz taker his or her score upon completion.

The quiz can show any number of questions and any number of choices.

Tally the user’s score and display the final score on the last page. The last page will only show the score.

Use an array of objects to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. The array of questions should look similar to this (Notice that only one question is in this example array; you will add many questions):

var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0}];

Dynamically (with document.getElementById or jQuery) remove the current question and add the next question, when the user clicks the “Next” button. The Next button will be the only button to navigate this version of the quiz.
