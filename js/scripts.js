$(document).ready(function(){
   $('section h1').click(function(){
       $(this).parents('section').find('> div').slideToggle();
   });
});
