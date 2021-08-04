const inputName=document.querySelector("#name-user");
const inputDOb=document.querySelector("#dob-user");
let submitBtn= document.querySelector("#btn-submit");
const outputResult=document.querySelector("#result");

function clickHandler()
{
    const [year , month, date] = inputDOb.value.split("-");
    let out=checkLeapYear(year);
    outputResult.innerText=out;
}

function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return(year + ' is a leap year');
    } else {
        return(year + ' is not a leap year');
    }
}

submitBtn.addEventListener("click",clickHandler)
