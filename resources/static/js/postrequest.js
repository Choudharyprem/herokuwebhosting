$( document ).ready(function() {
	// SUBMIT FORM
    $("#userForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val(),
			mobileno:$("#mobileno").val()
    	}
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			// url : window.location + "api/users/save",
			url:"./form.json",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				$("#postResultDiv").html("" + 
					"Post Successfully! " +
					"--> " + user.firstname + " " + user.lastname + user.mobileno +"");
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();
 
    }
    
    function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
		$("#mobileno").val("");
    }
})