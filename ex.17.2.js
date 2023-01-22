const btn1 = document.getElementById("btnOne");
const btn2 = document.getElementById("btnTwo");
const btn3 = document.getElementById("btnThree");
const btn4 = document.getElementById("btnFour");
const input1 = document.getElementById("input");




btn1.onclick = () => {
    //let field = document.getElementById("paraOne").innerHTML;
    //field++;
    //console.log(field);
    document.getElementById("paraOne").innerHTML =
        Number(document.getElementById("paraOne").innerHTML) + 1;

};
const colors = ["red", "orange", "yellow", "blue", "green"];
let index = 0
btn2.onclick = () => {
    document.getElementById("paraTwo").style.color = colors[index % colors.length];
    index++;
    // if (index ==5){
    //     index = 0;
    //  }
};

btn4.onclick = () => {
let a = Number(document.getElementById("numberOne").value);
let b = Number(document.getElementById("numberTwo").value);
document.getElementById("paraThree").innerHTML = a * b;
};

input1.onput = () => {
    document.getElementById("paraFour").innerHTML = input1.value;
};