// Assignment code here
var numbers = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var symbols = "~!@#$%^&*()";

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

function generatePassword() {
  var all = "";

  // this section builds the possible characters variable (all) based on user input
  var length = parseInt(window.prompt("Pick a password length from 8 - 128."));
  if(length <8 || length >128) {
    alert("Password length is not between 8 - 128.");
    location.reload();
  }

  if (window.confirm("Do you want numerical values for your password?")) {
    // if user says ok, do something here, otherwise cancel and go to the next thing
    all += numbers;

  }

  if (window.confirm("Do you want your password to contain uppercase letters?")) {
    all += upper;
  }

  // lower
  if (window.confirm("Do you want your password to contain lowercase letters?")) {
    all += lower;
  }

  // symbols
  if (window.confirm("Do you want your password to contain special characters?")) {
    all += symbols;
  }

  // console.log(all);

  var allpw = "";
  
  for (var i = 0; i < length; i++) {
    allpw += all.charAt(Math.floor(Math.random() * all.length));
    // console.log(allpw);
  }
  return allpw;   // return the generated password here
}




  
  