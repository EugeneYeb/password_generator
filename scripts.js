const generatePasswordButton = document.getElementById(`generate`);

generatePasswordButton.addEventListener("click", passwordGenerator);

// Generator Main Functions
function passwordGenerator() {
  const passwordLength = document.getElementById('length').value;
  const upperCaseBoolean = document.getElementById('uppercase').checked;
  const lowerCaseBoolean = document.getElementById('lowercase').checked;
  const numbersBoolean = document.getElementById('numbers').checked;
  const symbolsBoolean = document.getElementById('symbols').checked;

  console.log(passwordLength);
  console.log(upperCaseBoolean);
  console.log(lowerCaseBoolean);
  console.log(numbersBoolean);
  console.log(symbolsBoolean);
}

// Generattor functions

function getLowerCaseLetter() {
}

function getUpperCaseLetter() {
}

function getNumber() {
}

function getSymbol() {
}
