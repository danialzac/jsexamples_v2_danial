//import the prompt-sync library
const prompt = require ('prompt-sync')({signint:true}) //allows CTRL+c TO TERMINATE the app




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
 
 


