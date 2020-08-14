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

const points = document.querySelector(".points");
const nameBtn = document.querySelector(".name-btn");
// let nameOne = document.querySelector("name-input").value;

playerTurn = document.querySelector("#player-turn");

points.innerHTML = 0;

selectPlayers.forEach(function(amount){
  amount.addEventListener('click', function(){
    header.classList.add('conceal');
    header.classList.remove("reveal");
    section.classList.add('reveal');
    section.classList.remove("conceal");
    // playerTurn.innerHTML = nameOne;
  });
})

playerOne = document.querySelector(".name-input").value;

nameBtn.addEventListener("click", function(){
  var playerOne = document.querySelector(".name-input").value;
  console.log(playerOne);
  return false;
});


// const playerScore = 0;
// const playerHealth = 10;
const player1 = {
  name: playerOne,
  health: 10,
  points: 0,
  gems: 0
};





var nameTwo = document.querySelector("name-input-two");
function Player(name){
  this.name = name;
}

Player.prototype.health = 10;
Player.prototype.points = 0;
Player.prototype.gems = 0;
// const player1 = new Player(nameOne);


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


  dice.forEach(function(die){
    die.addEventListener("click", function(){
      this.classList.toggle("clicked");
    })
  });




select.addEventListener('click', function(){
  let one = 0;
  let two = 0;
  let three = 0;
  dice.forEach(function(die){
    if (die.innerHTML == "1"){
      one++;
    }
    if (die.innerHTML == "2"){
      two++;
    }
    if (die.innerHTML == "3"){
      three++;
    }
    count = 2;
    die.innerHTML = "";
    die.classList.add("clicked");
    rolls.innerHTML = "Roll the dice!"
    rollDice.disabled = false;
  })
  if (one >= 3){
    player1.points += (one -2);
    points.innerHTML = (player1.points);
    console.log(player1.points);
  }
  if (two >= 3){
    player1.points += (two -1);
    points.innerHTML = (player1.points);
    console.log(player1.points);
  }
  if (three >= 3){
    player1.points += (three);
    points.innerHTML = (player1.points);
    console.log(player1.points);
  }
  if (player1.points >= 5){
    console.log(player1.name + " Wins!!!!!!!!!!");
  }
});


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
