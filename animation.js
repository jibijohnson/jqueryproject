$(document).ready(function(){
	$('li.fields').filter(':nth-child(n+4)').addClass('hide');
 
	$('ul').on('click', 'li.title', function() {
		$(this)
			.next()
				.slideDown(200)
				.siblings('li.fields')
					.slideUp(200);
	});
});
  $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
  