function buttonPressed(button) {
  var display = document.getElementById('display');
  if (display.value=='0') {
    display.value = button;
  }
  else {
    display.value = display.value + button;
  }
}

// need to improve this so we can add . only to the current number
function addPeriod() {
  var display = document.getElementById('display');
  // only add the '.' symbol if the last entry is a number, and if the current number does not contain a '.' already
  if ((display.value[display.value.length-1] >= 0 && display.value[display.value.length-1] <= 9)) {
    var number = "";
    var i=display.value.length-1;
    while (i > 0 && display.value[i] != '+' && display.value[i] != '-' && display.value[i] != '/' && display.value[i] != '*') {
      number = display.value[i] + number;
      i--;
    }
    if (!number.includes('.')) {
      display.value = display.value + '.';
    }
  }
}

function clearDisplay() {
  var display = document.getElementById('display');
  display.value = '0';
}

function deleteLastNumber() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, display.value.length-1);
  if (display.value.length===0) {
    display.value = 0;
  }
}

function changeSign() {
  var display = document.getElementById('display');
  if (display.value[0]==='-') {
    display.value = display.value.substr(1);
  }
  else {
    display.value = '-' + display.value;
  }
}

function evaluateCalculation() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
}
