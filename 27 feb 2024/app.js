// let text = "Hello"
// document.querySelector(".some-text").innerHTML += text;
// document.querySelector(".some-text").textContent += text;
// console.log(text)
// let divByJS = "<div><h3>This text come dynamicaly</h3></br><h5>this is random list by JS</h5><ol><li>Hello</li><li>Hello1</li><li>Hello2</li></ol></div>"
// document.querySelector(".some-text").innerHTML = divByJS;

// function showResult(){
//     let resultMarks = "<table><tr><td>Name </td><td> Totol Marks</td><td>Obtain Marks</td></tr><tr><td>Sahil </td><td> 100</td><td>85</td></tr><tr><td>Name </td><td> 100</td><td>90</td></tr></table>";
//     document.querySelector(".some-text").innerHTML = resultMarks;
// }
let btn = document.querySelector("#visible")
function unvisibleByJS(){
    image.className = "hidden";
}

btn.addEventListener("click", function visibleByJS(){
    image.className = "unhidden";
})