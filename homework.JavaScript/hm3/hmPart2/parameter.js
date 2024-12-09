console.log('Connected')

function age(Dog, Human) {
    let Number = typeof Human === "number" && typeof Dog === "number";
    if (Number) {
        let result = Dog * Human;
        console.log(`Your dog's age: ${result}`);
    } else {
        console.log('Some of the values were not number');
    }
};
age(7, 3)



// -------------------------------------------------------------------------------------------------------------------------------------



// let age = prompt('Enter your age: ');
// let dogAge = 7;
// let calculation = age * dogAge;
// alert (`your dog age is: ${calculation}`)



// -------------------------------------------------------------------------------------------------------------------------------------



// function age(Dog, Human) {
//     let Number = typeof Human === "number" && typeof Dog === "number";
//     if (Number) {
//         let result = Dog / Human;
//         console.log(`Your human age: ${result}`)
//     } else {
//         console.log('Some of the values were not number')
//     }
// };
// age(21, 7)


