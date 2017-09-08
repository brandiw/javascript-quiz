var pageCount=0;
var score=0;
var answerArray=document.querySelectorAll('.answer');
var currentQuestion=document.getElementById('question');
var nextBtn= document.getElementById('next');
var finalPage=document.getElementById('final');


var quizQuestions = [{
	question: "When do Carl Weathers and Tobias first meet?",
	choices: ["In an airport shuttle", "In a cooking class", "In a Burger King", "At a spa"],
	correctAnswerIndex:[0]
},
{	question: "What is the name of the movie Maeby and George Michael see together at the movies?",
	choices: ["Kissin' Cousins", "Les Cousins Dangereux", "Marry Me!", "Die Hard"],
	correctAnswerIndex:[1]
},
{
	question: "What is the name of Franklin and GOB's album?",
	choices: ["Franklin Comes Alive", "Franklin and GOB", "It's Not Easy Being White", "It's Not Easy Being Brown"],
	correctAnswerIndex: [0]
},
{
	question: "George Michael enlisted the help of his uncle GOB for his class election. In the end, what percent of the votes did he get?",
	choices: ["1%", "5%", "21%", "49%"],
	correctAnswerIndex: [0]
},
{
	question: "Which of the following is NOT a subject that Buster has studied?",
	choices: ["Native American Tribal Ceremonies", "Custome Design", "Archaelogy", "Cartology"],
	correctAnswerIndex:[1]
}];
	currentQuestion.textContent=quizQuestions[pageCount].question;
	console.log(pageCount);

	for (var i = 0; i < quizQuestions[pageCount].choices.length; i++) {
		answerArray[i].textContent=quizQuestions[pageCount].choices[i];
	}




nextBtn.addEventListener('click', function(){
	if (document.getElementById('0').checked === false && document.getElementById('1').checked === false && document.getElementById('2').checked === false && document.getElementById('3').checked === false) {
	alert("You didn't pick an answer, dumb dumb.");
	}else {
	if (pageCount===0) {
		if (document.getElementById("0").checked){	
		score++ 
		console.log(score);
		}
	}else if(pageCount===1) {
		if (document.getElementById("1").checked){	
		score++ 
		}
	}else if(pageCount===2) {
		if (document.getElementById("0").checked){	
		score++ 
		}
	}else if(pageCount===3) {
		if (document.getElementById("0").checked){	
		score++ 
		}
	}else if(pageCount===4) {
		if (document.getElementById("1").checked){	
		score++ 
		}
	}
	$('input').attr('checked',false);
	pageCount++
	if (pageCount<5) {
	currentQuestion.textContent=quizQuestions[pageCount].question;
	console.log(pageCount);

		for (var i = 0; i < quizQuestions[pageCount].choices.length; i++) {
		answerArray[i].textContent=quizQuestions[pageCount].choices[i];
	}
	}else{
		switch(score){
			case 5:
				finalPage.textContent="Wooo you got 100%";
				break;
			case 4:
				finalPage.textContent="Yay you got 80%";
				break;
			case 3:
				finalPage.textContent="Meh you got 60%";
				break;
			case 2:
				finalPage.textContent="Poo you got 40%";
				break;
			case 1:
				finalPage.textContent="You made a huge mistake 20%";
				break;
			default:
				finalPage.textContent="You blue yourself";
				break;
		}
		document.querySelector(".container").style.display="none";
		document.querySelector(".hidden").classList.remove("hidden");


}
}




})



	



// for (var i=0; i<quizQuestions.length; i++) {
	// currentQuestion.textContent=quizQuestions[i].question;



//farge.textContent=quizQuestions[0].choices[1];

//console.log(farge.textContent);