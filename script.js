const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
const image4 = document.querySelector("#imge4");
const form = document.querySelector("#form");
const result = document.querySelector("#result");
const dice = document.querySelector("#dice");
const diceImg = document.querySelector("#diceImg");
const congratulation = document.querySelector("#congratulation");

let name, email, username;
let diceRolls = [];
let step = 1;
let attempts = 1;

image1.addEventListener("click", function() {
  if (step === 1) {
    form.style.display = "block";
    step++;
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  name = document.querySelector("#name").value;
  email = document.querySelector("#email").value;
  username = document.querySelector("#username").value;
  form.style.display = "none";
  image2.style.display = "block";
});

image2.addEventListener("click", function() {
  if (step === 2) {
    result.style.display = "block";
    result.innerHTML = `Name: ${name}<br>Username: ${username}`;
    step++;
  }
});

image3.addEventListener("click", function() {
  if (step === 3) {
    dice.style.display = "block";
    step++;
  }
});

document.getElementById('diceImg').addEventListener("click", function() {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceRolls.push(roll);
  if (diceRolls.length === 3) {
    const sum = diceRolls.reduce((acc, current) => acc + current);
    //console.log(sum);
    if (sum > 10) {
      if (step === 4) {
        congratulation.style.display = "block";
        step++;
      }
    } else {
      attempts++;
      if (attempts === 2) {
        alert("Bad luck!");
      } else {
        alert("You need to roll a higher score. Try again!");
      }
    }
  }
});

document.getElementById('img4').addEventListener("click", function() {
  if (step === 5) {
    const coupon = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
    alert(`Your coupon is: ${coupon}`);
    step++;
    congratulation.style.display = "block";
  }
});
