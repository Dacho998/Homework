console.log('connected')

function maxMin(numbers){
    let max=numbers[0];
    let min=numbers[0];
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>max){
            max=numbers[i]
        }
        if(numbers[i]<min){
            min=numbers[i]
        }
    }
    sum=max+min;
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}
let x=maxMin([13, 43, 11, 34, 23]);
console.log(x)