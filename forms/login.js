var loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function (event) {
  // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

    var userNameValue = document.getElementById("user-name").value;
    if(validator.isValidUsername(userNameValue)) {
      document.getElementById("user-name-label").className = "valid";
      document.getElementById("user-name-label").innerText = "Username";
    } else {
      document.getElementById("user-name-label").className = "invalid";
      document.getElementById("user-name-label").innerText = "Username - please enter a valid username";
    }

    var email = document.getElementById("email");
    var emailLabel = document.getElementById("email-label");
    if(validator.isEmailAddress(email.value)) {
      emailLabel.className = "valid";
      emailLabel.innerText = "Email Address";
    } else {
      emailLabel.className = "invalid";
      emailLabel.innerText = "Email Address - please enter a valid email";
    }

    var password = document.getElementById("password").value;
    if(validator.isValidPassword(password)) {
      document.getElementById("password-label").className = "valid";
      document.getElementById("password-label").innerText = "Password";
    } else {
      document.getElementById("password-label").className = "invalid";
      document.getElementById("password-label").innerText = "Password - please enter a valid password";
    }

    if(validator.isValidUsername(userNameValue) && validator.isEmailAddress(email) && validator.isValidPassword(password))
      loginForm.className = "valid";
    else 
      loginForm.className = "invalid";

});
