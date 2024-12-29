console.log('connected')

let newTitle=document.getElementById("myTitle");
newTitle.innerText=("That's right! awesome page");

let firstP = document.getElementsByClassName('paragraph')[0];
firstP.innerText=("Yep this exercise it's pretty easy");

let secondP=document.getElementsByClassName('paragraph')[1];
secondP.innerText=("Yep i see it's easy");

let text=document.getElementsByTagName('text');
text.innerText=('You are doing great job');

let header=document.getElementsByTagName('h1')[1];
header.innerText=('And this is the new text.');

let secondHeader=document.getElementsByTagName('h3')[0];
secondHeader.innerText=('And this is also changed');