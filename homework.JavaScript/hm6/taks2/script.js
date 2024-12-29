console.log('connected')

function sumOfNumbers() {
    let numbers = [12, 35, 32, 30];
    let numberArray = document.getElementById('num');
    let summary = document.getElementById('sum');
    let equasion = document.getElementById('equ');
    let sum = 0;
    let matequasion = '';
    for (i = 0; i < numbers.length; i++) {
        numberArray.innerHTML += `<li>${numbers[i]}</li}`;
        sum += numbers[i];
        summary.innerHTML = `the result is: ${sum}`;
        if (i===0) {
            matequasion += `${numbers[i]}`;
        } else {
            matequasion += `+${numbers[i]}`;
        }
        equasion.innerHTML = `The result is: ${matequasion} = ${sum}`;
    }
}
sumOfNumbers()
