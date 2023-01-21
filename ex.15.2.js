//https://www.w3schools.com/js/js_function_definition.asp


function handleClickNumber() {
    let x = document.getElementById("input").value;
    document.getElementById("btn1").innerHTML = x
    // console.log(x);

}

function handleCheckWeather() {
    let weather = document.getElementById("temp").value;
    if (weather < 32) {
        document.getElementById("weather").innerHTML = "Freezing Weather";
    } else if (weather >= 32 && weather <= 43) {
        document.getElementById("weather").innerText = "BIG JACKET WEATHER";
    } else if (weather >= 42 && weather <= 53) {
        document.getElementById("weather").innerText = "ITS CHILLLY";
    } else if (weather >= 52 && weather <= 63) {
        document.getElementById("weather").innerText = "Todays weather is nice";
    } else {
        document.getElementById("weather").innerText = "Todays weather is warm";

    }
}
