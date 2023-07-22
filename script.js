
// vars
const numDisplay = document.querySelector('#display');

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


//adds numbers
function addPlus() {
        // * if add method wasn't clicked, store the value thats currently
        // * inside of display
    if (operator !== '+') {
    storedValue = numDisplay.innerHTML;
    } else {
        // * else if method was clicked and is clicked again, store the 
        // * previous stored value + current display value
        storedValue = Number(storedValue) + Number(numDisplay.innerHTML);
    }
    operator = '+';
    selectedOperator = true;
};

//does the operations
function operate() {
    if (operator === '+') {
        console.log(Number(storedValue) + Number(numDisplay.innerHTML));
        numDisplay.innerHTML = Number(storedValue) + Number(numDisplay.innerHTML);
        operator = '';
        selectedOperator = false;
    } 
};