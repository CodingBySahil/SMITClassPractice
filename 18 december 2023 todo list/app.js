let toDoList = [];
let runTimeValue;
function add() {
  runTimeValue = document.querySelector(".title").value;
  if (runTimeValue == ""){
    alert("Enter a valid task !")
  }else{
    toDoList.push(runTimeValue);
  }
  document.querySelector(".task").textContent = toDoList;
}
function del() {
  toDoList.pop(runTimeValue);
  document.querySelector(".task").textContent = toDoList;
}
