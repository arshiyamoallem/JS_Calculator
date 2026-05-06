const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your name ', name => {
    console.log('Hello ' + name + '\nWelcome to the JS Calculator');
    calculator();
});

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
        return 'Error: Division by zero is not allowed.';
    }   else {
        return num1 / num2;
    }
}

function calculator() {
    readline.question('Enter the first number: ', num1 => {
        readline.question('Enter the second number: ', num2 => {
            readline.question('Choose an operation (add, subtract, multiply, divide): ', operation => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let result;
                switch (operation) {
                    case 'add':
                        result = add(num1, num2);
                        break;
                    case 'subtract':
                        result = subtract(num1, num2);
                        break;
                    case 'multiply':
                        result = multiply(num1, num2);
                        break;
                    case 'divide':
                        result = divide(num1, num2);
                        break;
                    default:
                        console.log('Invalid operation. Please choose add, subtract, multiply, or divide.');
                        readline.close();
                        return;
                }
                console.log('The result is: ' + result);
                readline.close();
            });
        });
    });
}  
