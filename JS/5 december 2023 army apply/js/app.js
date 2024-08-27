// // consept of and&& , consept of or||

// let weight = 300;
// let time = 8;
// if(weight > 300 && time < 6){
//     alert("Come out to tryout!")
// } else {
//     alert("come to our cookout !")
// }

// checking person for driving by age and by lisen

// let age = Number(prompt("Enter your age"));
// let isListened = prompt("Enter Y/y for yes and N/n for no");
// // condition 
// if(isListened == "Y" || isListened == "y"){
//     isListened = true
// }else if (isListened == "N" || isListened == "n"){
//     isListened =false
// }else {
//     alert("Wrong input for licence")
// }
// if(age > 18 && isListened  ){
//     document.querySelector(".result").textContent ="You can drive"
// }else {
//     document.querySelector(".result").textContent ="You can't drive"
// }

// let a = 4 , b = "s", c = 5;
// let result = true && false && true || false;
// alert(result);

// Job apply in army
let height = Number(prompt("Enter your body height"));
let education = Number(prompt("Enter your Education"));
if (height > 5.8){
    if(education > 16){
        alert("You can go for commision")
    }
    else{
        alert("You can go as a soldier")
    }
}else{
    alert("sorry ! you are not selected")
}