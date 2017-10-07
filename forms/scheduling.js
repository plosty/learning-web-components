var schedulingForm = document.getElementById("scheduling");

schedulingForm.addEventListener("submit", function (event) {
  // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

    // validate date
    var dateDay = document.getElementById("day");
    var dateMonth = document.getElementById("month");
    var dateYear = document.getElementById("year");
    var date = dateYear.value + "-" + dateMonth.value + "-" + dateDay.value; 
    var dateLabel = document.getElementById("date-label");
    
    if(validator.isDate(date)) {
      dateLabel.className = "valid";
      dateLabel.innerText = "Date";
    } else {
      dateLabel.className = "invalid";
      dateLabel.innerText = "Date - please enter a valid date";
    }

    // validate time
    var timeHour = document.getElementById("hour");
    var timeMinute = document.getElementById("minute");
    var timeLabel = document.getElementById("time-label");
    if(validator.isTime(timeHour.value, timeHour.value)) {
      timeLabel.className = "valid";
      timeLabel.innerText = "Time";
    } else {
      timeLabel.className = "invalid";
      timeLabel.innerText = "Time - please enter a valid Time";
    }

    // validate timezone
    var timezone = document.getElementById("timezone");
    var timezoneLabel = document.getElementById("timezone-label");
    if(validator.isTimezone(timezone.value)) {
      timezoneLabel.className = "valid";
      timezoneLabel.innerText = "Timezone";
    } else {
      timezoneLabel.className = "invalid";
      timezoneLabel.innerText = "Timezone - please enter a valid Timezone";
    }

    // validate Contact Number
    var contactNumber = document.getElementById("contact-number");
    var contactNumberLabel = document.getElementById("contact-number-label");
    if(validator.isPhoneNumber(contactNumber.value)) {
      contactNumberLabel.className = "valid";
      contactNumberLabel.innerText = "Contact Number";
    } else {
      contactNumberLabel.className = "invalid";
      contactNumberLabel.innerText = "Contact Number - please enter a valid Contact Number";
    }

    // validate Email Address
    var email = document.getElementById("email");
    var emailLabel = document.getElementById("email-label");
    if(validator.isEmailAddress(email.value)) {
      emailLabel.className = "valid";
      emailLabel.innerText = "Email Address";
    } else {
      emailLabel.className = "invalid";
      emailLabel.innerText = "Email Address - please enter a valid email";
    }
    
    if(validator.isDate(date) && validator.isTime(timeHour.value, timeHour.value) && validator.isTimezone(timezone.value) 
          && validator.isPhoneNumber(contactNumber.value) && validator.isEmailAddress(email.value) ) {
        schedulingForm.className = "valid";
      }
    else 
      schedulingForm.className = "invalid";
});