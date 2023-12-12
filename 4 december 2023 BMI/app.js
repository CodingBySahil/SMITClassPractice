function bmiFunction(){
    let weight = Number(document.querySelector(".weight").value);
    let height = Number(document.querySelector(".height").value);
    let bmi = weight / (height * height)
    document.querySelector("#result").textContent = bmi;

    if (weight == 0 || weight == NaN ){
        alert("Wrong input ! re-enter your input")
    }

    if (bmi <= 18.5){
        document.querySelector(".bmiSay").textContent = "Underweight";
    } else if (bmi > 18.5 && bmi <= 24.9){
        document.querySelector(".bmiSay").textContent = "Normal weight";
    } else if (bmi > 24.9 && bmi <= 30){
        document.querySelector(".bmiSay").textContent = "over weight";
    } else if (bmi > 30){
        document.querySelector(".bmiSay").textContent = "Obesity";
    } 

}