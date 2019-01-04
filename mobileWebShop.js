function validateFirstName(){ //test input for 2-15 allowed characters
	var fName = document.getElementById("firstName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
		
	var img = document.createElement("img");
 	img.src = "check.png";

	if(re1.test(fName)){ //if input is valid, update page to show successful entry
		document.getElementById("firstNamePrompt").innerHTML = '<img src="'+img.src+'" style="width:20px;"/>';
		return true;
	} else {
		document.getElementById("firstNamePrompt").style.color = "Red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2&ndash;15 characters</strong>";
		return false;
	}
}

function validateLastName(){ //test input for 2-25 allowed characters
	var lName = document.getElementById("lastName").value;
	var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;
	
	var img = document.createElement("img");
 	img.src = "check.png";

	if(re2.test(lName)){ //if input is valid, update page to show successful entry
		document.getElementById("lastNamePrompt").innerHTML = '<img src="'+img.src+'" style="width:20px;"/>';
		return true;
	} else {
		document.getElementById("lastNamePrompt").style.color = "Red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2&ndash;25 characters</strong>";
		return false;
	}
}

function validateEMail(){ //test input for 5-50 allowed characters
	var email = document.getElementById("email").value;
	var re3 = /^[a-zA-Z0-9\@\.\_\s\'\-]{5,50}$/;
	
	var img = document.createElement("img");
 	img.src = "check.png";

	if(re3.test(email)){ //if input is valid, update page to show successful entry
		document.getElementById("emailPrompt").innerHTML = '<img src="'+img.src+'" style="width:20px;"/>';
		return true;
	} else {
		document.getElementById("emailPrompt").style.color = "Red";
		document.getElementById("emailPrompt").innerHTML = "<strong>Enter example@som.com form</strong>";
		return false;
	}
}

function validateAddress(){ //test input for 2-70 allowed characters
	var add = document.getElementById("address").value;
	var re4 = /^[a-zA-Z0-9\.\s\'\-]{2,70}$/;

	var img = document.createElement("img");
 	img.src = "check.png";

	
	if(re4.test(add)){ //if input is valid, update page to show successful entry
		document.getElementById("addressPrompt").innerHTML = '<img src="'+img.src+'" style="width:20px;"/>';
		return true;
	} else {
		document.getElementById("addressPrompt").style.color = "Red";
		document.getElementById("addressPrompt").innerHTML = "<strong>Enter 2&ndash;70 characters</strong>";
		return false;
	}
}

function validateCity(){ //test input for 2-25 allowed characters
	var city = document.getElementById("city").value;
	var re5 = /^[a-zA-Z\s\'\-]{2,25}$/;

	var img = document.createElement("img");
 	img.src = "check.png";
	
	if(re5.test(city)){ //if input is valid, update page to show successful entry
		document.getElementById("cityPrompt").innerHTML = '<img src="'+img.src+'" style="width:20px;"/>';
		return true;
	} else {
		document.getElementById("cityPrompt").style.color = "Red";
		document.getElementById("cityPrompt").innerHTML = "<strong>Enter 2&ndash;25 characters</strong>";
		return false;
	}
}

function validateCountry(){ //test input for 2-25 allowed characters
	var country = document.getElementById("country").value;
	var re6 = /^[a-zA-Z\s\'\-]{2,25}$/;

	var img = document.createElement("img");
 	img.src = "check.png";
	
	if(re6.test(country)){ //if input is valid, update page to show successful entry
		document.getElementById("countryPrompt").innerHTML = '<img src="'+img.src+'" style="width:20px;"/>';
		return true;
	} else {
		document.getElementById("countryPrompt").style.color = "Red";
		document.getElementById("countryPrompt").innerHTML = "<strong>Enter 2&ndash;25 characters</strong>";
		return false;
	}
}

function displayBuying(){ // displays payment info when button is clicked
	var name = document.getElementById("firstName").value;
	var surname = document.getElementById("lastName").value;
	var mail = document.getElementById("email").value;
	var cardNumber = document.getElementById("cardNumber").value;
	var expiryMonth = document.getElementById("month");
	var monthValue = expiryMonth.options[expiryMonth.selectedIndex].text; // The text content of the selected option
	var expiryYear = document.getElementById("year");
	var yearValue = expiryYear.options[expiryYear.selectedIndex].text;
	var expiryDate = monthValue + "/" + yearValue;
	var cardType = document.getElementById("cardType");
	var typeValue = cardType.options[cardType.selectedIndex].text;

	document.getElementById("buyingConfirm").innerHTML = "<p>Name: "+ name + " " + surname + "</p>";
	document.getElementById("buyingConfirm").innerHTML += "<p>Card Number: "+ cardNumber + "</p>";
	document.getElementById("buyingConfirm").innerHTML += "<p>Date of Expiry: "+ expiryDate + "</p>";
	document.getElementById("buyingConfirm").innerHTML += "<p>Card Type: "+ typeValue + "</p>";
	document.getElementById("buyingConfirm").innerHTML += "<p>We'll send You full receipt at: " + mail + ".</p>";
	document.getElementById("buyingConfirm").innerHTML += "<p>Thank You for buying on Mobile Web Shop.</p>";
}