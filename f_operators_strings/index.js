// 1. Trim a string (observe using trimStart and trimEnd too)
let wordWithTrim = "   FSD   ";
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

// 2. toString (converts a number to a string)
let statusCode = 404;
console.log(statusCode.toString());                         // equivalent to Number(statusCode).toString(); where we use Number Object's built-in toString() method
console.log(String(statusCode).toString());                 // one can also explicitly use the String object's toString() method to render the value to a string


// 3. toString (converts a boolean to a string, printing either "true" or "false")
let boolVal = true;
console.log(String(booleanStatus).toString());

// 4. Splitting a string
let fullName = "John Doe Smith";
let splitName = fullName.split(" ");   // type returned?
console.log(splitName.length);         // ["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);


// 5. Split a string based on the character used as a delimiter, and limit the number of elements returned (in the 2nd argument)
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);

let splitWordIndex0 =(splitInstances)[0].split("");
console.log(splitWordIndex0);

// 6. Slidate the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);

let splitToday = today.toDateString();                  // Output: Fri, Aug, 30, 2024
splitToday = splitToday.split(" ", 1);                              
console.log(splitToday[0]);                             // Output: Fri--

let msg = ""
switch(splitToday[0]){


   case"Mon":
            msg ="Monday Blues";
            break;
    case "Tue":
    case "Wed":
    case "Thu":
    msg = "work,work!";
      case "Fri":
        msg = "TGIF!!";
        break;
    case "Sun":
        msg = "Every day is Sunday."
        break;
    default:
        break;
}

console.log(msg);
