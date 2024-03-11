// let heading = document.createElement("h3");
// text = 'hello world'
// // heading.innerHTML = text
// heading.textContent = text

// console.log(heading.textContent)

let anotherDiv = document.createElement("div");
anotherDiv.innerHTML = "<h5>I am h5 heading by js inside another DIV</h5>"
let h1 = document.createElement("h1");
h1.innerHTML = "I am heading number 1";
let p = document.createElement("p");
p.innerHTML = "I am paragrapgh";
let HTMLDiv = document.querySelector('.box');
HTMLDiv.append(h1)
HTMLDiv.before(anotherDiv)
HTMLDiv.after(p)