let runningTotal = 0;
let buffer = "0";
let displayBuffer;
let prevOperator = null;
let isEqualPressed = false;
let isOperatorPressed = false;
let tempBuffer;

const screen = document.querySelector('.screen');
const numberButton = document.querySelectorAll('.num');
const checkNumButton = document.querySelector('.num');

function isButtonDisabled() {
    if (checkNumButton.disabled) {
        numberButton.forEach(num => {
            num.disabled = false;
        });
    }
}

function buttonClick(value) {
    if (isNaN(value)) {
        isButtonDisabled()
        handleSymbol(value);
    } else {
        handleNumber(value);
    }

    if (buffer === '0') {
        displayBuffer = runningTotal;
    }

    screen.innerText = displayBuffer;
}

function keyPress(value) {
    switch(value) {
        case 48: 
            value = '0';
            break;
        case 49:
            value = '1';
            break;
        case 50:
            value = '2';
            break;
        case 51:
            value = '3';
            break;
        case 52:
            value = '4';
            break;
        case 53:
            value = '5';
            break;
        case 54:
            value = '6';
            break;
        case 55:
            value = '7';
            break;
        case 56:
            value = '8';
            break;
        case 57:
            value = '9';
            break;
        default:
            return;
    }
    buttonClick(value);
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            isOperatorPressed = true;
            isButtonDisabled()
            break;
        case '←':
            handleDelete();
            break;
        case '=':
            handleEqual();
            break;
        case '÷':
        case '×':
        case '−':
        case '+':
            handleMath(symbol);
            break;
    }
}

function handleDelete() {
    if (buffer.length === 1) {
        buffer = '0';
    } else {
        buffer = buffer.substr(0, buffer.length - 1);
        displayBuffer = buffer;
    }

    if (buffer.length < 12) {
        numberButton.forEach(num => {
            num.disabled = false;
        });
    }
}

function handleEqual() {
    if (prevOperator === null) {
        return;
    }

    flushOperation(parseInt(buffer));

    prevOperator = null;
    isOperatorPressed = false;

    buffer = runningTotal;
    displayBuffer = buffer;
    runningTotal = 0;
    
    isEqualPressed = true;
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const floatBuffer = parseFloat(buffer);
    
    if (runningTotal == 0) {
        runningTotal = floatBuffer;
    } else {
        flushOperation(floatBuffer);
    }

    prevOperator = symbol;
    isOperatorPressed = true;
    buffer = '0';

}

function flushOperation(intBuffer) {
    if (prevOperator === '÷') {
        runningTotal /= intBuffer;
    } else if (prevOperator === '×') {
        runningTotal *= intBuffer;
    } else if (prevOperator === '−') {
        runningTotal -= intBuffer;
    } else {
        runningTotal += intBuffer;
    }
    
    runningTotal = Math.round(runningTotal * 1e11) / 1e11;
}

function handleNumber(numberString) {
    
    if (buffer === "0") {
        buffer = numberString;
    } else if (!isOperatorPressed && isEqualPressed) {
        buffer = numberString;
        isEqualPressed = false;
    } else if (isEqualPressed) {
        buffer += numberString;
        isEqualPressed = false;
    } else {
        buffer += numberString;
    }

    if (buffer.length > 11) {
        numberButton.forEach(num => {
            num.disabled = true;
        });
    }

    displayBuffer = buffer;
}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        });
    document.addEventListener('keydown', e => {
            keyPress(e.keyCode);
        });
}

init();

// dont disable buttons, just fix screen
// fix overflow for runningTotal
// fix button overflow