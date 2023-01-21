let college = 'York College';
const myName = 'Jane Doe';

console.log(college);
console.log(myName);

const favoriteSubject = 'Math';
//Console.log the text "My name is: " follows by myName variable.
console.log("My name is:", myName, ", I go to ", college);
console.log("My name is:" + myName);
//Console.log the text "My college is: " follows by college variable.
//Reassign the value stored in favoriteSubject to the string "Coding", is it possible?
console.log("My college is", college);
//can you console.log(number1) here?
// console.log(number1);
//Declare a new variable named 'number1' and give it the value of 10.

let number1 = 10;
//Declare a new variable named 'number2' and give it the value of 15.
let number2 = 15;

//console.log the summation of number1 and number2 in the following format
//Expected output: The sum is 25
//console.log the product of number1 and number2 in the following format
//Expected output: The product is 150
let sum = number1+number2;
console.log("The sum is", sum);
//Declare a new variable named 'check' and give it the value of true (Boolean).
//console.log check and see the value, try also with false.
let product = number1+number2;
console.log("The product " + product);

let check = false
console.log(check);

document.getElementById('demo').innerText = "The sum is " + (number1 + number2);

