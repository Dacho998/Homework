console.log('Connected')

function calculateAge (birthYear, curretYear){
    let age = curretYear-birthYear;
    console.log (`You are ${age} years old`);
}
calculateAge (1998, 2024)
calculateAge (1966, 2024)
calculateAge (1975, 2024)




// --------------------------------------------------------------------------------------------------------------------------------------



// function calculateAge () {
// let birthYear = parseInt(prompt('Enter your year of birth'));
// let curretYear = 2024;
// let year = curretYear - birthYear;
// if (Number.isNaN (birthYear)){
//     alert ('You entered an invalid number.');
// }else { 
//     alert (`your age is: ${year} `);
//  }
// }
// calculateAge ()