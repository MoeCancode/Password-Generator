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
  var characterPool = "";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerics = "0123456789";
  var specialCharacters = "!@#$%^&*()";

  if (numberOfCharacters >= 8 && numberOfCharacters <= 128)
  {
    var wantLowercase = confirm("Do you want the password to have Lowercase letters?");
    var wantUppercase = confirm("Do you want the password to have Uppercase letters?");
    var wantNumeric = confirm("Do you want the password to have Numbers?");
    var wantSpecialCharacters = confirm("Do you want the password to have Special Characters?");

    if (wantLowercase != false) {
      characterPool = characterPool + lowercaseLetters;
    }

    if (wantUppercase != false) {
      characterPool = characterPool + uppercaseLetters;
    }

    if (wantNumeric != false) {
      characterPool = characterPool + numerics;
    }

    if (wantSpecialCharacters != false) {
      characterPool = characterPool + specialCharacters;
    }

    if (wantLowercase == false && wantUppercase == false && wantNumeric == false && wantSpecialCharacters == false) {
      alert("You must click OK for at least one of the 4!");
      return;
    }

    var randomPassword = "";
    for(var i =0; i < numberOfCharacters; i++) {
      randomPassword = randomPassword + characterPool[Math.floor(Math.random() * characterPool.length)];
    }

    return randomPassword;

  } 
  else {
    alert("Invalid input, try again");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
