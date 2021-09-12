//global variables
var password;
var passwordLength;

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordChoices = ""

//function to clear variables if the game is ran more than once
function resetPassword() {
  password = ""
  passwordLength = 0;
  passwordChoices = "";
}

//gather password ingrediants
function passwordContents () {
  if (window.confirm("Would you like your password to contain upper case letters?")) {
    passwordChoices += upper;
  };
  if (window.confirm("Would you like your password to contain lower case letters?")) {
    passwordChoices += lower;
  };
  if (window.confirm("Would you like your password to contain numbers?")) {
    passwordChoices += numbers;
  };
  if (window.confirm("Would you like your password to contain special characters?")) {
    passwordChoices += special;
  };
}

//Call the 2 functions to figure out what we need to generate our password
function passwordSelectors() {
  resetPassword(); //in case this isn't the first time running our generator
  
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt('How long would you like your password to be? Please choose a number between 8 and 128.');
    console.log(passwordLength);
  };

  while ( !passwordChoices ) {
    passwordContents();
  }
 
return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function to make the password
function generatePassword() {
 passwordSelectors()

  for (let i = 0; i < passwordLength; i++) {
    password += passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    console.log(password);
  }
    return password;
}

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
