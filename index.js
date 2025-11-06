class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person1 = new Person('Jacob','Michigan');
let person2 = new Person('Toyota','Detroit');
let person3 = new Person('Jklas','Person');

function guests(persons){
    return `Guest List -  ${person1.firstName} ${person1.lastName}, ${person2.firstName} ${person2.lastName}, ${person3.firstName} ${person3.lastName}`;
}

document.getElementById('result').innerHTML = guests();