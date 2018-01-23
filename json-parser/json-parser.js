/*
Create a simplified JSON validator that checks any inputted JSON for errors. 
This JSON validator doesn’t have to validate any and all JSON. 
It should, however, be able to simplify simple JSONs, such as the JSON you will create in Project Assignment 3 below.

A user can input JSON into your validator by uploading a JSON file or by writing or pasting JSON into a textarea. 
Use a tabs interface for the UI. 
Display the textarea and the fileupload element for the raw JSON data in one tab and display the results of the validation in another tab, next to the JSON tab. 
Enforce all uploaded file to have the .json extension. 
Prevent users from uploading any other files besides .json files.

An invalid JSON can be missing any of the required formatting characters that make a JSON valid or it can even contain an extra or missing double or single quote that causes the JSON to be invalid. 
For example, the following sample JSON has errors; you validator should be able to catch these two errors:

{
  "country": "United States",
  "capital": "Washington, DC
  "states":{{}}
}

If you don’t know how to get started with this assignment and you are clueless about how to check if a string has a certain pattern 
(this is a hint for the solution), ask questions on QA. @mention Josep.

You should have the Regular Expressions In Depth chapter along with this one. 
If you don’t have it, request it. 
You will find that using regular expressions to create the JSON validator will help you create the solution much quicker and help you create a more robust validator. 
*/

// input variables
const textInput = document.getElementById('text-input');
const fileInput = document.getElementById('input-file');
const submitButton = document.getElementById('process-button');
const clearButton = document.getElementById('clear-button');

const textOutput = document.getElementById('text-output');
const resultField = document.getElementById('result-field');


// - I'm truly sorry for this most hideous regex!!!
const key = '\\n*\\s*(\\"(.*)\\")\\s*:\\s*';
const object = `{${key}((\\"(.*)\\")|\\d|true|false)(,${key}((\\"(.*)\\")|\\d|true|false))*\\n*\\s*}`;
const array =  '\\[\\n*\\s*{\\"(.*)\\":\\s*(\\"(.*)\\"|\\d|true|false)}(,\\n*\\s*{\\"(.*)\\":\\s*(\\"(.*)\\"|\\d|true|false)})*\\n*\\s*]'

// construct the full string to be fed into the regex:
const fullRegexString = `^{${key}((\\"(.*)\\")|\\d|true|false|${object}|${array})(,(\\n*\\s*(\\"(.*)\\")\\s*:\\s*((\\"(.*)\\")|\\d|true|false|${object}|${array})\\s*\\n*))*\\n*}$`;
let jsonCheck = new RegExp(fullRegexString);

console.log(`jsonCheck: ${jsonCheck}`);
/* regex breakdown:
/^{
  -- key: string | number | boolean | object | array --- this is the first required entry
  \n*\s*(\"(.*)\")\s*: \s*( (\"(.*)\") | \d | true | false |  {\n*\s*(\"(.*)\")\s*: \s*((\"(.*)\")|\d|true|false)(,\n*\s*(\"(.*)\")\s*:\s*((\"(.*)\")|\d|true|false))*\n*\s*} | \[\n*\s*{\"(.*)\":\s*(\"(.*)\"|\d|true|false)}(,\n*\s*{\"(.*)\":\s*(\"(.*)\"|\d|true|false)})*\n*])
  -- repeat for additional elements:
  (, (\n*\s*(\"(.*)\")\s*: \s*((\"(.*)\")|\d|true|false| {\n*\s*(\"(.*)\")\s*:\s*((\"(.*)\")|\d|true|false)(,\n*\s*(\"(.*)\")\s*:\s*((\"(.*)\")|\d|true|false))*\n*\s*} | \[\n*\s*{\"(.*)\":\s*(\"(.*)\"|\d|true|false)}(,\n*\s*{\"(.*)\":\s*(\"(.*)\"|\d|true|false)})*\n*] )\s*\n*))*\n*
}$/
*/

fileInput.addEventListener('change', loadFile);
submitButton.addEventListener('click', processText);
clearButton.addEventListener('click', clearText);

function loadFile() {
  let file = fileInput.files[0];
  if (file.name.match(/\.json$/)) { // check file is ended .json)
    var reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function(event) {
      var contents = event.target.result;   
      textInput.value = contents;
    };
  } else {
    alert(`Incorrect file type: ${file.name}`);
  }    
}

function processText(event) {
  clearResults();

  jsonCheck.exec(textInput.value) ? addResult('success') : addResult('failure');  

  textOutput.value = textInput.value;
  event.preventDefault(); 
}


function clearText() {
  textInput.value = '';
  clearResults();
}

function clearResults() {
  textOutput.value = '';
  textOutput.classList.remove('is-invalid', 'is-valid');
}

function addResult(result) {
  if (result === 'success') {
    textOutput.classList.add('is-valid');
    resultField.classList.add('is-valid');
    resultField.value = "Valid JSON";
  } else {
    textOutput.classList.add('is-invalid');
    resultField.classList.add('is-invalid');
    resultField.value = "Invalid JSON";
  }
}