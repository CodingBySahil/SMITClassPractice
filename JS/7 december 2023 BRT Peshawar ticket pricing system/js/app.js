function warning(){
    document.querySelector('body').style.background = "red"; 
    document.querySelector('.result').style.color = "yellow"; 
}

function normal(){
    document.querySelector('body').style.background = "white"; 
    document.querySelector('.result').style.color = "green"; 
}
function BrtTicketPrice(){
    let distanceTraveled = document.querySelector('#distance-traveled').value;
    if(distanceTraveled <= 0 || distanceTraveled > 100){
        document.querySelector('.result').textContent = "You have enter the value out of range. The range of BRT route is from 1 kilometer to 100 kilometer";
        warning();
    }else if(distanceTraveled > 0 && distanceTraveled <= 5) {
        document.querySelector('.result').textContent = "Total price : RS 10";
        normal();
    }else if(distanceTraveled > 5 && distanceTraveled <= 10) {
        document.querySelector('.result').textContent = "Total price : RS 15";
        normal();
    }else if(distanceTraveled > 10 && distanceTraveled <= 15) {
        document.querySelector('.result').textContent = "Total price : RS 20";
        normal();
    }else if(distanceTraveled > 15 && distanceTraveled <= 20) {
        document.querySelector('.result').textContent = "Total price : RS 25";
        normal();
    }else if(distanceTraveled > 20 && distanceTraveled <= 25) {
        document.querySelector('.result').textContent = "Total price : RS 30";
        normal();
    }else if(distanceTraveled > 25 && distanceTraveled <= 30) {
        document.querySelector('.result').textContent = "Total price : RS 35";
        normal();
    }else if(distanceTraveled > 30 && distanceTraveled <= 35) {
        document.querySelector('.result').textContent = "Total price : RS 40";
        normal();
    }else if(distanceTraveled > 35 && distanceTraveled <= 40) {
        document.querySelector('.result').textContent = "Total price : RS 45";
        normal();
    }else if(distanceTraveled > 40 && distanceTraveled <= 100) {
        document.querySelector('.result').textContent = "Total price : RS 50";
        normal();
    }
    else {
        document.querySelector('.result').textContent = "Only enter kilometer in numbers not string";
        warning();
    }

}