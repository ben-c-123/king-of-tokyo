const rollDice = document.querySelector(".roll-dice");
const diceOne = document.querySelector(".dice-one");
const diceTwo = document.querySelector(".dice-two");
const diceThree = document.querySelector(".dice-three");
const diceFour = document.querySelector(".dice-four");
const diceFive = document.querySelector(".dice-five");
const diceSix = document.querySelector(".dice-six");
const reroll = document.querySelector(".reroll");

rollDice.addEventListener("click", function(){
  rolling();
  rollsLeft();

});



function rolling(){

  const display = document.querySelector(".display");

  const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  for (var i = 0; i < dice.length + 1; i++) {
    let rollOutcome = (Math.floor(Math.random() * 6 + 1));

    if (rollOutcome == 1){
      dice[i].innerHTML = "1";
    }
    else if (rollOutcome == 2){
      dice[i].innerHTML = "2";
    }
    else if (rollOutcome == 3){
      dice[i].innerHTML = "3";
    }
    else if (rollOutcome == 4){
      dice[i].innerHTML = '<img src="health.png">';
    }
    else if (rollOutcome == 5){
      dice[i].innerHTML = '<img src="paw.png">';
    }
    else if (rollOutcome == 6){
      dice[i].innerHTML = '<img src="lightning.png">';
    }
  };

  function rollsLeft(){
    const rollsLeft = document.getElementById("rolls-left");
    rollsLeft.innerHTML = "2";
    console.log("is this thing on?");
  };


};
