const rollDice = document.querySelector(".roll-dice");
const select = document.querySelector(".select");
const clicked = document.getElementsByClassName("clicked");
const rollsLeft = document.querySelector("#rolls-left");

const rolls = document.querySelector(".rolls");
const dice = document.querySelectorAll(".dice");

const selectPlayers = document.querySelectorAll(".select-players");
const header = document.querySelector("header");
const section = document.querySelector("section");
const conceal = document.querySelector(".conceal");
const reveal = document.querySelector(".reveal");

selectPlayers.forEach(function(amount){
  amount.addEventListener('click', function(){
    header.classList.add('conceal');
    header.classList.remove("reveal");
    section.classList.add('reveal');
    section.classList.remove("conceal");
  });
})


const playerScore = 0;
const playerHealth = 10;
const player1 = {
  name: "Player 1",
  health: 10,
  points: 0,
  gems: 0
};

function Player(name){
  this.name = name;
}

Player.prototype.health = 10;
Player.prototype.points = 0;
Player.prototype.gems = 0;
const ben = new Player("Ben");


var count = 2;

rollDice.addEventListener("click", function(){
  rolls.innerHTML = "You have " + count + " roll(s) left! Click the dice you want to KEEP!"
  count--;
  rolling();
  if (count == -1){
    rolls.innerHTML = "Turn finished! Next player press 'Select' to continue";
    rollDice.disabled = true;
  }
});

//toggle class when dice clicked
  dice.forEach(function(die){
    die.addEventListener("click", function(){
      this.classList.toggle("clicked");
    })
  });




select.addEventListener('click', function(){
  dice.forEach(function(die){
    count = 2;
    die.classList.add("clicked");
    rolls.innerHTML = "Roll the dice!"
    rollDice.disabled = false;
    // die.classList.disable("clicked");
    var countOnes = 0;
    if (die.innerHTML == '1'){
      countOnes++;
      die.innerHTML = "";
      console.log(countOnes);
    }
    if (countOnes >= 3){
      ben.points == countOnes - 2;
    }
    console.log(ben.points);
  })
});

// function checkOnes(){
//   dice.forEach(function(die){
// }

function rolling(){
  dice.forEach(function(die){
    if (die.classList.contains('clicked')){
      let rollOutcome = (Math.floor(Math.random() * 6 + 1));
      if (rollOutcome == 1){
        die.innerHTML = "1";
      }
      else if (rollOutcome == 2){
        die.innerHTML = "2";
      }
      else if (rollOutcome == 3){
        die.innerHTML = "3";
      }
      else if (rollOutcome == 4){
        die.innerHTML = '<img src="health.png">';
      }
      else if (rollOutcome == 5){
        die.innerHTML = '<img src="paw.png">';
      }
      else if (rollOutcome == 6){
        die.innerHTML = '<img src="lightning.png">';
      }
    }
  })
};
