// // ############################################################################################
// // ############################################################################################
// // ###############         First class       ##################################################
// // ############################################################################################
// // ############################################################################################

// // constructure function
// function student(Name, Roll, DOB) {
//   this.Name = Name;
//   this.Roll = Roll;
//   this.DOB = DOB;
// }

// let student11 = new student("sahil", 90, "10 jan 2005");
// let student22 = new student("sattar", 89, "11 jan 2005");
// let student3 = new student("asim", 88, "12 jan 2005");
// let student4 = new student("sohail", 87, "13 jan 2005");
// let student5 = new student("talha", 86, "14 jan 2005");
// console.log(student11);
// console.log(student22);
// console.log(student3);
// console.log(student4);
// console.log(student5);

// let student0 = {
//   name: "khan",
//   fname: "gul",
// };
// console.log(student0);

// let web = {
//   isLogin() {
//     console.log("You can go");
//   },
//   isNotLogin() {
//     console.log("you have to stop");
//   },
// };

// web.isLogin();
// web.isNotLogin();
// console.log(web.isNotLogin());
// // console.log(web.isNotLogin());
// // console.log(web.textReturn);

// // ############################################################################################
// // ############################################################################################
// // ###############         Second class       ##################################################
// // ############################################################################################
// // ############################################################################################

// let student1 = {
//   firstName: "Muhammad",
//   lastName: "sahil",
//   rollNo: 90,
//   birthYear: 2000,
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   age() {
//     return new Date().getFullYear() - this.birthYear;
//   },
// };
// let student2 = {
//   firstName: "Abdul",
//   lastName: "Sattar",
//   rollNo: 70,
//   birthYear: 2002,
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   age() {
//     return new Date().getFullYear() - this.birthYear;
//   },
// };

// console.log(student1.age());
// console.log(student1.fullName());
// console.log(student2.age());
// console.log(student2.fullName());

// let person = {
//   fullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   age: function() {
//     return new Date().getFullYear() - this.birthYear;
//   }
// };

// let person1 = {
//   firstName: "Muhammad",
//   lastName: "sahil",
//   rollNo: 90,
//   birthYear: 2000,
//   fullName: person.fullName,
// };
// let person2 = {
//   firstName: "Abdul",
//   lastName: "Sattar",
//   rollNo: 70,
//   birthYear: 2002,
//   fullName: person.fullName,
// };
// person2.__proto__.person;
// person1.__proto__.person;

// console.log(person2.fullName());
// console.log(person1.fullName());

// // adding prototype to any variable
// Object.prototype.addsome = "this is addsome"
// let y = 'xyz'

// let human = {
//   fullname: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   age: function () {
//     return new Date().getFullYear() - this.birthYear;
//   },
// };
// let student1 = {
//   firstName: "Ali",
//   lastName: "Khan",
//   birthYear: 2000,
//   fullName:human.fullname
// };
// student1.__proto__ = human
// let student2 = {
//   firstName: "ٰintikhab",
//   lastName: "Khan",
//   birthYear: 2005,
//   fullName: human.fullname
// };
// student2.__proto__ = human
// // console.log(new Date)
// console.log(student1.fullname());
// console.log(student1.age());
// console.log(student2.fullname());
// console.log(student2.age());
