var password = document.getElementById("password");

// Function will generate a random password will the characters provided 

function genPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordLength = 12;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = password;
}


// After password is genertaed the user will press "COPY" button and an "Password Copied" alert will display 

function copyPassword() {
  alert("Password Copied")
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
