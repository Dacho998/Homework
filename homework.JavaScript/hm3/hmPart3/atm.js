console.log('Connected')

function atm () {
let balance = 500
let withdraw = parseInt(prompt('Enter the amount you want to withdraw.'));
if (Number.isNaN(withdraw)){
    alert ('Please enter a valid number.');  
}
else if (withdraw > balance){
 alert ("You don't have enough money.")
} 
else {
    balance -= withdraw
alert (`You withdraw : ${withdraw} `);
alert (`Money left: ${balance}`); 
}
}
atm ()
