$(document).ready(function(){
   $('section h1').click(function(){
       $(this).parents('section').toggleClass('collapsed');
   });
});
