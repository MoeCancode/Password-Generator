// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numberOfCharacters = prompt("How many characters would you like in your password? \n (Choose between 8 & 128");

  if (numberOfCharacters >= 8 && numberOfCharacters <= 128)
  {
    var wantLowercase = confirm("Do you want the password to have Lowercase letters?");
    var wantUppercase = confirm("Do you want the password to have Uppercase letters?");
    var wantNumeric = confirm("Do you want the password to have Numbers?");
    var wantSpecialCharacters = confirm("Do you want the password to have Special Characters?");

  } else {
    alert("Invalid input, try again");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
