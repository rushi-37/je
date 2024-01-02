let displayValue = '';

function appendValue(val) {
  displayValue += val;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function square() {
  displayValue = eval(displayValue) ** 2;
  document.getElementById('display').value = displayValue;
}

function squareRoot() {
  displayValue = Math.sqrt(eval(displayValue));
  document.getElementById('display').value = displayValue;
}

function cube() {
  displayValue = eval(displayValue) ** 3;
  document.getElementById('display').value = displayValue;
}

function cubeRoot() {
  displayValue = Math.cbrt(eval(displayValue));
  document.getElementById('display').value = displayValue;
}

function percentage() {
  displayValue = eval(displayValue) / 100;
  document.getElementById('display').value = displayValue;
}
