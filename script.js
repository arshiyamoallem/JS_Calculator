// Simple JavaScript Web Calculator

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error';
    }   else {
        return num1 / num2;
    }
}

function squareRoot(num1) {
    if (num1 < 0) {
        return 'Error';
    }   else {
        return Math.sqrt(num1);
    }
}

function power(num1, num2) {
    return Math.pow(num1, num2);
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '*') {
        display.value += '×';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let result;
    try {
const expression = document.getElementById('display').value.replace('×', '*');
        
        if (expression.includes('+')) {
            const [num1, num2] = expression.split('+');
            result = add(parseFloat(num1),parseFloat(num2));
        }
        
        else if (expression.includes('-')) {
            const [num1, num2] = expression.split('-');
            result = subtract(parseFloat(num1),parseFloat(num2));
        }

        else if (expression.includes('*')) {
            const [num1, num2] = expression.split('*');
            result = multiply(parseFloat(num1),parseFloat(num2));
        }
        
        else if (expression.includes('/')) {
            const [num1, num2] = expression.split('/');
            result = divide(parseFloat(num1),parseFloat(num2));
        }

        else if (expression.includes('√')) {
            const [, num1] = expression.split('√');
            result = squareRoot(parseFloat(num1));
        }

        else if (expression.includes('^')) {
            const [num1, num2] = expression.split('^');
            result = power(parseFloat(num1),parseFloat(num2));        
        }
        
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value  = 'Error: Invalid expression.';
    }
}
