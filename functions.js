// functions.js

// addTwoNumbers
/*
Function should add 2 numbers and return their sum.
There should be two arguments and parameters with one 
output. 
*/
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// sayHello
/*
Function should take in one parameter with a string
name being passed as an argument to produce a greeting
`Hi there ${name}` string output. In the case the name 
is "Will", we must output a diferent greeting "No more 
testing Will!"
*/
function sayHello(name) {
    if (name !== "Will") {
        return `Hi there ${name}!`;
    } else {
        return `No more testing ${name}!`;
    }
}

// buildCar
/*
Function should take in two parameters carColor
and carType to create a carDetails object. When 
properties/key value pairs are accessed, they 
should return the arguments passed into the 
parameters. If there are no arguments passed, 
return an empty object.
*/
function buildCar(carColor, carType) {
    if (carColor === undefined && carType === undefined) {
        return {};
    } else {
        let carDetails = {
            color : carColor,
            type : carType,
        }
        return carDetails;
    }
}



module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}