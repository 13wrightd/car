$(document).ready(function(){
	
	$("html").mousedown(function() {
   		$("#messages").prepend("<li>clicked down</li>")
	});
	$("html").mouseup(function() {
   		$("#messages").prepend("<li>clicked up</li>")
	});

	   
	
})