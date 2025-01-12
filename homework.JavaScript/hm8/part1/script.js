let input = document.getElementById('input');
let number = document.getElementsByClassName('number');
let operator = document.getElementsByClassName('operator');
let ac = document.getElementById('AC');
let equals = document.getElementById('equals');
function calculate(calculation) {
    if (calculation.includes('/0')) {
        return 'Error';  
    }
    let result = new Function('return ' + calculation)();
    if (!Number.isNaN(result)) {
        return result; 
    } 
}
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        input.value += number[i].textContent;
    });
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        input.value += operator[i].textContent;
    });
}
ac.addEventListener('click', function () {
    input.value = '';
});
equals.addEventListener('click', function () {
    if (input.value !== '') {
        input.value = calculate(input.value);
    }
});