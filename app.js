
//slider
const range = document.querySelector('#change-value');
//span displaying value
const displayNumber = document.querySelector("#display-number");
const numberInputCheckbox = document.querySelector("#number-checkbox");
const letterInputCheckbox = document.querySelector("#letter-checkbox");
const specialCharCheckbox = document.querySelector("#special-characters-checkbox");
const checkboxes = document.querySelectorAll(".checkbox");
console.log(checkboxes)
let numbers = '123456789'.split('');
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let specialCharacters = `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`.split('');

displayNumber.textContent = 0;
// match value of range input with span right hand
function handleChange(){
    displayNumber.textContent = range.value;
}
range.addEventListener('change', handleChange)

// add a new class on click event
checkboxes.forEach(element=>{
element.addEventListener('click', function(){
    if(element.checked){
        element.classList.add('checked');
    } else {
        element.classList.remove('checked');
    }
})
})








