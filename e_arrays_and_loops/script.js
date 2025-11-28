// ---------
// 1. ARRAYS
// ---------

// Basic array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
const mappedArray = [1, 2, 3, 4, 5, 6];
const multiplyArrBy10 = mappedArray.map(item => item * 10);
console.log(multiplyArrBy10);

// ii - filter function of an array
const vowels = ["a", "e", "i", "o"];

const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

// iii - sort function of an array
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order (numbers)
const descendNums = nums.sort((a, b) => a > b ? -1 : 1);
console.log(descendNums); // [6, 5, 4, 3, 2, 1]

// Sort by ascending order (names A → Z)
const ascendingNames = names.sort((a, b) => a > b ? 1 : -1);
console.log(ascendingNames); // ['Chris', 'James', 'Lenon', 'Max']

// Sort by descending order (names Z → A)
const descendNames = [...names].sort((a, b) => a > b ? -1 : 1);
console.log(descendNames);

// Default ascending order
const ascendNames = [...names].sort();
console.log(ascendNames);

// iv - reduce function of an array
const numbers = new Array(1, 2, 3, 4);
const product_of_arr = numbers.reduce((a, b) => a * b);  // 24
console.log(product_of_arr);

// Another approach of applying a reduce function of an array
const arr = new Array(2, 3 , 4, 5);

function prodduct (a, b){
    return a*b

}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

//append elements to an Existing array
const teamList = ["Tanna","Shalyn", "Zhang", "Francis"];
teamList.push("Muhaimin");
console.log(teamList);

//remove the last element of an EXISTING array
teamList.pop();   //INTRISICALLy KNOWN TO REMOVE last element
console.log(teamList,length);
console.log(teamList);

//shift and unshift ELEMENTS OF AN ARRAY
const mag7 =["FB", "AMZN", "APPL", "TSLA" , "GOOG"];   
console.log(mag7.shift());  // FB removed
console.log(mag7);                // amzn, TSLA , nflx ,goog
//unshift (prepend META, NVDA ,MSFT)
mag7.unshift(["META", "NVDA", "MSFT"]);
console.log(mag7);



//Splice data (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];
const indec = 2;
const newPlayer = "Steve Carr";
bballTeam.splice(index, 0, newPlayer);   


//? Replace "Bill" with "Rodman"
bballTeam.splice(3, 1, "rod");
 console.log(bballTeam);

// Another approach using a named function
const multiplyFn = (a, b) => a * b;
console.log(numbers.reduce(multiplyFn));



// ---------
// 2. LOOPS
// ---------

// i - for loop (countdown)
for (let i = 5; i >= 1; i--) {
    console.log("Countdown:", i);
}

// ii - forEach loop
mappedArray.forEach(item => {
    console.log("forEach item:", item);
});

// iii - do-while loop
let x = 3;
do {
    console.log("Do-while:", x);
    x--;
} while (x > 0);

// iv - while loop
let y = 3;
while (y > 0) {
    console.log("While loop:", y);
    y--;
}


//do a count up (1-10)
const max = 10;
for(let index = 10; index <= max100 ; index = index +10){
console.log(index);
   

}

//change the index, the condition and the step are variables
const max100 = 100;
for(let index = 10; index <= max100 ;index +10){
//10,20,30,40 ,50 ..100
console.log(index);
} 

//count down?

for( let index = max; index >= 1 ; index--){
    console.log(index);

    //? what do we introduce if we are to replace one with "merry x'mas!
    
    if(index=== 0)
        console.log("Merry x'mas")
    else
        console.log(index);
}


// ii - for-each loop
const tickerSymbols = ["META", "AAPL", "AMZN", "GOOG", "MSFT"];

// Classic for-loop
for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}.) ${tickerSymbols[index]}`);
}

// forEach loop
tickerSymbols.forEach(element => {
    console.log(element);
});


//iii



