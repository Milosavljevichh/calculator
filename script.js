
// vars
const numDisplay = document.querySelector('#display');
const additionBtn = document.querySelector('#additionBtn');
const substractionBtn = document.querySelector('#substractionBtn');
const multiplierBtn = document.querySelector('#multiplierBtn');
const dividerBtn = document.querySelector('#dividerBtn');

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
    if (numDisplay.innerHTML.length <= 16) {
        numDisplay.innerHTML = numDisplay.innerHTML + 0;
}};
function addOne() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 1;
    }
};
function addTwo() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 2;
    }
};
function addThree() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 3;
    }
};
function addFour() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 4;
    }
};
function addFive() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 5;
    }
};
function addSix() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 6;
    }
};
function addSeven() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 7;
    }
};
function addEight() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 8;
    }
};
function addNine() {
    checkOperator();
    if (numDisplay.innerHTML.length <= 16) {
    numDisplay.innerHTML = numDisplay.innerHTML + 9;
    }
};

//checks all functions
function checkAllOperators() {
    checkPlus();
    checkMinus();
    checkMultiplier();
    checkDivider();
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

function checkMultiplier() {
    if (selectedOperator === true && operator === 'x') {
        multiplierBtn.disabled = true;
    } else if (operator !== 'x') {
        multiplierBtn.disabled = false;
    }
};

function checkDivider() {
    if (selectedOperator === true && operator === '/') {
        dividerBtn.disabled = true;
    } else if (operator !== '/') {
        dividerBtn.disabled = false;
    } 
}


//adds numbers
function addPlus() {
    if (operator !== '+' && selectedOperator !== true){
        operate();
    }
    selectedOperator = true;
    operator = '+';
    checkAllOperators();
    storedValue = Number(numDisplay.innerHTML);
};

function addMinus() {
    if (operator !== '-' && selectedOperator !== true){
        operate();
    }
    selectedOperator = true;
    operator = '-';
    checkAllOperators();
    storedValue = Number(numDisplay.innerHTML);
};

function addMultiplier() {
    if (operator !== 'x' && selectedOperator !== true){
        operate();
    }
    selectedOperator = true;
    operator = 'x';
    checkAllOperators();
    storedValue = Number(numDisplay.innerHTML);
};

function addDivider() {
    if (operator !== '/' && selectedOperator !== true){
        operate();
    }
    selectedOperator = true;
    operator = '/';
    checkAllOperators();
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
    } else if (operator === 'x') {
        selectedOperator = false;
        numDisplay.innerHTML = Number(storedValue) * Number(numDisplay.innerHTML);
        operator = '';
        checkMultiplier();
    } else if (operator === '/') {
        selectedOperator = false;
        numDisplay.innerHTML = Number(storedValue) / Number(numDisplay.innerHTML);
        operator = '';
        checkDivider();
    }
};

//clear
function clearCalculator() {
    console.log('im clicked')
    storedValue = 0;
    operator = '';
    selectedOperator = false;
    numDisplay.innerHTML = '';
    checkAllOperators();
};