console.log('connected')
function sumOfNumbers(){
    let numbers=document.getElementsByTagName('li');
    let sum=0
    let matequasion = '';
    let equasion = document.getElementById('equ');
    for (let i = 0; i < numbers.length; i++){
        let value= parseInt(numbers[i].textContent);
        sum+=value;
        document.getElementById('sumNum').textContent = 'the result is: ' + sum;
        if (i===0) {
            matequasion += `${numbers[i].textContent}`;
        } else {
            matequasion += `+${numbers[i].textContent}`;
        }
        equasion.innerHTML = `Sum of all numbers: ${matequasion} = ${sum}`;
    }  
}

sumOfNumbers()