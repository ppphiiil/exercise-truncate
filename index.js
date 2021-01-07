// ================================= EXERCISE 1
// ================================= TRUNCATE TEXT
// ​
// Let's truncate the samples of text, and display only part of them.
// ​
// The maximum number of characters that should be displayed is `128`.
// ​
// Print to the console only the characters up to the specified max value and then add ellipsis (`...`).
// ​
// Make sure there is no trailing white space between the last character of the truncated text and the ellipsis.
// ​
// Righ after it, print to the console the size of the original string with a message explaining what this number stands for.
// Next, print to the console how many characters were hidden, again together with a message to explain what this number stands for.
// ​

// > If the string is less than the maximum or exactly as the maximum - do not truncate the string - instead, print the entire string and do not put any ellipsis (`...`).



const space = "\n\n";

const text0 = `George Boole (/buːl/; 2 November 1815 – 8 December 1864) was a largely self-taught English mathematician, philosopher and logician, most of whose short career was spent as the first professor of mathematics at Queen\'s College, Cork in Ireland. He worked in the fields of differential equations and algebraic logic, and is best known as the author of The Laws of Thought (1854) which contains Boolean algebra. Boolean logic is credited with laying the foundations for the information age.`;

const text01 = `No general method for the solution of questions in the theory of probabilities can be established which does not explicitly recognise, not only the special numerical bases of the science, but also those universal laws of thought which are the basis of all reasoning, and which, whatever they may be as to their essence, are at least mathematical as to their form.`;

const text02 = `Statement that is executed if condition is falsy and the else clause exists.`;


// ================================= EXERCISE 1
console.log(space + "================================= EXERCISE 1");

let input = text02;
const textLength = 128;

shorterText = input.substring(0, textLength - 1); //shorten text to 128 character
textWithoutWhiteSpace = shorterText.trim(); // 127 characters + delete white space if available


//If the string is less than the maximum or exactly as the maximum - do not truncate the string
if ((input.length <= textLength) || ((input.length === textLength))) {
    console.log(space);
    console.log(
        `without truncate:\n${shorterText} \n\nShortLenght: ${shorterText.length}\nTextlength: ${input.length
        } \nHidden: ${Math.max(0, input.length - textLength)}${space}`
    );

    //instead, print the entire string and do not put any ellipsis (`...`).
} else {
    console.log(space);
    console.log(
        `with truncate:\n${textWithoutWhiteSpace}... \n\nShortLenght: ${textWithoutWhiteSpace.length}\nTextlength: ${input.length
        } \nHidden: ${(input.length - textLength)}${space}`
    );
}



// ================================= EXERCISE2
// ================================= COUNT DECIMAL PLACES
// # Count decimal places
// ​
// Using JavaScript write the logic to count the number of decimal places a number has. Any zeros after the decimal point count towards the number of decimal places. Print to the console number XYZ has 3 decimal places.
// When the number has no decimal places, print to the console a message saying there were no decimal places.
// ​
// Sample numbers:
// ​
// 43.20 ➞ 2
// 400 ➞ 0
// 3.1 ➞ 1
// 151.2783 ➞ 4
//Collapse

console.log(space + "================================= EXERCISE 2");

var a = 43.800001;

const aString = a.toString();//turn the number into a string
const decimal = aString.split(".", aString.length);//look for a "." and cut al till the end of string 
const countedDecimal = decimal[1].length;//Take it out from the Array ans get length

//Output
console.log("a:" + a);
console.log("aString:" + aString);
console.log("aString length:" + aString.length);
console.log(decimal);
console.log("deciaml counter:" + countedDecimal + "\n\n");

if (Math.floor(a) == a) {
    console.log("no decimal places");
} else if (Math.floor(a) > 0) {
    console.log("has decimal places");
}




