
// vars
const numDisplay = document.querySelector('#display');
const additionBtn = document.querySelector('#additionBtn');
const substractionBtn = document.querySelector('#substractionBtn');

let storedValue = 0;
let operator = '';
let selectedOperator = false;

//check for clearing display
function checkOperator() {
    if (selectedOperator === true){
        numDisplay.innerHTML = ' ';
        selectedOperator = false;
    }
}


//add numbers after the number button is clicked
function addZero() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 0;
};
function addOne() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 1;
};
function addTwo() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 2;
};
function addThree() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 3;
};
function addFour() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 4;
};
function addFive() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 5;
};
function addSix() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 6;
};
function addSeven() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 7;
};
function addEight() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 8;
};
function addNine() {
    checkOperator();
    numDisplay.innerHTML = numDisplay.innerHTML + 9;
};

//checks all functions
function checkAllOperators() {
    checkPlus();
    checkMinus();
}

//disable and enable btns
function checkPlus() {
    if (selectedOperator === true && operator === '+') {
        additionBtn.disabled = true;
    } else if (operator !== '+') {
        additionBtn.disabled = false;
    }
};

function checkMinus() {
    if (selectedOperator === true && operator === '-') {
        substractionBtn.disabled = true;
    } else if (operator !== '-') {
        substractionBtn.disabled = false;
    }
};

//adds numbers
function addPlus() {
    selectedOperator = true;
    operator = '+';
    checkAllOperators()
    storedValue = Number(numDisplay.innerHTML);
};

function addMinus() {
    if (operator !== '-' && selectedOperator !== true){
        operate();
    }
    selectedOperator = true;
    operator = '-';
    checkAllOperators()
    storedValue = Number(numDisplay.innerHTML);
};

//does the operations1
function operate() {
    if (operator === '+') {
        selectedOperator = false;
        numDisplay.innerHTML = Number(storedValue) + Number(numDisplay.innerHTML);
        operator = '';
        checkPlus();
    } else if (operator === '-') {
        selectedOperator = false;
        numDisplay.innerHTML = Number(storedValue) - Number(numDisplay.innerHTML);
        operator = '';
        checkMinus();
    }
};