// Matrix A is created
let matrixA = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];


// matrix B is created
let matrixB = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


// Adding A and B
let SumOfMatrixAB = [
  [
    matrixA[0][0] + matrixB[0][0],
    matrixA[0][1] + matrixB[0][1],
    matrixA[0][2] + matrixB[0][2],
  ],
  [
    matrixA[1][0] + matrixB[1][0],
    matrixA[1][1] + matrixB[1][1],
    matrixA[1][2] + matrixB[1][2],
  ],
  [
    matrixA[2][0] + matrixB[2][0],
    matrixA[2][1] + matrixB[2][1],
    matrixA[2][2] + matrixB[2][2],
  ],
];


// after adding A and B summing all the element of matrix A+B
let total =
  SumOfMatrixAB[0][0] +
  SumOfMatrixAB[0][1] +
  SumOfMatrixAB[0][2] +
  SumOfMatrixAB[1][0] +
  SumOfMatrixAB[1][1] +
  SumOfMatrixAB[1][2] +
  SumOfMatrixAB[2][0] +
  SumOfMatrixAB[2][1] +
  SumOfMatrixAB[2][2];


console.log(matrixA);
console.log(matrixB);
console.log(SumOfMatrixAB);
console.log(`The sum of all element of matrix is : ${total}`);
