// on document ready
$(document).ready(function(){
  // find all articles inside sectiosn with class collapse, and slide them closed
  $('.collapsed').find('article').slideToggle();

  // on click of h1
  $('h1').on('click', function(){
    // find the parent section, and all of the articles inside it and toggle them
    $(this).parents('section').find('article').slideToggle();
  })
  
})
