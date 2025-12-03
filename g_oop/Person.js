// a) Create a person object
const person = { name: "John" };
console.log(person);

// b) In JavaScript, constructor functions CAN be used to create objects
// Note: only 2 properties are available in the constructor function. 
function Person(fName, lName) { 
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new Person("John", "Doe"); 
const person2 = new Person("Steve", "Smith");

console.log(person1); 
console.log(person2);

// c) Add a new PROPERTY gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits gender property from it constructor ftn too.

Person.prototype.gender = "Male";
Person.prototype.gendfe = "Basic";

//what is the outcome when I print out person1 and person2

console.log(person1.gender); 
console.log(person2.gender);

person2.membership = "Premium";

console.log(person1.firstName, person1.lastName, person1.membership);
console.log(person2.firstName, person2.lastName, person2.membership);

// d) Add a new METHOD gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits getFullName method from its constructor ftn too.

Person.prototype.getFullName = function() { 
    return this.firstName + " " + this.lastName;
};

console.log("Greetings " + person1.getFullName() + " " + (person1.membership || ""));
console.log("Greetings " + person2.getFullName() + " " + (person2.membership || ""));

//e) but conventionally, we should use Uppercases to create a new Object

function animal(limbs, species){
    this.limb = limbs;
    this.species = species;

}

const iguana = new animal (4, "lizard");

console.log("Iguana Limbs:", iguana.limb, "Iguana Species;", iguana.species);