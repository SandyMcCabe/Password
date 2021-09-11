// Assignment code here
var password;
var passwordLength;

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordChoices = ""

function resetPassword() {
  password = ""
  passwordLength = "";
  passwordChoices = "";
}

function passwordSelectors() {
  resetPassword();

  passwordLength = window.prompt('How long would you like your password to be? Please choose a number between 8 and 128.');
  console.log(passwordLength);
  
  while (passwordLength < 8 || passwordLength > 128) {
    let passwordLength = window.prompt('Please enter a password length between 8-128 digits.');
    console.log(passwordLength);
  };

  // while (passwordChoices.length < 1 ) {
 
  if (window.confirm("Would you like your password to contain upper case letters?")) {
    passwordChoices += upper;
    console.log (passwordChoices);
  };
  if (window.confirm("Would you like your password to contain lower case letters?")) 
  {
    passwordChoices += lower;
    console.log (passwordChoices);
  }
  if (window.confirm("Would you like your password to contain numbers?")) 
  {
    passwordChoices += numbers;
    console.log (passwordChoices);
  }
  if (window.confirm("Would you like your password to contain special characters?")) 
  {
    passwordChoices += special;
    console.log (passwordChoices);
  }
// }
return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 passwordSelectors()
 console.log ("returned back to generate password")

  for (let i = 0; i < passwordLength; i++) {
    console.log("into the for loop")
    password += passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    console.log(password);
  }
    return password;
  
}

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  console.log("am I getting here??");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
