let image = document.querySelector(".imageClass")
// function zoom(){
//     image.style.width = "800px"
    
// }
// function reset(){
//     image.style.width = "300px"
// }
image.onclick = (e) => {
    console.log("Hi")
    console.log(e.type, `x axis distance is : ${e.clientX} and y axis is : ${e.clientY}`)
}
document.body.onclick = ()=>{
    image.src = "imageCode.jpeg"
}