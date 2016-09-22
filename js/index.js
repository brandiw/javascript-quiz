// Tanner & Bertram 
       
   var quizContent = [
   {"image":"/img/killer2.jpg","answer":"killer"},
   {"image":"/img/dad2.jpg","answer":"father"},
   {"image":"/img/killer1.jpg","answer":"killer"},
   {"image":"/img/dad1.jpg","answer":"father"},
   {"image":"/img/killer3.jpg","answer":"killer"},
   {"image":"/img/dad3.jpg","answer":"father"},
   ];


    var picIndex = -1;
    var timeAnimation = 700;

$(document).ready(function(){
   switchPicture()



$('.options').click(function(evt) {
// first find if right or wrong
// display right or wrong answer & next button
//keep score of correct vs. wrong answers

   console.log($(this).val());
   console.log(quizContent[picIndex].answer);

     if ($(this).val() === quizContent[picIndex].answer) {
     $('#img').empty().append("<p>Right</p>");
     } 

     else {
      $('#img').empty().append("<p>Wrong</p>");
     } 
     // if ($(this).val() {
     var nextButton = $('#next');
     var optionsButtons = $('.options');
     nextButton.show();
     optionsButtons.hide();
});
    
function switchPicture(){
      picIndex++
     console.log("clicked");
     var newImage = quizContent[picIndex].image;
     var quizLength = quizContent.length;
     var imgContainer = $('#img');
     var nextButton = $('#next');

     imgContainer.empty().append('<img src="' + newImage + '">');
     nextButton.hide();
     var optionsButtons = $('.options');
     optionsButtons.show();
}

$('#next').click(function(evt){
   switchPicture();
   console.log("clicked");

   });


});


  


// Need an if statement that matches clicked button with correct answer
// Need a counter for score in the if statement


// Need an event where after if statement happens image and options buttons are removed and answer and next button show up.
// Need a click action for when next button is clicked then new image and options buttons show up again

   


      
  

      


