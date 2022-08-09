$( document ).ready(function() {
	
	// GET REQUEST
	$("#allUsers").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			// url : "/api/users/all",
			url:"./form.json",
			success: function(result){
				$('#getResultDiv ul').empty();
				$.each(result, function(i, user){
					$('#getResultDiv .list-group').append(user.firstname + " " + user.lastname + user.mobileno +"<br>")
				});
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})