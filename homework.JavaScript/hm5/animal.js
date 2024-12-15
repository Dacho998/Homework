console.log('connected')
let dog = {
    name: prompt("Enter a dog name"),
    kind: prompt("Enter a dog kind"),
    speak: function () {
        let dogSpeak = (`My name is ${this.name}, and im the best ${this.kind} dog, bro!!`);
        alert(dogSpeak);
        console.log(dogSpeak)
    }
}
dog.speak()
