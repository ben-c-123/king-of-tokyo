const rollDice = document.querySelector(".roll-dice");
const select = document.querySelector(".select");
const clicked = document.getElementsByClassName("clicked");
const rollsLeft = document.querySelector("#rolls-left");

const rolls = document.querySelector(".rolls");
const dice = document.querySelectorAll(".dice");


var count = 2;

rollDice.addEventListener("click", function(){
  rolls.innerHTML = "You have " + count + " roll(s) left! Click the dice you want to KEEP!"
  count--;
  rolling();
  if (count == -1){
    rolls.innerHTML = "Turn finished! Next player press 'Select' to continue";
    
  }
});

dice.forEach(function(die){
  die.addEventListener("click", function(){
    this.classList.toggle("clicked");
  })
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

select.addEventListener('click', function(){
  dice.forEach(function(die){
    count = 2;
    die.innerHTML = "";
    die.classList.add("clicked");
    rolls.innerHTML = "Roll the dice!"
  })
});
