let toDoList = [];
let runTimeValue;
function add() {
  runTimeValue = document.querySelector(".title").value;
  toDoList.push(runTimeValue);
  document.querySelector(".task").textContent = toDoList;
}
function del() {
  toDoList.pop(runTimeValue);
  document.querySelector(".task").textContent = toDoList;
}
