function init() {
	var sendData = document.getElementById("send-data");

	if (sendData.addEventListener) {
		sendData.addEventListener("click", function () {
			var name = document.getElementById("name").value;
			var lastName = document.getElementById("last-name").value;
			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value;
			var confirmPassword = document.getElementById("confirm-password").value;
			var dateOfBirth = document.getElementById("date-birth").value;

			if (passwordMatch(password, confirmPassword) === true && validatePassword(password, confirmPassword) === true) {
				user.register(name, lastName, email, dateOfBirth);
				user.show();
			} else {
				var alertMessage = `
					<div class="alert alert-danger" role="alert">
						The passwords don't match. Please try again.
					</div>
				`
				document.body.insertAdjacentHTML('afterbegin', alertMessage);
			}
		}, false);

	} else {
		sendData.attachEvent("onclick", function () {
			user.show();
		});
	}
}

function passwordMatch(password, confirmPassword) {
	if (password === confirmPassword) {
		return true;
	}
	return false;
}

function validatePassword(password, confirmPassword) {
	if (password.length >= 8 && confirmPassword.length >= 8) {
		return true;
	}
	return false;
}

var user = new Object();
user.name = "";
user.lastName = "";
user.email = "";
user.birth = "";
user.id = "";

user.register = function (name, lastName, email, birth) {
	this.name = name;
	this.lastName = lastName;
	this.email = email;
	this.birth = birth;
	this.id = name.substring(0, 1) + lastName.substring(0, 1) + new Date().getFullYear() + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9);
}

user.show = function () {
	with (document) {
		write("<!DOCTYPE html>\n");
		write("<html lang=\"en\">\n");
		write("<head>\n\t");
		write("<title>User data</title>\n");
		write("<meta charset=\"utf-8\" />");
		write("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"/>\n");
		write("</head>\n");
		write("<body>\n");
		write("<table class=\"table\">");
		write("<tr>\n<th colspan=\"2\">User data</th></tr>\n");
		write("<tr><td scope=\"row\">Name: </td>\n");
		write("<td>" + user.name + "</td></tr>\n");
		write("<tr><td scope=\"row\">Last name: </td>\n");
		write("<td>" + user.lastName + "</td></tr>\n");
		write("<tr><td scope=\"row\">Email: </td>\n");
		write("<td>" + user.email + "</td></tr>\n");
		write("<tr><td scope=\"row\">Date of birth: </td>\n");
		write("<td>" + user.birth + "</td></tr>\n");
		write("<tr><td scope=\"row\">User id: </td>\n");
		write("<td>" + user.id + "</td></tr>\n");
		write("</table>\n");
		write("</html>\n");
	}
}

if (window.addEventListener) {
	window.addEventListener("load", init, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", init);
}