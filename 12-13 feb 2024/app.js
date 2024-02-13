let image = document.querySelector(".imageClass")
// function zoom(){
//     image.style.width = "800px"
    
// }
// function reset(){
//     image.style.width = "300px"
// }
// image.onclick = (e) => {
//     console.log("Hi")
//     console.log(e.type, `x axis distance is : ${e.clientX} and y axis is : ${e.clientY}`)
// }
// document.body.onclick = (e)=>{
//     image.src = "imageCode.jpeg"
//     console.log(e)
//     console.log(e.type, `x axis distance is : ${e.clientX} and y axis is : ${e.clientY}`)
//     console.log(`x page distance is : ${e.pageX} and y page is : ${e.pageY}`)
// }
// let body = document.querySelector(".body");
// body.onmousemove = (e)=>{
//     image.src = "imageCode.jpeg"
//     image.style.width = '500px';
//     console.log(e)
//     console.log(e.type, `x axis distance is : ${e.clientX} and y axis is : ${e.clientY}`)
//     console.log(`x page distance is : ${e.pageX} and y page is : ${e.pageY}`)
// }
let body = document.querySelector("body");
image.style.position = 'absolute';
document.addEventListener('mousemove',(e)=>{
    // image.src = "imageCode.jpeg"
    // image.style.width = '100px';
    image.style.top = `${e.clientY}px`
    image.style.left = `${e.clientX}px`
}) 