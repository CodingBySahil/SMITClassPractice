// // Function for addition
// function addNumber(num1, num2) {
//   return num1 + num2;
// }
// Function for addition
function addition(num3, num4) {
    num3 = Number(prompt("Enter any value"));
    num4 = Number(prompt("Enter another value"));
    document.querySelector(".result").innerHTML = `The addition of ${num3} and ${num4} is : ${num3 + num4}`;
    // document.querySelector(".result").innerHTML = "Text change";
}
// // function for square
// let twoNumber = addNumber(5, 6);
// function squareOfNumber(value) {
//   return value * value;
// }
// // calling square function
// let num3;
// num3 = prompt("Enter any number to find square");
// console.log(squareOfNumber(num3));

// Function for color change 
function changeColor(colorName,bgColor){
    let para1 = document.querySelector('.para');
    para1.style.color = colorName; 
    para1.style.backgroundColor = bgColor; 
}