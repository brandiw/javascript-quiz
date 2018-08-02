var qarray = [
{question: "Who held Billboard's number-one song for March of 2018 with 'God's Plan'?",
 choices: ["Lil Wayne", "Kanye West", "Chris Brown", "Drake"],
  correctAnswerIndex:'d'},

{question: "Located in Seattle, what company opened the first completely cashier-less grocery store on January 22nd, 2018?",
 choices: ["Amazon", "Target", "Kmart", "Walmart"],
  correctAnswerIndex:'a'},

  {question: "Developed by Warhorse Studios, the story in this 2018 video game takes place during a war in Bohemia in 1403.",
 choices: ["Ashen", "Days Gone", "Far Cry 5", "Kingdom Come - Deliverance"],
  correctAnswerIndex:'d'},
  
{question: "What two countries tied for the most gold medals won at the 2018 Winter Olympics?",
 choices: ["Germany and Norway", "Germany and Canada", "Germany and Sweden", "Germany and United States"],
  correctAnswerIndex:'a'},

  {question: "What Imagine Dragon's song has the lyric - 'Just a young gun with a quick fuse. I was uptight, wanna let loose...?'",
 choices: ["Believer", "Demons", "Thunder", "Whatever it Takes"],
  correctAnswerIndex:'c'},

  {question: "This 2018 TV series features a serial killer who is murdering street children during the mid-1890s in New York City.",
 choices: ["The Alienist", "Black Lightning", "The Chi", "Collateral"],
  correctAnswerIndex:'a'},

  {question: "Who won the Record of the Year Grammy Award at the 60th Annual Grammy Awards?",
 choices: ["Redbone - Childish Gambino", "The Story of O.J. - Jay-Z", "Humble - Kendrick Lamar", "24K Magic - Bruno Mars"],
  correctAnswerIndex:'d'},

  {question: "Developed and published by Facepunch Studios as a clone of DayZ, what survival video game was released in February of 2018?",
 choices: ["ARK - Survival Evolved", "Rust", "How to Survive", "Seven Days to Die"],
  correctAnswerIndex:'b'},

  {question: "What English heavy metal band released their 18th studio album 'Firepower' on March 9th, 2018?",
 choices: ["Iron Maiden", "The Cult", "Avenger", "Judas Priest"],
  correctAnswerIndex:'d'},

  {question: "This 2018 crime comedy-drama TV series stars Christina Hendricks as Beth Boland, Retta as Ruby Hill and Mae Whitman as Annie Marks.",
 choices: ["Hard Sun", "Altered Carbon", " Good Girls", "Electric Dreams"],
  correctAnswerIndex:'c'},
  ]

// hide score button 
var index=0;
var score = 0;
var score = 0;

$(document).ready(function() {
	
	$("#start").click(function(){
		getQuestion();
	})

	$("#submit").click(function(){
		selected=$('input:checked').val();
		if (selected){
		console.log("start now!!!")
		highlightChoice();	
		} else {
			alert("Choose an answer!")
			console.log("must choose one")
		}
		setTimeout(function(){//link to answer button
				//alert("wrong");
				}, 3000);
				console.log(setTimeout);

	})

	$("#next").click(function(){

		removebackground();
		if (index===9){
			// show score
		} else{
			index++;
			selected=$('input:checked').val();
			console.log(selected);
			if (selected){
				$('.choice').prop('checked', false);
				console.log("next now!!!")
				getQuestion();
				//highlightChoice();
			}  else {
			
			console.log("must choose one")
			}
		}

	})

});


function getQuestion(){
	//Get question
	var newquestion = qarray[index];
	var q = newquestion.question;
	var c = newquestion.choices;
	answeIndex = newquestion.correctAnswerIndex;

	$("#question").text(q);
	$("#a").text(c[0]);
	$("#b").text(c[1]);
	$("#c").text(c[2]);
	$("#d").text(c[3]);
}


function removebackground(){
	var c=['a','b','c','d']
	c.forEach(function(i){
		$("#"+i).css("background-color","");
	})
	
}

function highlightChoice(){

	var selected=$('input:checked').val();
	//evaluate
	console.log(selected);
	console.log(answeIndex)
	if (selected===answeIndex){
		$("#"+answeIndex).css("background-color","#32cd32");	
		score++; //score will be tied into here
		console.log(score);
	} else {
		$("#"+answeIndex).css("background-color","#32cd32");
		$("#"+selected).css("background-color","#fb2b11");
	}

}
/* timer needs to be implemented into the code to listen to the question page
setTimeout(function(){
	alert("wrong");

}, 3000);
console.log(setTimeout);
//fix the timer
*/

/*
function updateScore(){
	if(answeIndex).true(score++);
}
/*
/*
function numKeys(qarray){
	var score = 0;
	for(var correctAnswerIndex);
	{
		score++;
	}
	console.log(score);
}
*/

/*
setTimeout(function(){
	alert("wrong");

}, 3000);
console.log(setTimeout);
//fix the timer
*/
/*

function startTimer(){
	var counter = 0++;
	$"#counter"

}
*/