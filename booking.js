function validateDestination(){ //test input for 2-25 allowed characters
	var city = document.getElementById("destination").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,25}$/;
	
	if(re1.test(city)){ //if input is valid, update page to show successful entry
		document.getElementById("destinationPrompt").style.color = "green";
		document.getElementById("destinationPrompt").innerHTML = "<strong>valid</strong>";
		return true;
	} else {
		document.getElementById("destinationPrompt").style.color = "Red";
		document.getElementById("destinationPrompt").innerHTML = "<strong>Enter 2&ndash;25 characters</strong>";
		return false;
	}
}

function validateAdults(){ 
	var adultNum = document.getElementById("adults").value;
	if(adultNum>0 && adultNum<11){ //if input is valid
		document.getElementById("adultsPrompt").style.color = "green";
		document.getElementById("adultsPrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	} else {
		document.getElementById("adultsPrompt").style.color = "Red";
		document.getElementById("adultsPrompt").innerHTML = "<strong>We have rooms for max 10 adults</strong>";
		return (false);
	}
}

function validateChildren(){ 
	var childrenNum = document.getElementById("children").value;
	if(childrenNum>-1 && childrenNum<6){ //if input is valid
		document.getElementById("childrenPrompt").style.color = "green";
		document.getElementById("childrenPrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	} else {
		document.getElementById("childrenPrompt").style.color = "Red";
		document.getElementById("childrenPrompt").innerHTML = "<strong>We have rooms for max 5 children</strong>";
		return (false);
	}
}

function calcBooking(){
	var city = document.getElementById("destination").value;
	var mail = document.getElementById("email").value;
	
	document.getElementById("bookingConfirm").innerHTML = "<p> You choose " + city + " as your destination.</p>";
	document.getElementById("bookingConfirm").innerHTML += "<p>We'll send You more information about your booking at: " + mail + ".</p>";
	document.getElementById("bookingConfirm").innerHTML += "<p>Have a nice trip!</p>";
}