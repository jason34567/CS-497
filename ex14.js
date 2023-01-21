//branches and conditionals
// let x = document.getElementById('input').value;
// let y = prompt("enter a number: ");
// console.log(x);
// console.log(y);

let x = document.getElementById('input').value;
let y = prompt("enter a number");
console.log(x);
console.log(y);
console.log(typeof(x));
console.log(typeof(y));

if (x === 5) {
    console.log("x is 5");
} else {
    console.log("x is not 5");
}
let show = (x==5) ? "x is 5" : "x is not 5";
 console.log(show);




let age = prompt("Enter your age: ");
console.log(age);

if (age > 18) {
    console.log("Old Enough")
} else {
    console.log("Too Young")
}


//Task2. Write a JavaScript code that will check the variable temperature. 
let weather = document.getElementById("temp").value;
console.log(weather);
if (weather < 32){
    document.getElementById("weather").innerHTML = "Freezing Weather";
} else if (weather >= 32 && weather <= 43) {
    document.getElementById("weather").innerText = "HELLA COLD OUTSIDE";
} else if (weather >= 42 && weather <= 53) {
    document.getElementById("weather").innerText = "STILL KINDA BRICK WEATHER";
} else if (weather >= 52 && weather <= 63) {
    document.getElementById("weather").innerText = "Todays weather is nice";
}


// Temperature range    |	Text
// Temp < 32	        | Freezing weather
// Between 32 and 41	| Very Cold weather
// Between 42 and 51	| Cold weather
// Between 52 and 61	| It’s nice today!
// Above 61	            | It’s warm today!

// let weather = document.getElementById("temp").value;
// console.log(weather);
// document.getElementById("weather").innerText = "weather";