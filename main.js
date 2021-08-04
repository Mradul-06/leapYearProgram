console.log("hi")

const inputName=document.querySelector("#name-user");
const inputDOb=document.querySelector("#dob-user");
let subBtn= document.querySelector("#btn-submit");

function clickHandler()
{
    console.log(inputDOb.value.getFullYear());
    console.log(inputDOb.value)
    console.log(inputName.value)
    console.log("clicked")
}

function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


subBtn.addEventListener("click",clickHandler)
