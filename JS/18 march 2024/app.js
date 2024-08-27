// let student = {
//   names: {
//     firstName: "Muhammad",
//     lastName: "Sahil",
//     fatherName: "Nawab",
//   },
//   age: 20,
//   center: "SMIT",
//   data: function () {
//     return `My full name is ${this.names.firstName} ${this.names.lastName}. My father name is ${this.names.fatherName} and I am ${this.age} years old and I am learning javaScript from ${this.center}`;
//   },
//   //   picture:
// };
// let data1 = student.data();
// document.querySelector("#h3").innerHTML = student.data();

// let students = {
//   sahil: {
//     firstName: "Muhammad",
//     lastName: "sahil",
//     rollNo: 90,
//   },
//   asim: {
//     firstName: "Muhammad",
//     lastName: "asim",
//     rollNo: 91,
//   },
//   sohail: {
//     firstName: "Muhammad",
//     lastName: "sohail",
//     rollNo: 92,
//   },
//   getDataOfAllStudents: function () {
//     return `Hi there My name is ${this.sahil.firstName} ${this.sahil.lastName} and my roll no is ${this.sahil.rollNo} and my friend full name is ${this.asim.firstName} ${this.asim.lastName} and my friend roll no is ${this.asim.rollNo} and my friend full name is ${this.sohail.firstName} ${this.sohail.lastName} and my friend roll no is ${this.sohail.rollNo}`;
//   },
// };

// document.querySelector("#text").innerHTML = students.getDataOfAllStudents();
// console.log("Before deleting sohail nested object");
// console.log(students);
// document.querySelector("#btn").addEventListener("click", function () {
//   delete students.sohail;
//   console.log("After deleting sohail nested object");
//   console.log(students);
// });

// // let [myName, rollNo, fatherName] = ["sahil", "90", "nawab"];
// // console.log(myName)
// // console.log(rollNo)
// // console.log(fatherName)

// let array1 = ["sohaib", "BSCS", "67"];
// // let studentName = array1[0]
// // let studentDepName = array1[1]
// // let studentRollNo = array1[2]
// let [studentName, studentDepName, studentRollNo] = array1;

// console.log(studentName);
// console.log(studentDepName);
// console.log(studentRollNo);

let hotel = {
  staff: ["ali", "sohaib", "hassan"],
  rooms: ["room 1", "room 2", "room 3"],
  menu: ["drink", "meal", "water"],
};
// console.log(hotel.staff[0])
// console.log(hotel.rooms[0])
// console.log(hotel.menu[0])

document.querySelector('#hotelBtn').addEventListener('click',function(){
  let hotelH3 = document.querySelector('#hotelH3');
  hotelH3.innerHTML = ""
  for (let e of hotel.staff) {
    hotelH3.innerHTML += ` ${e}`;
  }
  for (let e of hotel.rooms) {
    hotelH3.innerHTML += ` ${e}`;
    console.log(e);
  }
  for (let e of hotel.menu) {
    hotelH3.innerHTML += ` ${e}`;
    console.log(e);
  }
});
