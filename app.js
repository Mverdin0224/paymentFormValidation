document.addEventListener("DOMContentLoaded", function() {

	document
		.getElementById("payment-form")
		.addEventListener("submit", function(event) {
			event.preventDefault();

			var firstName = document 
				.getElementById("firstname")
				.value;

			var lastName = document 
				.getElementById("lastname")
				.value;

			if (firstName === "" || lastName === "") {
				alert("Please enter a first and last name!");
				return;
			}
			var cc = document 
				.getElementById("credit-card")
				.value;
			if (cc.length !== 16) {
				alert("You must enter exactly 16 digits for credit card number");
				return;
			}
			var ccDigits = document 
				.getElementById("credit-card")
				.value;
			if (!ccDigits.match(/^\d+$/)) {
				alert("Only numbers for credit card!");
				return;
			}
			var expDate = document 
				.getElementById("expiration")
				.value;
				if (expDate.length !== 4) {
				alert("For date only enter 4 digits");
				return;
			}
				if (!expDate.match(/^\d+$/)) {
				alert("Only accepts numbers for date!");
				return;
			}
			var cvcValidation = document
				.getElementById("cvc")
				.value;
				if (cvcValidation.length !== 3) {
				alert("You must enter only 3 digits!");
				return;
			}
				if (!expDate.match(/^\d+$/)) {
				alert("Only numbers for CVC!");
				return;
			}
		});
});