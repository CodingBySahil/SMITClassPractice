let student = {
  names: {
    firstName: "Muhammad",
    lastName: "Sahil",
    fatherName: "Nawab",
  },
  age: 20,
  center: "SMIT",
  data: function () {
    return `My full name is ${this.names.firstName} ${this.names.lastName}. My father name is ${this.names.fatherName} and I am ${this.age} years old and I am learning javaScript from ${this.center}`;
  },
  //   picture:
};
let data1 = student.data();
document.querySelector("#h3").innerHTML = student.data();

let students = {
  sahil: {
    firstName: "Muhammad",
    lastName: "sahil",
    rollNo: 90,
  },
  asim: {
    firstName: "Muhammad",
    lastName: "asim",
    rollNo: 91,
  },
  sohail: {
    firstName: "Muhammad",
    lastName: "sohail",
    rollNo: 92,
  },
  getDataOfAllStudents: function () {
    return `Hi there My name is ${this.sahil.firstName} ${this.sahil.lastName} and my roll no is ${this.sahil.rollNo} and my friend full name is ${this.asim.firstName} ${this.asim.lastName} and my friend roll no is ${this.asim.rollNo} and my friend full name is ${this.sohail.firstName} ${this.sohail.lastName} and my friend roll no is ${this.sohail.rollNo}`;
  },
};

document.querySelector("#text").innerHTML = students.getDataOfAllStudents();
console.log("Before deleting sohail nested object");
console.log(students);
document.querySelector("#btn").addEventListener("click", function () {
  delete students.sohail;
  console.log("After deleting sohail nested object");
  console.log(students);
});

// let [myName, rollNo, fatherName] = ["sahil", "90", "nawab"];
// console.log(myName)
// console.log(rollNo)
// console.log(fatherName)

let array1 = ["sohaib", "BSCS", "67"];
// let studentName = array1[0]
// let studentDepName = array1[1]
// let studentRollNo = array1[2]
let [studentName, studentDepName, studentRollNo] = array1;

console.log(studentName);
console.log(studentDepName);
console.log(studentRollNo);
