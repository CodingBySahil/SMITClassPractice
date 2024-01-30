// // // a simple function for addition
// // function adding(num1,num2){
// //     console.log(num1+num2);
// // }
// // // function call
// // adding(5,6);

// // // ananymous function is the function that have no name
// // let anyVaraible = function (num3,num4){
// //     console.log(num3*num4);
// // }
// // anyVaraible(3,5);

// // // a function of syntax ()=>{} is called limbda function . limbda function can reduce its code to one line
// // let xyz2 = (num5,num6)=>{
// //     return num5-num6;
// // }
// // console.log(xyz2(2,3))

// // let xyz3 = (num7)=>{
// //     return num7*10;
// // }
// // console.log(xyz3(6))

// // let xyz4 = (num8, num9) => num8 + num9;
// // console.log(xyz4(3,4));

// let allAlphabets = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// function sortAlphabets(allAlphabets) {
//   let vowel = [],
//     consunant = [];
//   for (let i = 0; i < allAlphabets.length; i++) {
//     if (
//       allAlphabets[i] == "a" ||
//       allAlphabets[i] == "e" ||
//       allAlphabets[i] == "i" ||
//       allAlphabets[i] == "o" ||
//       allAlphabets[i] == "u"
//     ) {
//       vowel.push(allAlphabets[i]);
//     } else {
//       consunant.push(allAlphabets[i]);
//     }
//   }
//   console.log("vowel");
//   console.log(vowel);
//   console.log("consunant");
//   console.log(consunant);
// }

// sortAlphabets(allAlphabets);
// let marks = Number(prompt("Enter your marks !"));
// switch(marks){
//   case 90:
//     console.log("grade : A");
//     break;
//   case 70:
//     console.log("grade : B");
//     break;
//   case 50:
//     console.log("grade : C");
//     break;
//   case 40:
//     console.log("grade : D");
//     break;
//   case 0:
//     console.log("grade : F and Fail");
//     break;
//   default:
//     console.log("plzz enter valid")
// }


// ternary operator
let a = 5;
(a>4)?console.log("true statement"):console.log("false statement");