
let numberArray = [2, 5, 10, 3];
let dividableNumbers = [8, 4];


// basic math functions
//all of the 4 basic functions passed the tests and are working properly

//adding numbers
function addNumbers(numbers) {return numbers.reduce((total, num) => total + num)};

//substracting numbers
function substractNumbers(numbers) {return numbers.reduce((total, num) => total - num)};

//multiplying numbers
function multiplyNumbers(numbers) {return numbers.reduce((total,num) => total * num)};

//dividing numbers
function divideNumbers(numbers) {return numbers.reduce((total, num) => total/num)};

