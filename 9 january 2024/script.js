let total = 0;
function rollTheDisk() {
  x = Math.random() * 6 + 1;
  document.querySelector(".digit").innerHTML = Math.trunc(x);
  x = Math.trunc(x);
  let diskImg = document.querySelector(".image");
  diskImg.src = `images/dice-${x}.png`;
  sum();
}
function sum(){
  total += x;
  if (total >= 100) {
    alert("You won the game");
  }
  document.querySelector(
    ".scoreBox"
  ).innerHTML = `Your total score is ${total}`;
}
  
