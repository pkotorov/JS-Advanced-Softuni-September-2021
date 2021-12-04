function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;

    let result = Number(firstNum) - Number(secondNum);

    let div = document.getElementById('result');
    div.textContent = result;
}