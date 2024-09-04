let string= "";
let display = document.querySelector(".screen");
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{
button.addEventListener('click' , (e)=>{
    if (e.target.innerHTML == "=")
    {
        string = eval(string);
        display.value = string;
    }
    else if (e.target.innerHTML == "Del")
    {
        string = display.value.slice(0,-1);
        display.value =string;
    }
    else if (e.target.innerHTML == "AC")
        {
            display.value ="";
        }
    else
    {
        string = string + e.target.innerHTML;
        display.value = string;
    }

});
});