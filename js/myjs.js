/* This javascript file is for PuttyTemplate
 * Handle all the basic javascript functions required on PuttyTemplate
 * PuttyMobile Team @Claydata
 * Created on 18 April, 2013
 * 
 * 
*/

$(document).on("swiperight", function(event, ui) {
 	$("#left-panel").panel( "open");

});

$(document).on("swipeleft", function(event, ui) {
 	$("#right-panel").panel( "open");
});



/*INIT FOOTER*/

$(document).bind("pageshow",function(event){
		
		
		$("#" + event.target.id).find("[data-role=footer][footer-nav=enabled]").load("footer.html", function(){
               
				$("#" + event.target.id).find("[data-role=navbar]").navbar();
            });
			
});
/*END INIT FOOTER*/

/*$(document).bind('pageinit',function(){
	$(".swipable").on("swiperight",function(){
		alert("swipe left");
		$("#left-panel").panel( "open");
	});
	$(".swipable").on("swipeleft",function(){
		alert("swipe right");
		$("#right-panel").panel( "open");
	});
});*/



$(document).ready(function(e) {
/*Log in*/
	$("#login").bind("pageinit",function(){
		
		$("#login-submit").bind("click",function(){
			var username = $("#login").find("#login-username").val();
			var password = $("#login").find("#login-password").val();
			
			
			$.cookie('username', username);
			$.cookie('password', password);
			
			
			
			alert("submit ! \n"+$.cookie('username')+" \n"+$.cookie('password'));
			if(username=="leew" && password == "leew"){
				
				$.mobile.changePage($("#test"));
			}else{
				alert("username and pass is wrong !!");
				}
			
			
		});
		
	});


	/*QR SCANNER*/
	$("#puttytemplate-qr").bind("pageinit",function(){
		
		$("#qr-result").html("");
		
		/*INVOKER for the lastest version of phonegap*/
		/*$("#puttytemplate-scanqr").bind('click',function(e){
			
			window.plugins.barcodeScanner.scan(
				
				function(result) { 
						alert("We got a barcode\n"+"Result: " + result.text + "\n" + "Format: " + result.format); 
					}, 
				function(error) { 
					alert("Scanning failed: " + error); 
				});
			
		});*/
		
		
		
		$("#puttytemplate-scanqr").bind('click',function(e){
			window.plugins.barcodeScanner.scan(
				function(result) {
						if (result.cancelled){
							
							$("#qr-result").text("You just cancelled it :'(");
						}
						
						else{
							
							$("#qr-result").html("<h1><a href='"+result.text+"' data-rel='external' class='qr-result-link' >"+result.text+"</a>");
						}
				},
				function(error) {
					alert("scanning failed: " + error);
				}
			);
			
		
		
		
		
		});
	
		
	});

});