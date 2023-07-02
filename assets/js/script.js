// Assignment Code
var generateBtn = document.querySelector("#generate");

// Taking the outputs from the "input password function"
function generatePassword(input, numeric, lowercase, uppercase, specialcase) {
  // Line 8 will be the actual set of characters the password generator will use, a combination of any "true" values on the if checks. As an example, if numeric
  // is true but lowercase is false then the list of available characters will include numbers but not lowercase
  var charset = '';
  if(numeric) {
    charset += '0123456789';
  }
  if(lowercase) {
    charset += 'abcdefghijklmnopqrstuvwxyz';
  }
  if(uppercase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if(specialcase) {
    charset += '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  }
  // Setting the max length of the password based on what the user indicated
  var length = input;
  // The For Loop is going through all the available characters from the main character set and randomly selecting until it hits the limit defined by the specified length
  var passValue = '';
    for (i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * (charset.length));
      // charAt will return the actual string value of the number instead of the index
      passValue += charset.charAt(randomNumber);
    }
    return passValue;
}

function writePassword(event) {
  var passwordText = document.querySelector("#password");
  // This is the user input for length of password
  var lengthInput;
  // Do While is checking for non-valid values, and while true reprompts until one is provided
  do {
    lengthInput = (window.prompt("How many characters would you like?", "Choose between 8 and 128"));
    // Line 36 checks for hitting "cancel" on the prompt to end instead of looping constantly
    if (lengthInput === null) {
      return;
    }
    // parseInt is taking the input and making it a number, since default inputs from a prompt are strings
    lengthInput = parseInt(lengthInput);
  } while (isNaN(lengthInput) || lengthInput < 8 || lengthInput > 128);
  // Confirm will reprompt for additional parameters for cases and numbers
  var numeric = confirm("Would you like to include numbers?");
  var lowercase = confirm("Would you like to include lowercase characters?");
  var uppercase = confirm("Would you like to include UPPERCASE characters?");
  var specialcase = confirm("Would you like to include Special characters?");
  // If statement is checking to make sure at least one type has been selected, and if not tells the user to do so and calls the function again
  if(numeric || lowercase || uppercase || specialcase) {
  passwordText.value = generatePassword(lengthInput, numeric, lowercase, uppercase, specialcase);
  }
  else {
    window.alert("Please select at least one set of criteria to generate a password");
    writePassword(event);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);