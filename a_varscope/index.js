// 1. Primitive types 
// let pi = 3.142;
let pi = 3.142;
console.log(typeof pi);

let strValue = "Hello"; // camel case naming convention (best practice)
console.log(typeof strValue);

let boolValue = true; // console.log(typeof boolValue);   varriable storing a boolean of true
console.log(typeof boolValue);

let nullValue = null;           // Variable of null value (object)
console.log(typeof nullValue)

let undefinedValue;          //Variable tha is declared But unintialised
console.log(typeof undefinedValue);

/* 2. Non-primitive JS Data Types (Reference Data Types) */
/* ***************************************************** */

// 2.1. Arrays
let arr = ["a", "b", "c"]; // initialise an array with 3 elements
console.log(arr);

let faang = new Array();  //Declare a new Instance of Array called faang
faang[0] = "FB"; // store the value  of FB to index position 0 of the array , assigning a value to array element by index: 0
faang[1] = "AMZN"; // store the value  of AMZ to index position 2 of the array, assigning a value to array element by index: 1
console.log(faang)// print the array, accessing thw value from index position 0 from array, faang
console.log(faang[1])// accessing thw value from index position 1 from array, faang

// 2.2. Objects
let person = { name: "Sam", age: 42 }; // initialise an object with 2 key/value pairs, create a javascript object with 2 key values pairs (name, age)
console.log(`Name: ", ${person.name}`);
console.log(`Name: ", ${person.age}`);



let vehicle = new Object(); // declare a new Object, but not initialised,declaring a new Instance of an Object called vehicle
vehicle.name = "Suzuki"; // assign a key/value pair for object vehicle
vehicle.model = "Swift"; // assign another key/value pair for object vehicle
vehicle.color + "Blue";  // other related properties can be associated with the vehicle object

let announce = function () { console.log("Hello JS") }. //declaricn a new object "announce" as a function
    announce(); //Invoke and execute the new object "announce()"

let announce2 = () => {
    console.log("Hello JS again."); //declaring a new object "announce2" as an ARROW function
    announce2(); //Invoke and execute the arrow function "announce2()"
}

//3. Declaring variables using ler, const and var
let PI = 3.14159.     // Declare a immutable variable callerd PI
    //PI = 3.142;            //UPDATE pi's value will not be possible


    console.log(greeting); // ? is the variable greeting accessible here?
console.log(typeof greet);  //*functions are objects in Javascript


function Welcome() {
    var localMsg = "WELCOME TO FULL STACK DEVELOPMENT";  //I ALSO HAVE LOCALMSG HERE
    console.log{ localMsg }

}

//4.type casting

//converting values to a number using the number object
console.log(Number("3.142"))
console.log(Number(Math.PI));
console.log(Number("   "));
console.log(Number(""));
console.log(Number("88  88" ));
console.log(Number("Steve"));


// Converting values to strings using the sting object
console.log(String(new Date())); // formated todays date n time
console.log(String("98765"));   //"98765"
console.log(String(98765));  // 98765`

//converting values into boolean
console.log(Boolean("1"));  //true (truthy response)
console.log(Boolean(1));   //true
console.log(Boolean("0"));  //true (truthy response)
console.log(Boolean(0));   //false
console.log(Boolean("0"));//true (truthy response)
console.log(Boolean(""));  //false (falsy resonpse)
console.log(Boolean("John"));  // true

