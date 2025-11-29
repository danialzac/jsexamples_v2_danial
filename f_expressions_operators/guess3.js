let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== "q") {

    console.log(userInput);

    // correct answer
    if (Number(userInput) === 10) {
        alert("You are correct!");
        break;
    }

    // input empty string
    else if (!userInput) {
        userInput = prompt("Your answer is empty. Please enter a value").toLowerCase();
    }

    // wrong answer
    else {
        const hint = (userInput < ans) ? "Higher" : "Lower";
        alert(`Answer incorrect. ${hint} number please.`);
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }
}
