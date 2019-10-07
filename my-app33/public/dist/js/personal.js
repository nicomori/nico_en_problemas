/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Full height function
	4.Jetson function
	5.Chat App function
	6.Resize function
 ** ***************************************/
 
/*Owl Init*/


$('.dropdown-menu a').click(function(){
	$('#selected').text($(this).text());
});

if( $('#exampleModal2').length > 0 ){
	$('#exampleModal2').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var example2 = document.getElementById("pepe").textContent;
		// var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		
		var replace = example2.replace(/\t/g,'');
		modal.find('.modal-body input').val(replace)
	});
}

/*Modal Init*/
$( document ).ready(function() {
	"use strict";
	
	if( $('#exampleModal').length > 0 ){
		$('#exampleModal').on('show.bs.modal', function (event) {
			var button = $(event.relatedTarget) // Button that triggered the modal
			var recipient = document.getElementById("message_received").textContent;
		  //var recipient = button.data('whatever') // Extract info from data-* attributes
		  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		  var modal = $(this)
			//modal.find('.modal-title').text('New message to ' + recipient)
			var replace = recipient.replace(/\t/g,'');
		  modal.find('.modal-body input').val(replace)
		});
	}

	

});