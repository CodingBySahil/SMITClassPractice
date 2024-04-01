// constructure function
function student(Name, Roll, DOB) {
  this.Name = Name;
  this.Roll = Roll;
  this.DOB = DOB;
}

let student1 = new student("sahil", 90, "10 jan 2005");
let student2 = new student("sattar", 89, "11 jan 2005");
let student3 = new student("asim", 88, "12 jan 2005");
let student4 = new student("sohail", 87, "13 jan 2005");
let student5 = new student("talha", 86, "14 jan 2005");
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

let student0 = {
    name:'khan',
    fname:'gul'
}
console.log(student0)

let web = {
  isLogin() {
    console.log("You can go");
  },
  isNotLogin() {
    console.log("you have to stop");
  },
};

web.isLogin();
web.isNotLogin();
console.log(web.isNotLogin());
// console.log(web.isNotLogin());
// console.log(web.textReturn);
