function createUser() {
	const user = document.getElementById("new_user").value;
	const password1 = document.getElementById("new_password").value;
	const password2 = document.getElementById("confirm").value;

	const data = { 'user': user, 'password1': password1, 'password2': password2 };

	fetch("createUser.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.success ? "User created" : "User not created");
			if (data.success){
				$(document.body).empty();
				createButtons();
				let date = new Date();
				createCalendar(date);
				nextPrevMonth(date);
			} else {
			}
		}).catch(function(error) {
			console.log(error);
		});
}