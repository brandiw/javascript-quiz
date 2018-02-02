var questions = [];
var correctA = [];
var incorrectA = [];
var possibleA = []; //may need to change to null
var score = 0;
var count = 0

var populateCards = function() {
  if (count===questions.length) {
    $('.container').hide();
    $('#score').text(score);
    count = 0;
  }
  console.log(count);
	for (var i = count; i <questions.length; i+=questions.length) {
    $('.card-title').html("");
		$('.card-title').html(questions[i]);
	}
  count++
  console.log(questions);
}
var populateAnswers = function () {
	for(var i = 0; i<correctA.length;i++){
		possibleA.push(incorrectA[i]);
		possibleA[i].push(correctA[i]);
	}
	// console.log(possibleA[1]);
	//shuffle
	for(var i= 0;i<possibleA.length;i++){
		var change;
		for(var j = possibleA[i].length-1;j>=0;j--) {
			var randomNUm = Math.floor(Math.random() * (j + 1));
			change = possibleA[i][j];
			possibleA[i][j] = possibleA[i][randomNUm];
			possibleA[i][randomNUm] = change;
		}
	}
	for(var i=0;i<possibleA.length;i++){
		for(var j=0;j<possibleA[i].length;j++){
			$("#"+[i]+[j]).next().html(possibleA[i][j]);
			$("#"+[i]+[j]).val(possibleA[i][j]);
		}
	}
}

$(document).ready(function() {

	$("button").on("click", populateCards);
  $('#questionbutton').on('click', populateCards);

	$.get('https://opentdb.com/api.php?amount=9&category=9&difficulty=easy&type=multiple').done(function(data){
		// console.log(data.results[0].question);
		data.results.forEach(function(obj){
			questions.push(obj.question);
			correctA.push(obj.correct_answer);
			incorrectA.push(obj.incorrect_answers);

		});


	});
});
