// // while loop
// let i = 0;
// while (i < 10) {
//   console.log("Hello no : " + i);
//   i++
// }

// // do while loop
// let i = 0;
// do{
//     console.log(`hello number : ${i}`);
//     i++
// }while(i<10);

// // while will do its body even if the condition is wrong
// do{
//     console.log(`hello number : ${i}`);
//     i++
// }while(i<10);

// let value = prompt("Enter any number to print from zero to that number");
// // value = parseInt(value);
// let i = 0;
// do{
//     console.log(`hello number : ${i}`);
//     i++;
// }while(i<=value)
// let para = document.querySelector("#para").innerHTML;
// console.log(para);
function hide() {
  let para = document.querySelector("#para");
//   //   using if else to hide and display the text
//   if (para.style.visibility === "hidden") {
//     para.style.visibility = "visible";
//   } else {
//     para.style.visibility = "hidden";
//   }
  //   using ternary operator to hide and display text
  para.style.visibility === "hidden"
    ? (para.style.visibility = "visible")
    : (para.style.visibility = "hidden");
}
