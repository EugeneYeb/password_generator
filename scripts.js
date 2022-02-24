const generatePasswordButton = document.getElementById('generate');
const clipBoardIcon = document.getElementById('clipboard');

generatePasswordButton.addEventListener("click", passwordGenerator);
clipBoardIcon.addEventListener('click', copyResults);

// Generator Main Functions
function passwordGenerator() {
  const passwordLength = document.getElementById('length').value;
  const upperCaseBoolean = document.getElementById('uppercase').checked;
  const lowerCaseBoolean = document.getElementById('lowercase').checked;
  const numbersBoolean = document.getElementById('numbers').checked;
  const symbolsBoolean = document.getElementById('symbols').checked;

  var selectedFunctions = methodRandomizer(upperCaseBoolean, lowerCaseBoolean, numbersBoolean, symbolsBoolean);

  var resultArray = [];

  while (resultArray.length < passwordLength) {

    var functionNumber = randomNumber(selectedFunctions.length, 0);
    resultArray.push(selectedFunctions[functionNumber]());

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
function copyResults() {
  var resultsToCopy = document.getElementById('result');
  // resultsToCopy.select();

  navigator.clipboard.writeText(resultsToCopy.innerText);

}
// Generator functions
function getUpperCaseLetter() {
  return String.fromCharCode(randomNumber(91, 65));
}

function getLowerCaseLetter() {
  return String.fromCharCode(randomNumber(123, 97));
}

function getNumber() {
  return String.fromCharCode(randomNumber(58, 48));
}

function getSymbol() {
  return String.fromCharCode(randomNumber(48, 33));
}

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}