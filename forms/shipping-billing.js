var shippingBillingForm = document.getElementById("form-container");

shippingBillingForm.addEventListener("submit", function (event) {

  // stop the event from its default action: submitting the form (for our validation, submission is not desired)
  event.preventDefault();

  /*
   Shipping & Billing Form
  */

  /*
   Shipping Form
  */

  // First Name
  var firstName = document.getElementById("first-name");
  var firstNameLabel = document.getElementById("first-name-label");
  var firstNameValid = validator.isValidUsername(firstName.value);
  if(firstNameValid) {
    firstNameLabel.className = "valid";
    firstNameLabel.innerText = "First Name";
  } else {
    firstNameLabel.className = "invalid";
    firstNameLabel.innerText = "First Name - please enter a valid name";
  }

  // Last Name
  var lastName = document.getElementById("last-name");
  var lastNameLabel = document.getElementById("last-name-label");
  var lastNameValid = validator.isValidUsername(lastName.value);
  if(lastNameValid) {
    lastNameLabel.className = "valid";
    lastNameLabel.innerText = "Last Name";
  } else {
    lastNameLabel.className = "invalid";
    lastNameLabel.innerText = "Last Name - please enter a valid name";
  }

  // Address
  var address = document.getElementById("address");
  var addressLabel = document.getElementById("address-label");
  var addressValid = validator.isOfLengthOrGreaterThan(address.value, 3);
  if(addressValid) {
    addressLabel.className = "valid";
    addressLabel.innerText=("Address");
  }
  else {
    addressLabel.className = "invalid";
    addressLabel.innerText=("Address - please enter a valid address");
  }

  // City
  var city = document.getElementById("city");
  var cityLabel = document.getElementById("city-label");
  var cityValid = validator.isOfLengthOrGreaterThan(city.value, 5);
  if(cityValid) {
    cityLabel.className = "valid";
    cityLabel.innerText=("City");
  }
  else {
    cityLabel.className = "invalid";
    cityLabel.innerText=("City - please enter a valid city");
  }

  
  // Header
  var shippingAddressHeader = document.getElementById("shipping-address-header");
  var shippingAddressValid = (firstNameValid && lastNameValid && addressValid && cityValid);
  
  if (shippingAddressValid) {
    shippingAddressHeader.className = "valid";
  }
  else {
    shippingAddressHeader.className = "invalid";
  }

  /*
   Billing Address (if unchecked)
   */
  var billingCheckbox = document.getElementById("same-address");  
  var sameBillingAddress = billingCheckbox.checked ? true : false;
  var billingAddressValid = true; 

  var billingAddressHeader = document.getElementById("billing-address-header");

  if (!sameBillingAddress) {
    // First Name
    var billingFirstName = document.getElementById("billing-first-name");
    var billingFirstNameLabel = document.getElementById("billing-first-name-label");
    var billingFirstNameValid = validator.isValidUsername(billingFirstName.value);
    if(billingFirstNameValid) {
      billingFirstNameLabel.className = "valid";
      billingFirstNameLabel.innerText = "First Name";
    } else {
      billingFirstNameLabel.className = "invalid";
      billingFirstNameLabel.innerText = "First Name - please enter a valid name";
    }

    // Last Name
    var billingLastName = document.getElementById("billing-last-name");
    var billingLastNameLabel = document.getElementById("billing-last-name-label");
    var billingLastNameValid = validator.isValidUsername(billingLastName.value);
    if(billingLastNameValid) {
      billingLastNameLabel.className = "valid";
      billingLastNameLabel.innerText = "Last Name";
    } else {
      billingLastNameLabel.className = "invalid";
      billingLastNameLabel.innerText = "Last Name - please enter a valid name";
    }

    // Address
    var billingAddress = document.getElementById("billing-address");
    var billingAddressLabel = document.getElementById("billing-address-label");
    var billingAddressValid = validator.isOfLengthOrGreaterThan(billingAddress.value, 3);
    if(billingAddressValid) {
      billingAddressLabel.className = "valid";
      billingAddressLabel.innerText=("Address");
    }
    else {
      billingAddressLabel.className = "invalid";
      billingAddressLabel.innerText=("Address - please enter a valid address");
    }

    // City
    var billingCity = document.getElementById("billing-city");
    var billingCityLabel = document.getElementById("billing-city-label");
    var billingCityValid = validator.isOfLengthOrGreaterThan(billingCity.value, 5);
    if(billingCityValid) {
      billingCityLabel.className = "valid";
      billingCityLabel.innerText=("City");
    }
    else {
      billingCityLabel.className = "invalid";
      billingCityLabel.innerText=("City - please enter a valid city");
    }

    // Headers
    billingAddressValid = (billingFirstNameValid && billingLastNameValid && billingAddressValid && billingCityValid);

    if (billingAddressValid) {
      billingAddressHeader.className = "valid";
    }
    else {
      billingAddressHeader.className = "invalid";
    }
  }
  else {
    billingAddressHeader.className = "valid";
  }

  var shippingAndBillingHeader = document.getElementById("shipping-billing-header");

  if (shippingAddressValid && billingAddressValid) {
    shippingAndBillingHeader.className = "valid";
  } else {
    shippingAndBillingHeader.className = "invalid";
  }

  /*
   Payment Form
  */  

  // Full Name
  var fullName = document.getElementById("full-name");
  var fullNameLabel = document.getElementById("full-name-label");
  var fullNameValid = validator.isValidUsername(fullName.value);
  if(fullNameValid) {
    fullNameLabel.className = "valid";
    fullNameLabel.innerText = "Full Name";
  }
  else {
    fullNameLabel.className = "invalid";
    fullNameLabel.innerText = "Full Name - please enter a valid name";
  }

  // Card Number
  var cardNumber = document.getElementById("card-number");
  var cardNumberLabel = document.getElementById("card-number-label");
  var cardNumberValid = validator.isCreditCard(cardNumber.value);
  if(cardNumberValid) {
    cardNumberLabel.className = "valid";
    cardNumberLabel.innerText = "Card Number";
  }
  else {
    cardNumberLabel.className = "invalid";
    cardNumberLabel.innerText = "Card Number - please enter a valid card number";
  }

  // CCV Number
  var ccvNumber = document.getElementById("ccv-number");
  var ccvNumberLabel = document.getElementById("ccv-number-label");
  var ccvNumberValid = validator.isOfLengthOrLessThan(ccvNumber.value, 3);
  if(ccvNumberValid) {
    ccvNumberLabel.className = "valid";
    ccvNumberLabel.innerText = "CCV Number";
  }
  else {
    ccvNumberLabel.className = "invalid";
    ccvNumberLabel.innerText = "CCV Number - please enter a valid ccv number";
  }

  // Header
  var paymentHeader = document.getElementById("payment-header");
  var paymentFormValid = (fullNameValid && cardNumberValid && ccvNumberValid);
  if(paymentFormValid) {
    paymentHeader.className = "valid";
  } else {
    paymentHeader.className = "invalid";
  }

  /*
   Form Header & Form
  */
  var formValid = (shippingAddressValid && billingAddressValid && paymentFormValid);
  var formHeader = document.getElementById("main-header");
  if (formValid) {
    formHeader.className = 'valid';
  } else {  
    formHeader.className = 'invalid';
  }

});