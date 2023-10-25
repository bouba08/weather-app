let message = "";
let sum = 0;
let alive = false;
let blackjack = false;
let gamecard = document.getElementById("game-card");
let gamestarted = document.getElementById("game-start");
let gamesum = document.querySelector("#game-sum");
let card = [];   

function randomcard() {
  let randomnumber = Math.floor(Math.random() * 13) + 1;
  if (randomnumber === 1) {
    return 11;
  } else if (randomnumber > 10) {
    return 10;
  } else {
    return randomnumber 
  }
}

function startgame() {
  alive = true;
  let firstcard = randomcard();
  let secondcard = randomcard();
  card = [firstcard, secondcard];
  sum = firstcard + secondcard;
  game();
}

function game() {
  gamecard.textContent = "Card: ";
  for (let i = 0; i < card.length; i++) {
    gamecard.textContent += card[i] + ",";
  }
  gamesum.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "nearly there";
  } else if (sum === 21) {
    message = "well done";
    blackjack = true;
  } else {
    message = "you lost";
    alive = false;
  }
  gamestarted.textContent = message;
  
}

function newcard() {
  if (blackjack === false && alive === true) {
    let newcard = randomcard();
    sum += newcard;
    card.push(newcard);
    game();
  }
}
