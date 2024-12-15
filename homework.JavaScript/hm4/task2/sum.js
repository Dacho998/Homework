console.log('connected')
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
let numbers = [23, 11, 43, 12, 5];
let x = sum(numbers);
console.log(x);
