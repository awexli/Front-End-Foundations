let runningTotal = 0;
let buffer = "0";
let displayBuffer;
let prevOperator = null;
let isEqualPressed = false;
let isOperatorPressed = false;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }

    if (buffer === '0') {
        displayBuffer = runningTotal;
    }

    screen.innerText = displayBuffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            isOperatorPressed = true;
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

    displayBuffer = buffer;
}


function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        })
}

let checking = setInterval(check, 1000);
function check() {
    console.log("Op: " + isOperatorPressed + " Eql: " + isEqualPressed);
}

init();





