class Question {
    constructor(ask, choices, answer) {
        this.ask = ask;
        this.choices = choices;
        this.answer = answer;
    }
}
$(document).ready(function() {

    var score = 0;
    var allQuestions = [];
    var currentQuestion = 0;
    allQuestions.push(new Question("question 1 here", ["Thailand", "Kenya", "South Africa", "Khazikstan"], 0));

    allQuestions.push(new Question("question 2 here", ["Thailand", "Kenya", "South Africa", "Khazikstan"], 2));

    allQuestions.push(new Question("question 3 here", ["Thailand", "Kenya", "South Africa", "Khazikstan"], 1));

    $("#startQuiz").click(function() {
        $("#toggleDiv").toggle();
        $('#askQuestions').text(allQuestions[currentQuestion].ask);
    });

    function drawQuestions() {

    }




    console.log(allQuestions);

    // use next for the question index
    // on toggle i want to display allquestions[0] and filter through on next button


});

//
// $("#next").on("click", function() {
//     for (i = 0; i < allQuestions.length; i++) {
//         if ($("input:checked").val() == allQuestions[i].answer) {
//             score++;
//             this.textContent = show.nextQuestion();
//             // allQuestions[i]++;
//         } else {
//             choiceArea.remove();
//             questionArea.text(score);
//         }
//     }
// });
//
// function nextQuestion() {
//     for (i = 0; i < allQuestions.length; i++);
//     var question = allQuestions[i].question; //store new question
//     //get how many choice
//
//     questionArea.textContent(""); //Delete current question if any
//     questionArea.textContent(question); //add new question
//
//     choiceArea.find(".choices").remove();
//     for (var i = 0; i < allQuestions[i].choices.length; i++) { //add choices
//         var choice = allQuestions[i].choices[i];
//         $choiceArea.append("<li class='choice'><input type='radio' name='choices' value='" + i + "'>" + choice + "</input></li>");
//     }
// }
//
//
//
//
// // $("#q1Submit").click(function() {
// //     event.preventDefault();
// //     var answer = $('input[name=\'q1\']:checked').val();
// //     if (answer == 1) {
// //         score++;
// //         console.log(score);
// //         $("#score").text(score);
// //     }
// });
// $("#q2Submit").click(function() {
//     event.preventDefault();
//     var answer = $('input[name=\'q2\']:checked').val();
//     if (answer == 1) {
//         score++;
//         console.log(score);
//         $("#score").text(score);
//     }
// });
// $("#q3Submit").click(function() {
//     event.preventDefault();
//     var answer = $('input[name=\'q3\']:checked').val();
//     if (answer == 1) {
//         score++;
//         console.log(score);
//         $("#score").text(score);
//     }
// });
// function hideDiv() {
// //     var hide = $("#form1");
// //     hide.addClass("hide");
// //     $("q1Submit").click(function() {
// //         $("form").hide();
// //     });
// // }
