// Add your javascript here

   $('#right-button').click(function() {
      event.preventDefault();
      $('#content').animate({
        scrollLeft: "+=200px"
      }, "slow");
   });
   
     $('#left-button').click(function() {
      event.preventDefault();
      $('#content').animate({
        scrollLeft: "-=200px"
      }, "slow");
   });