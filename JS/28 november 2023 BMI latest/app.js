// console.log(document.querySelector(".heading"));
// console.log(document.querySelector(".heading").textContent = "This is h1 heading tag edit by DOM (JavaScript)");

// Tasbeh counter

// let count = 0;

// function colorChanger(){
//     if(count %2==0){
//         document.querySelector(".value").style.color = "red"
//     }
//     else{
//         document.querySelector(".value").style.color = "blue"
//     }
// }

// function inc(){
//     document.querySelector(".value").textContent = ++count;
//     colorChanger();
// }
// function dec(){
//     document.querySelector(".value").textContent = --count
//     colorChanger();
// }

// Grade system of marks

// let marks = Number(prompt("Enter your marks"));

// if (marks >= 90) {
//   console.log("Your grade is A+");
// } else if (marks >= 80) {
//   console.log("Your grade is A");
// } else if (marks >= 70) {
//   console.log("Your grade is B");
// } else if (marks >= 60) {
//   console.log("Your grade is C");
// } else if (marks >= 50) {
//   console.log("Your grade is D");
// } else if (marks < 50) {
//   console.log("You are fail");
// }

// BMI calculater
let weight = Number(prompt("Enter your body weight in kilograms" , 25))
let heightInCentimeter = Number(prompt("Enter your body height in centimeters" , 25.6))
let heightInMeter = heightInCentimeter/100;
let calculatedBMI = weight / (heightInMeter * heightInMeter);

// BMI function
function BMI(){
    console.log("Your weight in kilograms is : " + weight + " Kg")
    console.log("Your height in meter is : " + heightInMeter + " meters")
    console.log("Your BMI is : " + calculatedBMI.toFixed(2) + ", and your category is underweight")
}
if(calculatedBMI < 18.5){
    BMI();
} else if (calculatedBMI > 18.5 & calculatedBMI < 24.9){
    BMI();
} else if (calculatedBMI > 25 & calculatedBMI < 29.9){
    BMI();
} else if (calculatedBMI > 29.9){
    BMI();
}

// // Comparing ali and waseem BMI 
// let aliHasWeightFirst = 92,
//   aliHasHeightFirst = 1.95,
//   waseemHasWeightFirst = 78,
//   waseemHasHeightFirst = 1.69;
// let aliHasWeightSecond = 92,
//   aliHasHeightSecond = 1.95,
//   waseemHasWeightSecond = 78,
//   waseemHasHeightSecond = 1.69;
// let aliBMI_onData1 = aliHasHeightFirst / (aliHasHeightFirst * aliHasHeightFirst);
// let waseemBMI_onData1 =
//   waseemHasWeightFirst / (waseemHasHeightFirst * waseemHasHeightFirst);
// let aliBMI_onData2 =
//   aliHasWeightSecond / (aliHasHeightSecond * aliHasHeightSecond);
// let waseemBMI_onData2 =
//   waseemHasWeightSecond / (waseemHasHeightSecond * waseemHasHeightSecond);

// console.log("Ali BMI on the first data is : " + aliBMI_onData1.toFixed(2))
// console.log("Waseem BMI on the first data is : " + waseemBMI_onData1.toFixed(2))
// console.log("Ali BMI on the second data is : " + aliBMI_onData2.toFixed(2))
// console.log("Waseem BMI on the Second data is : " + waseemBMI_onData2.toFixed(2))
