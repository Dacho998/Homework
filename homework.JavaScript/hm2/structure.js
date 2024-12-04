//***short way***

// let zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
// let year = prompt("Enter your year of birth to find your Chinese Zodiac Sign:");
// let calculation = (year - 4) % 12;
// let Signs = zodiac [calculation]
// alert(`Your Chinese Zodiac Sign is: ${Signs}`);
// console.log(`Your Chinese Zodiac Sign is: ${Signs}`);

//-----------------------------------------------------------------------------------------------

//***long way***

let year = prompt("Enter your year of birth to find your Chinese Zodiac Sign:");
let calculation = (year - 4) % 12;
if (calculation === 0) {
    alert(`Your Chinese Zodiac Sign is: Rat`);
}
else if (calculation === 1) {
    alert(`Your Chinese Zodiac Sign is: Ox`);
}
else if (calculation === 2) {
    alert(`Your Chinese Zodiac Sign is: Tiger`);
}
else if (calculation === 3) {
    alert(`Your Chinese Zodiac Sign is: Rabbit`);
}
else if (calculation === 4) {
    alert(`Your Chinese Zodiac Sign is: Dragon`);
}
else if (calculation === 5) {
    alert(`Your Chinese Zodiac Sign is: Snake`);
}
else if (calculation === 6) {
    alert(`Your Chinese Zodiac Sign is: Horse`);
}
else if (calculation === 7) {
    alert(`Your Chinese Zodiac Sign is: Goat`);
}
else if (calculation === 8) {
    alert(`Your Chinese Zodiac Sign is: Monkey`);
}
else if (calculation === 9) {
    alert(`Your Chinese Zodiac Sign is: Rooster`);
}
else if (calculation === 10) {
    alert(`Your Chinese Zodiac Sign is: Dog`);
}
else if (calculation === 11) {
    alert(`Your Chinese Zodiac Sign is: Pig`);
}


//-----------------------------------------------------------------------------------------------

// ***task***

let input = prompt("Tell me your amount of money:");
let amount = parseInt(input);
if (isNaN(amount)) {
    alert("Please enter a number.");
    console.log("Please enter a number.");
} else {
    if (amount >= 40000) {
        alert("NICE! You should book a vacation! :D ");
        console.log("NICE! You should book a vacation! :D");
    } else {
        alert("You should save for a vacation. :( ");
        console.log("You should save for a vacation. :(");
    }
}