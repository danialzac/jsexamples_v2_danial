//1c.type casting

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

//lets try abit of a trivia using a prompt in the web browser
// TRY THE THREE scenarios;
//1.  Use"   " in the prompt   // true  / fa;se
//2. Use "James" in the prompt.  // true  / fa;se
//3. Use "" (an empty string) in the prompt  // true  / fa;se
function greetUser(){
    let userName = prompt("Please enter your name:");
    
    if(userName.trim()){    // "  " will be trimmed, guard rail to prevent spaces being used
        alert(`Welcome to FSD ${userName}!!!`);
    }else{
        alert("We did not receive your name.");
    }
}
 
greetUser();
 
 


