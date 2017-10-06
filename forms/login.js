var loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function (event) {
  // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
    // Your code below this line
    var userNameValue = document.getElementById("user-name").value;
    if(!validator.isValidUsername(userNameValue)) {
      document.getElementById("user-name-label").className += " error";
      document.getElementById("user-name-label").innerText = "Username - please enter a valid username";
    }

    var email = document.getElementById("email").value;
    if(!validator.isEmailAddress(email)) {
      document.getElementById("email-label").className += " error";
      document.getElementById("email-label").innerText = "Email Address - please enter a valid email";
    }

    var password = document.getElementById("password").value;
    if(!validator.isValidPassword(password)) {
      document.getElementById("password-label").className += " error";
      document.getElementById("password-label").innerText = "Password - please enter a valid password";
    }

});
