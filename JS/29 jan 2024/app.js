// // // // a simple function for addition
// // // function adding(num1,num2){
// // //     console.log(num1+num2);
// // // }
// // // // function call
// // // adding(5,6);

// // // // ananymous function is the function that have no name
// // // let anyVaraible = function (num3,num4){
// // //     console.log(num3*num4);
// // // }
// // // anyVaraible(3,5);

// // // // a function of syntax ()=>{} is called limbda function . limbda function can reduce its code to one line
// // // let xyz2 = (num5,num6)=>{
// // //     return num5-num6;
// // // }
// // // console.log(xyz2(2,3))

// // // let xyz3 = (num7)=>{
// // //     return num7*10;
// // // }
// // // console.log(xyz3(6))

// // // let xyz4 = (num8, num9) => num8 + num9;
// // // console.log(xyz4(3,4));

// // let allAlphabets = [
// //   "a",
// //   "b",
// //   "c",
// //   "d",
// //   "e",
// //   "f",
// //   "g",
// //   "h",
// //   "i",
// //   "j",
// //   "k",
// //   "l",
// //   "m",
// //   "n",
// //   "o",
// //   "p",
// //   "q",
// //   "r",
// //   "s",
// //   "t",
// //   "u",
// //   "v",
// //   "w",
// //   "x",
// //   "y",
// //   "z",
// // ];

// // function sortAlphabets(allAlphabets) {
// //   let vowel = [],
// //     consunant = [];
// //   for (let i = 0; i < allAlphabets.length; i++) {
// //     if (
// //       allAlphabets[i] == "a" ||
// //       allAlphabets[i] == "e" ||
// //       allAlphabets[i] == "i" ||
// //       allAlphabets[i] == "o" ||
// //       allAlphabets[i] == "u"
// //     ) {
// //       vowel.push(allAlphabets[i]);
// //     } else {
// //       consunant.push(allAlphabets[i]);
// //     }
// //   }
// //   console.log("vowel");
// //   console.log(vowel);
// //   console.log("consunant");
// //   console.log(consunant);
// // }

// // sortAlphabets(allAlphabets);
// // let marks = Number(prompt("Enter your marks !"));
// // switch(marks){
// //   case 90:
// //     console.log("grade : A");
// //     break;
// //   case 70:
// //     console.log("grade : B");
// //     break;
// //   case 50:
// //     console.log("grade : C");
// //     break;
// //   case 40:
// //     console.log("grade : D");
// //     break;
// //   case 0:
// //     console.log("grade : F and Fail");
// //     break;
// //   default:
// //     console.log("plzz enter valid")
// // }

// // ternary operator
// // let a = 5;
// // (a>4)?console.log("true statement"):console.log("false statement");

// // Function to add two numbers
// function add(a, b) {
//   return a + b;
// }

// // Function to subtract two numbers
// function subtract(a, b) {
//   return a - b;
// }

// // Function to multiply two numbers
// function multiply(a, b) {
//   return a * b;
// }

// // Function to divide two numbers
// function divide(a, b) {
//   // Check if division by zero
//   if (b !== 0) {
//     return a / b;
//   } else {
//     return "Error: Division by zero";
//   }
// }

// // Function to calculate square of a number
// function square(x) {
//   return x * x;
// }

// // Function to calculate cube of a number
// function cube(x) {
//   return x * x * x;
// }

// // Function to find the maximum of two numbers
// function max(a, b) {
//   return a > b ? a : b;
// }

// // Function to find the minimum of two numbers
// function min(a, b) {
//   return a < b ? a : b;
// }

// // Function to calculate absolute value of a number
// function abs(x) {
//   return x < 0 ? -x : x;
// }

// Function to calculate factorial of a number
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: factorial of n is n times factorial of (n-1)
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
