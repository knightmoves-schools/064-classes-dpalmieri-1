class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let guests = [
    new Person('Jacob','Michigan'),
    new Person('Toyota','Detroit'),
    new Person('Jklas','Person'),
];

document.getElementById('result').innerHTML = guests;