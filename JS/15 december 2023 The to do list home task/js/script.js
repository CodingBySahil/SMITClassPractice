let toDoList =[];

function addToStart(){
    let inputtext = document.querySelector("taskTitle").value
    toDoList.push(inputtext);
    document.querySelector(".task").textContent = toDoList;
}
function addToEnd(){

}
function removeFromStart(){

}
function removeFromEnd(){
    toDoList.pop(inputtext);
    document.querySelector(".task").textContent = toDoList;
}
