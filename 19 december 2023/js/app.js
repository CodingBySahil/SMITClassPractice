// A loop for printing the elements of array thorough loop
// let list = ["cat", "dog", "Bird", "Monkey", "Horse", "Donkey", "Elephant"]
// for(let i = 0; i < list.length; i++){
//     console.log(list[i]);
// }

// Nested loop concept on string and number are same
// let matrix = [
//   ["Index 0,0", "Index 0,1", "Index 0,2"],
//   ["Index 1,0", "Index 1,1", "Index 1,2"],
//   ["Index 2,0", "Index 2,1", "Index 2,2"],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }
// Nested loop concept on string and number are same
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

// let matrixA=[];
// while (true){
//     let input = prompt("Enter an element")
//     if(input == "next row"){
//         break
//     }else{
//         matrixA.push(input)
//     }
// }
// for(let i = 0; i<matrixA.length; i++){
//     console.log(matrixA[i]);
// }

let a = [1, 2, 3, 4, 5, 15, 16, 25, 60, 61];
for (let i = 0; i < a.length; i++) {
  // if(a[i]==60){              //comparing by value
  if (i == 8) {                 // comparing by index
    break;
  } else {
    console.log(a[i]);
  }
}

// square the each element in matrix by using array and loops
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     matrix[i][j] = matrix[i][j] * matrix[i][j];
//     console.log(matrix[i][j]);
//   }
// }
