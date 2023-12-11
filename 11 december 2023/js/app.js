// // Today we are learning arrays
// let num = 5;
// // This will create double array
// let nums = [2,3,4,7,5,8,"sahil",['ali',134]]
// // here we will access the string "ali" and it will be consoled
// console.log(nums[7][0])

// // The array nums is created here and the task is to add 6 with the index 3 value of nums
// let nums = [1, 2, 3, 4, "car", true];
// // by this line the index 3 value of nums will be added with 6
// nums[3] = nums[3] + 6;
// // we can do the same step by num[3] += 6;
// console.log(nums);

// let cities = ["Peshawar", "Karachi", "Islamabad", "Lahore"]
// console.log("Welcome to " + cities[0])
// console.log(`Welcome to ${cities[2]}`)

let matrixOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrixTwo = [
  [11, 22, 33],
  [44, 55, 66],
  [77, 88, 99],
];

let valueOne = matrixOne[1][1] + matrixTwo[1][1];
console.log(`It should print 60 : ${valueOne}`);
let valueTwo = matrixOne[0][1] + matrixTwo[0][1];
console.log(`It should print 24 : ${valueTwo}`);
let valueThree = matrixOne[2][1] + matrixTwo[2][1];
console.log(`It should print 96 : ${valueThree}`);
let valueFour = matrixOne[1][2] + matrixTwo[1][2];
console.log(`It should print 72 : ${valueFour}`);
let valueFive = matrixOne[1][0] + matrixTwo[1][0];
console.log(`It should print 48 : ${valueFive}`);
let valueSix = matrixOne[2][0] + matrixTwo[2][0];
console.log(`It should print 84 : ${valueSix}`);
console.log(`The Complete first matrix is ${matrixOne}`)
console.log(`The Complete second matrix is ${matrixTwo}`)
console.log(`${matrixOne}`)
console.log("The complete matrix is : " + matrixOne)