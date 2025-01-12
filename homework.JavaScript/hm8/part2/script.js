let input = document.getElementById('input');
let output = document.getElementById('output');
let btn = document.getElementById('btn');
let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let thousands = ["", "thousand", "million"];
function numberToWords(num) {
    if (num === 0) {
        return "zero";
    }
    let word = "";
    let thousandI = 0;
    while (num > 0) {
        if (num % 1000 !== 0) {
            let part = convert(num % 1000);
            if (thousands[thousandI] !== "") {
                part += " " + thousands[thousandI];
            }
            word = part + " " + word;
        }
        num = parseInt(num / 1000);
        thousandI++;
    }
    return word.trim();
}

function convert(num) {
    let word = "";
    let hundreds = num % 1000;
    if (hundreds >= 100) {
        word += ones[parseInt(hundreds / 100)] + " hundred ";
        num = num - (parseInt(hundreds / 100) * 100);
    }
    if (num >= 20) {
        let tensDigit = num % 100;
        word += tens[parseInt(tensDigit / 10)] + " ";
        num = num - (parseInt(tensDigit / 10) * 10);
    }

    if (num >= 10) {
        word += teens[num - 10];
        num = 0;
    }
    if (num > 0) {
        word += ones[num];
    }
    return word.trim();
}
btn.addEventListener('click', function () {
    let inputValue = parseInt(input.value);
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 1000000) {
        output.textContent = "enter a number between 0 and 1,000,000";
    } else {
        output.textContent = numberToWords(inputValue);
    }
});