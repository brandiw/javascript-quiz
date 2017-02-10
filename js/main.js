// JavaScript Quiz - Jack, Joe, & Kyle

$(document).ready(function(){
	$("#quizQuestion").hide();
	var score = 0;
	var curQuestion = 0;
	var allQuestions = [{
						question: "What is the capital of Idaho?",
						choices: ["Ketchum", "Boise", "Haley", "Twin Falls"],
						correctAnswerIndex: 1},

						{question: "What is the capital of California?",
						choices: ["Sacramento", "San Francisco", "Rancho Cucamonga", "Irvine"],
						correctAnswerIndex: 0},

						{question: "What is the capital of Oregon?",
						choices: ["Portland", "Redmond", "Vancouver", "Salem"],
						correctAnswerIndex: 3},

						{question: "What is the capital of Montana?",
						choices: ["Missoula", "Bozeman", "Helena", "Billings" ],
						correctAnswerIndex: 2},

						{question: "What is the capital of Arizona?",
						choices: ["Tempe","Phoenix","Tuscon","Scottsdale"],
						correctAnswerIndex: 1},

						{question: "just here to have final state question displayed",
						choices: ["one", "two", "three", "four"],
						correctAnswerIndex: 0}
						];

	function checkAnswer(){
		var checked = $('input[name=choice]:checked').val();
		var answer = allQuestions[curQuestion - 1].correctAnswerIndex;
		if (checked == answer){
			score++
		}
	}

	$("#startButton").click(function(){
		$("#quizStart").hide();
		$("#quizQuestion").fadeIn("slow");
		$('h3').text(allQuestions[curQuestion].question);
		$("#a0").text(allQuestions[curQuestion].choices[0]);
	 	$("#a1").text(allQuestions[curQuestion].choices[1]);
	 	$("#a2").text(allQuestions[curQuestion].choices[2]);
	 	$("#a3").text(allQuestions[curQuestion].choices[3]);
	 	$("#displayScore").text('Your Score: '+score);
	})




	$("#next").click(function(){
		curQuestion++
		checkAnswer();
		$('h3').text(allQuestions[curQuestion].question);
		$("#a0").text(allQuestions[curQuestion].choices[0]);
	 	$("#a1").text(allQuestions[curQuestion].choices[1]);
	 	$("#a2").text(allQuestions[curQuestion].choices[2]);
	 	$("#a3").text(allQuestions[curQuestion].choices[3]);
		$("#displayScore").text('Your Score: '+score);
	 	if (curQuestion >= 5) {	
	 		$("#quizQuestion").hide()
	 		$("#displayScore").text('Yay! You Scored a ' + score);
	 		$("#displayScore").append("<br><button class = 'btn btn-success'>PLAY AGAIN</button>").click(function(){
	 			location.reload();
	 		});
	 	}
	 	$('input').prop("checked", false);
	})

});

	