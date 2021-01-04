var enter;
var confirmSpecial;
var confirmUpper;
var confirmLower;
var confirmNumber;
var choices;

special = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "<", ">", "?", "/", "'", ",", "\:", "\;", "\\", "^",];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];



// Assignment Code
var get = document.querySelector("#generate");

get.addEventListener("click", function (){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 charachters."));

  if (!enter) {
    alert("Please enter a value!!!");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  
  } else {
    confirmNumber = confirm("Does this need numbers?");
    confirmSpecial = confirm("Does this need special characters?");
    confirmUpper = confirm("Does this need uppercase letters?");
    confirmLower = confirm("Does this need lowercase letters?");
  };

  if (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {
    choices = alert("You must choose a criteria!!");
  }
// 4 Positive options
  else if (confirmNumber && confirmSpecial && confirmUpper && confirmLower) {
    choices = number.concat(special, upper, lower);
  }
// 3 Positive options
  else if (confirmNumber && confirmSpecial && confirmUpper) {
    choices = number.concat(special, upper);
  }
  else if (confirmNumber && confirmSpecial && confirmLower) {
    choices = number.concat(special, lower);
  }
  else if (confirmNumber && confirmUpper && confirmLower) {
    choices = number.concat(upper, lower);
  }
  else if (confirmSpecial && confirmUpper && confirmLower) {
    choices = special.concat(upper, lower);
  }
// 2 Positive options
  else if (confirmNumber && confirmSpecial) {
    choices = number.concat(special);
  }
  else if (confirmSpecial && confirmLower) {
    choices = special.concat(lower);
  }
  else if (confirmSpecial && confirmUpper) {
    choices = special.concat(upper);
  }
  else if (confirmLower && confirmNumber) {
    choices = lower.concat(number);
  }
  else if (confirmLower && confirmUpper) {
    choices = lower.concat(upper);
  }
  else if (confirmNumber && confirmUpper) {
    choices = number.concat(upper);
  }
  // 1 Positive Option
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmSpecial) {
    choices = special;
  }
  else if (confirmUpper) {
    choices = upper;
  }
  else if (confirmLower) {
    choices = lower;
  }

  var password =[];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textcontent = ps;
}