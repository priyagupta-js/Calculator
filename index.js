
let one = document.getElementById("one")
let two = document.getElementById("two");
let plus = document.getElementById("plus");
let screen= document.getElementById("screen");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
// let allClear = document.getElementById("allClear");
// onclick function added to each element ; passed the number as argument 
// append the value to the value of screen

function display(val){

// screen.value = one.value ;
// screen.value = two.value;

screen.value +=val;
}

// when clicked on the AC button , all the contents should be removed
function allClear()
{
screen.value = 0;
}
function Del(){
    screen.value = screen.value.slice(0,-1);
    
}
function addition(){

}