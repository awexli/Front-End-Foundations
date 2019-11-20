const firstName = document.getElementById("first-name");
const numberToCountUpTo = document.getElementById("n");
const displayNumbers = document.getElementById("display-numbers");
const displayName = document.getElementById("display-name");

function buttonClick() {

    if (isValidNumber()) {
        countNumber();
    }

    if (isValidName()) {
        outputName();
    }
}

function isValidNumber() {
    let number = numberToCountUpTo.value;
    let message = displayNumbers;

    try {
        if (number == "") throw "empty";
        if (isNaN(number)) throw "not a number";
        if (number > 200) throw "too high";
        if (number < 0) throw "too low";
    } catch (err) {
        message.innerHTML = "Input is " + err;
        return false;
    }
    return true;
}

function countNumber() {
    let n = numberToCountUpTo;
    let counter = 0;
    let numbers;

    while (counter <= n.value) {
        if (counter == 0) {
            numbers = counter;
        } else {
            numbers = numbers + ", " + counter;
        }
        counter = counter + 1;
    }
    
    displayNumbers.innerHTML = numbers;
}

function isValidName() {
    let alphaExp = /^[a-zA-Z]+$/; // all upper & lower case letters
    let message = displayName;

    if (firstName.value.match(alphaExp)) {
        return true;
    } else {
        message.innerText = "Invalid Name";
        firstName.focus();
        return false;
    }
}

function outputName() {
    displayName.innerHTML = firstName.value;
}