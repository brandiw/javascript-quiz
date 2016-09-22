// Tanner & Bertram 

$(document).ready(function() {

var quizContent = [
{"image":"/img/dad1.jpg","answer":"killer"},
{"image":"/img/dad2.jpg","answer":"dad"},
{"image":"/img/killer2.jpg","answer":"killer"},
];


var imageContainer = $('#img');
var quizLength = quizContent.length;



$('.options').click(function(evt){
	console.log(evt)
	console.log("clicked")

	for (i = 0 ; i <= quizLength ; i++ ){
      var newImage = quizContent[i`].image;
      imageContainer.append("<img src='" + newImage + "'>")
   }
});





});

    


   //  $(".quiz div").each(function(e) {
   //     if (e != 0)
   //         $(this).hide();
   // });

   // $("#next").click(function(){
   //     if ($(".quiz div:visible").next().length != 0)
   //         $(".quiz div:visible").next().show().prev().hide();
   //     else {
   //         $(".quiz div:visible").hide();
   //         $(".quiz div:first").show();
   //     }
   //     return false;
   // });

   // $("#prev").click(function(){
   //     if ($(".quiz div:visible").prev().length != 0)
   //         $(".quiz div:visible").prev().show().next().hide();
   //     else {
   //         $(".quiz div:visible").hide();
   //         $(".quiz div:last").show();
   //     }
   //     return false;
   // });




