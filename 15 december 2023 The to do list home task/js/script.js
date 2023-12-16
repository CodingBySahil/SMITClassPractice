let toDoList =["Wake up at morning","Fresh yourself","Go for morning walk"];

// for(let lengthOfList = 0 ; lengthOfList <= toDoList.length; lengthOfList++){
//     console.log(document.getElementsByTagName('p').innerHTML = toDoList[lengthOfList])
// }
function addToStart(){
    toDoList.push(document.querySelector(".taskTitle").innerHTML)
    for(let lengthOfList = 0 ; lengthOfList <= toDoList.length; lengthOfList++){
        // console.log(document.getElementsByTagName('p').innerHTML = toDoList[lengthOfList])
        // console.log(toDoList.pop())
    }
}
function addToEnd(){

}
function removeFromStart(){

}
function removeFromEnd(){

}