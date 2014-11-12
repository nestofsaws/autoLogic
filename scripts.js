$(document).ready(function(){
	openClosed();
	twoLink();
}); //end ready

function openClosed(){
	var now = new Date();
	var hour = now.getHours();
	var hour = now.getHours();
	var day = now.getDay();
		
	if (hour >= 8 && hour < 18 && day >= 1 && day <= 5){
		$('#openClose').html('<p class="centereddd">We are open until 6pm today. <br/> Give us a call or schedule an appointment online now!</p>');
		
	} else {
		$('#openClose').html('<p class="centereddd">Sorry, we are closed right now.<br/>Give us a call or schedule an appointment online now!</p>'); 
		
	}

}; //end openClosed

function twoLink (){
   $("#twoLink").click(function(){
   window.open("http://www.google.com",'_blank');
   window.open("http://www.p3php.in",'_blank');
});

};// end twoLink
