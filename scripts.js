const generatePasswordButton = document.getElementById(`generate`);

generatePasswordButton.addEventListener("click", passwordGenerator);

// Generator Main Functions
function passwordGenerator() {
  const passwordLength = document.getElementById('length').value;
  const upperCaseBoolean = document.getElementById('uppercase').checked;
  const lowerCaseBoolean = document.getElementById('lowercase').checked;
  const numbersBoolean = document.getElementById('numbers').checked;
  const symbolsBoolean = document.getElementById('symbols').checked;

  var resultArray = []
  var num = 0;
  while (resultArray.length < passwordLength) {
    resultArray.push(num);
    num++;
  }

  console.log(passwordLength);
  console.log(upperCaseBoolean);
  console.log(lowerCaseBoolean);
  console.log(numbersBoolean);
  console.log(symbolsBoolean);

  document.getElementById('result').innerText = resultArray.join('');
}

// Generattor functions

function getLowerCaseLetter() {
  console.log('getLowerCaseLetter');
}

function getUpperCaseLetter() {
  console.log('getUpperCaseLetter');
}

function getNumber() {
  console.log('getNumber');
}

function getSymbol() {
  console.log('getSymbol');
}
