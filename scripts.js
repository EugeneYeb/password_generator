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

    resultArray.push(selectedFunctions[functionNumber]());
    // console.log()
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