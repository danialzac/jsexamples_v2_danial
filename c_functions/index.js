// 1. Writing a function declaration
function ftnGreeting(salutation, user){

    const msg = `Hi, ${salutation} ${user}.`;
    
    return msg; 
}

console.log( ftnGreeting("Mr.", "Jones") );

// 2. Function returning a sum of two values
// 2.1. Equip ftnAdd to handle non-existent ARGUMENTS (passed to its parameters)
function ftnAdd(a = 0, b = 0){
    const result = a + b;
    return result;
}

const sum = ftnAdd(10, 5);   // ftn will sent over 2 ARGUMENTS
console.log(sum);            // 15

const anothersum = ftnAdd(); // Passing in ZERO ARGUMENTS
console.log(anothersum);

//3. Arrow Function
const anotherftnGreeting = (salutation = "", name="") => {

    
    if(salutation.length == 0 && name.length ==0). /* handle empty string values */
        return "PLease enter your salutation and name.";    
  //otherwise return the greeting
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
//otherwise, return the appropriate feedback
};
console.log(anotherftnGreeting)("Mr.","Magoo");
console.log(anotherftnGreeting());  // nO PARAMETER IS PASSED TO FUNCTION anotherftnGreeting