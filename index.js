let string= "";
let display = document.querySelector(".screen");
let buttons = document.querySelectorAll(".button");

// symbols
let plus = document.getElementById("btn");
let minus = document.getElementById("btn");

// Array.from(buttons).forEach((button)=>{
// button.addEventListener('click' , (e)=>{
//     if (e.target.innerHTML == "=")
//     {
//         string = eval(string);
//         display.value = string;
//     }
//     else if (e.target.innerHTML == "Del")
//     {
//         string = display.value.slice(0,-1);
//         display.value =string;
//     }
//     else if (e.target.innerHTML == "AC")
//         {
//             display.value ="";
//         }
//     else
//     {
//         string = string + e.target.innerHTML;
//         display.value = string;
//     }

// });
// });