var signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (event) {
  // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

    // validate firstname 
    var firstName = document.getElementById("first-name").value;
    var firstNameLabel = document.getElementById("first-name-label");
    if(validator.isValidUsername(firstName)) {
      firstNameLabel.className = "valid";
      firstNameLabel.innerText = "First Name";
    } else {
      firstNameLabel.className = "invalid";
      firstNameLabel.innerText = "First Name - please enter a valid name";
    }

    // validate lastname
    var lastName = document.getElementById("last-name").value;
    var lastNameLabel = document.getElementById("last-name-label");
    if(validator.isValidUsername(lastName)) {
      lastNameLabel.className = "valid";
      lastNameLabel.innerText = "Last Name";
    } else {
      lastNameLabel.className = "invalid";
      lastNameLabel.innerText = "Last Name - please enter a valid name";
    }

    // validate email
    var email = document.getElementById("email").value;
    var emailLabel = document.getElementById("email-label");
    if(validator.isEmailAddress(email)) {
      emailLabel.className = "valid";
      emailLabel.innerText = "Email Address";
    } else {
      emailLabel.className = "invalid";
      emailLabel.innerText = "Email Address - please enter a valid email";
    }

    // validate date of birth
    var dateDay = document.getElementById("day");
    var dateMonth = document.getElementById("month");
    var dateYear = document.getElementById("year");
    var date = dateYear.value + "-" + dateMonth.value + "-" + dateDay.value; 
    var dateLabel = document.getElementById("date-label");
    
    var validBirthDate = (validator.isDate(date) && validator.isBeforeToday(date));
    if(validBirthDate) {
      dateLabel.className = "valid";
      dateLabel.innerText = "Date of Birth";
    } else {
      dateLabel.className = "invalid";
      dateLabel.innerText = "Date of Birth - please enter a valid date";
    }

    // validate password
    var password = document.getElementById("password").value;
    var passwordLabel = document.getElementById("password-label");
    if(validator.isValidPassword(password)) {
      passwordLabel.className = "valid";
      passwordLabel.innerText = "Password";
    } else {
      passwordLabel.className = "invalid";
      passwordLabel.innerText = "Password - please enter a valid password";
    }

    // validate password confirmation
    var confirmedPassword = document.getElementById("confirm-password").value;
    var confirmedPasswordLabel = document.getElementById("confirm-password-label");
    if(validator.isConfirmedPassword(password, confirmedPassword)) {
      confirmedPasswordLabel.className = "valid";
      confirmedPasswordLabel.innerText = "Confirm Password";
    } else {
      confirmedPasswordLabel.className = "invalid";
      confirmedPasswordLabel.innerText = "Confirm Password - passwords must match";
    }

    if(
        validator.isValidUsername(firstName) &&
        validator.isValidUsername(lastName) &&
        validator.isEmailAddress(email) &&
        validBirthDate &&
        validator.isValidPassword(password) &&
        validator.isConfirmedPassword(password, confirmedPassword)
      )  {
        signupForm.className = "valid";
      }    
    else {
      signupForm.className = "invalid";
    }
});