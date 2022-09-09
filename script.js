let displayValue = "0";
const buttons = document.querySelectorAll('button');

function updateDisplayValue() {
    const display = document.querySelector('#display');
    display.textContent = displayValue;    
};

updateDisplayValue();

// fucntions representing math operators
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;
const subtract = (num1, num2) => num1 - num2;
const add = (num1, num2) => num1 + num2;

//function 'operate' takes an operator and 2 numbers and then calls one 
// of the math operators functions on the numbers
const operate = (operator, num1, num2) => operator(num1, num2);

arr = [];
buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        if (e.target.classList.contains("operand")) {
            inputOperand(e.target.value);           
        } else if (e.target.classList.contains("operator")) {
            inputOperator(e.target.value);
        } else if (e.target.value == "plus/minus") {
            displayValue = displayValue * -1
        } else if (e.target.value == "clear") {
            displayValue = '0';
            updateDisplayValue();
        };
        updateDisplayValue();
    });
    
});

function inputOperand(operand) {
    console.log(operand)
};

function inputOperator(operator) {
    console.log(operator)
};
