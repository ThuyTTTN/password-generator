// Assignment code here

// code for Number Length
var start = function () {
  var length = window.prompt("How long do you want your password to be?  Choose between numbers 8 - 128.");
    if (length < 8 || length > 128) {
      window.alert("Length of password is not within the parameter.  Please try again.");
      start();
    }
    else {
      var char = window.confirm("Would you like your password to have special characters, such as '!, @, #, etc.?'");
      var num = window.confirm("Would you like your password to contain numbers?");
      var upper = window.confirm("Would you like your password to contain all upper case letters?");
      var lower = window. confirm("Would you like your password to contain all lower case letters?");
    }     
}
promptLength();

var char = window.confirm("Would you like your password to have special characters, such as '!, @, #, etc.?'");
var num = window.confirm("Would you like your password to contain numbers?");
var upper = window.confirm("Would you like your password to contain all upper case letters?");
var lower = window. confirm("Would you like your password to contain all lower case letters?");





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
