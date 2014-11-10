$(document).ready(function(){
	openClosed();
}); //end ready

function openClosed(){
	var now = new Date();

	var hour = now.getHours();
	var day = now.getDay();
	
	
	
	if (day >= 1 && day <= 5 && hour >= 8 && hour < 18){
		//alert('open');
		$('#openClose').html('<p class="centereddd">We are open until 6pm today. Give us a call or schedule an appointment online now!</p>');
		
	} else {
		//alert('not open');
		$('#openClose').html('<p class="centereddd">Sorry, we are closed right now. We will reopen Monday at 8am. Give us a call then or schedule an appointment online now!</p>');
		
	}
	//$(#openClosed)

};
