let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';


const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}


const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevInput = currentInput;
    };
    
    calculationOperator = operator;
    currentInput = '';
}

const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value); 
        updateScreen(currentInput); 
    }); 
});

const inputNumber = (number) => {
    if (currentInput === '0') {
        currentInput = number
    } else {
        currentInput += number 
    }
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentInput);
});

const calculate = () => {
    let result ='';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevInput) + parseFloat(currentInput);
            break
        case "-":
            result = parseFloat(prevInput) - parseFloat(currentInput);
            break
        case "*":
            result = prevInput * currentInput;
            break
        case "/":
            result = prevInput / currentInput;
            break
        case "%":
            result = parseInt(prevInput) % parseInt(currentInput);
            break
        default:
            break
    }
    currentInput = result;
    calculationOperator = '';

}


const ac = document.querySelector(".all-clear");

const clear = () => {
    prevInput = '';
    calculationOperator = '';
    currentInput = '';
}

ac.addEventListener('click', () => {
    clear();
    updateScreen(currentInput);
});


const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
});

const inputDecimal = (dot) => {
    if(currentInput.includes(".")) {
        return
    } 
    currentInput += dot
}


