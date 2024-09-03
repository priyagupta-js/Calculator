
let buttons = document.querySelectorAll("input");

// one.addEventListener("click" , addition());

function display(val){

// screen.value = one.value ;
// screen.value = two.value;

screen.value +=val;
}

// when clicked on the AC button , all the contents should be removed
function allClear()
{
screen.value = "";
}

// delete the last element 
function Del(){
    screen.value = screen.value.slice(0,-1);
    
}
function addition(){
console.log("Bye!")
}