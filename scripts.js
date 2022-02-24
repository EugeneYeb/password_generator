const generatePasswordButton = document.getElementById(`generate`);
generatePasswordButton.addEventListener("click", passwordGenerator);

// Generator Main Functions
function passwordGenerator() {
  const passwordLength = document.getElementById('length').value;
  const upperCaseBoolean = document.getElementById('uppercase').checked;
  const lowerCaseBoolean = document.getElementById('lowercase').checked;
  const numbersBoolean = document.getElementById('numbers').checked;
  const symbolsBoolean = document.getElementById('symbols').checked;

  var selectedFunctions = methodRandomizer(upperCaseBoolean, lowerCaseBoolean, numbersBoolean, symbolsBoolean);
  console.log(selectedFunctions);
  var resultArray = [];

  while (resultArray.length < passwordLength) {

    var functionNumber = randomNumber(selectedFunctions.length, 0);

    resultArray.push(selectedFunctions[functionNumber]);
    // resultArray.push(String.fromCharCode(97));
    // console.log(passwordLength);
    // console.log(upperCaseBoolean);
    // console.log(lowerCaseBoolean);
    // console.log(numbersBoolean);
    // console.log(symbolsBoolean);
  }
  document.getElementById('result').innerText = resultArray.join('');
}

//Method Randomizers
function methodRandomizer(uppercase, lowercase, numbers, symbols) {
  var methodArrays = [];

  if (uppercase) {
    methodArrays.push(getUpperCaseLetter);
  }

  if (lowercase) {
    methodArrays.push(getLowerCaseLetter);
  }

  if (numbers) {
    methodArrays.push(getNumber);
  }

  if (symbols) {
    methodArrays.push(getSymbol);
  }
  return methodArrays;
}

// Generator functions

function getUpperCaseLetter() {
  // console.log('getUpperCaseLetter');

  String.fromCharCode(randomNumber(91, 65));
}
function getLowerCaseLetter() {
  // console.log('getLowerCaseLetter');
  String.fromCharCode(randomNumber(123, 97));
}

function getNumber() {
  // console.log('getNumber');
  String.fromCharCode(randomNumber(58, 0));
}

function getSymbol() {
  // console.log('getSymbol');
  String.fromCharCode(randomNumber(48, 0));
}

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}