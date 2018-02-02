var questions = [];
var correctA = [];
var incorrectA = [];
var possibleA = []; //may need to change to null
var score = 0;
var count = 0;

var populateAnswers = function () {
	for(var i = 0; i<correctA.length;i++){
		possibleA.push(incorrectA[i]);
		possibleA[i].push(correctA[i]);
	}
	for(var i= 0;i<possibleA.length;i++){
		var change;
		for(var j = possibleA[i].length-1;j>=0;j--) {
			var randomNUm = Math.floor(Math.random() * (j + 1));
			change = possibleA[i][j];
			possibleA[i][j] = possibleA[i][randomNUm];
			possibleA[i][randomNUm] = change;
		}
	}
  console.log(correctA);
}

var populateCards = function() {
  $('.input').each(function(i ,input){
		var answer = $(input).val();
		if ($(input).is(':checked') && (correctA.indexOf(answer)+1)) {
			score += 1;
		}
	});
  if (count===questions.length) {
    $('.2').hide();
    $('#score').text(score);
    count = 0;
  }
	for (var i = count; i <questions.length; i+=questions.length) {
    $('.card-title').html("");
		$('.card-title').html(questions[i]);
	}
  for(var k=count;k<possibleA.length;k+=possibleA.length){
    for(var j=0;j<possibleA[k].length;j++){
      var radioBtn = $('<input type="radio" id="0'+[j]+'" name="question0" class="input"><label class="label'+[j]+'" for="question0">Toggle this custom radio</label>');
      $('#'+[j]).html('');
      $('#'+[j]).append(radioBtn);
      $('#0'+[j]).val(possibleA[k][j]);
      $('.label'+[j]).html(possibleA[k][j]);
    }
  }
  count++
}

$(document).ready(function() {
	$("#start").on("click", function(){
    $('#start').hide();
    populateCards();
  });
  $("#next").on("click", populateCards);
  $('#reset').on('click', function(){
    location.reload();
  })
	$.get('https://opentdb.com/api.php?amount=9&category=9&difficulty=easy&type=multiple').done(function(data){
		// console.log(data.results[0].question);
		data.results.forEach(function(obj){
			questions.push(obj.question);
			correctA.push(obj.correct_answer);
			incorrectA.push(obj.incorrect_answers);

		});
    populateAnswers();

	});
});
