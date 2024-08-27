// let heading = document.createElement("h3");
// text = 'hello world'
// // heading.innerHTML = text
// heading.textContent = text

// console.log(heading.textContent)

// let anotherDiv = document.createElement("div");
// anotherDiv.innerHTML = "<h5>I am h5 heading by js inside another DIV</h5>"
// let h1 = document.createElement("h1");
// h1.innerHTML = "I am heading number 1";
// let p = document.createElement("p");
// p.innerHTML = "I am paragrapgh";
// let HTMLDiv = document.querySelector('.box');
// HTMLDiv.append(h1)
// HTMLDiv.before(anotherDiv)
// HTMLDiv.after(p)
// HTMLDiv.remove()
// p.remove()
// anotherDiv.remove()

// let orignalDiv = document.querySelector(".box");
// let p;
// function add() {
//   p = document.createElement("p");
//   p.innerHTML = "This is p";
//   orignalDiv.append(p);
// }
// function remove() {
//   p.remove();
// }

// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
//
//
// alternative of Trello website
// let addBtn = document.querySelector("#addBtn");
// let listData = document.querySelector(".listData");
// let todoDiv = document.querySelector(".todo-div");

// function addBtnData() {
//   let div = document.createElement("div");
//   div.classList.add('div1')
//   div.innerHTML = listData.value;
//   todoDiv.appendChild(div);
// }

let addBtn = document.querySelector(".addBtn");

function addBtnData() {
  let listData = document.querySelector(".listData");
  let todoDiv = document.querySelector(".todo-div");
  let div = document.createElement("div");
  div.classList.add("div1");
  div.innerHTML = listData.value;
  todoDiv.appendChild(div);

  listData.remove();
  addBtn.remove();
  let newInput = document.createElement("input");
  newInput.classList.add("listData");
  todoDiv.append(newInput);

  let newBtn = document.createElement("button");
  newBtn.classList.add("addBtn");
  newBtn.innerHTML = "Add card";
  todoDiv.append(newBtn);
}
