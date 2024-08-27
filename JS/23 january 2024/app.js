// function add(num1,num2){
//     return num1 + num2 
// }

// console.log(add(1,2))

// Function for finding the average of array
let array1=[1,2,3,4,10];
function findAverage(arr){
    let totalSum =0,lengthOfArray = arr.length,average;
    for(let i = 0; i<arr.length; i++){
        totalSum += arr[i]
    }
    average = totalSum/lengthOfArray;
    
    console.log(Math.trunc(average))
}
findAverage([1,2,3,4,5,6,200])
findAverage(array1);