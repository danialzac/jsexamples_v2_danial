let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput) {

    if (userInput === "q")
        break;

    else if (userInput == 10 || userInput === "ten") { 
        alert("you are correct");
        break;
    }

    else if (!userInput) {
        userInput = prompt("answer is empty. please enter a value");
        if (userInput) userInput = userInput.toLowerCase();
    }

    else if (userInput != 10 && userInput !== "ten") {  
        // FIXED: useInput → userInput
        alert("Answer incorrect.");
        userInput = prompt("Guess the number, Press q or Q to quit."); // FIXED
        if (userInput) userInput = userInput.toLowerCase();
    }
}





        
      //if(userInput.toLowerCase()){

        //if(userInput.toLowerCase() === 'q'
      


         i//f(userInput == ans){ // if user's answer is a number 10   
        //alert("You are correct!!");
       // break;
        
    //}else if(!userInput){ // else if the user's input is undefined == false (!false == true)
        
        //userInput = prompt("Your answer is empty. Please try again."); 
        
    //}
    //else{
        
      //  userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");
        
    

