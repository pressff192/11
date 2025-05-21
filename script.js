let balance = 100; // initial balance

function rollDice() {
  const betNumber = parseInt(document.getElementById('betNumber').value);
  const betAmount = parseInt(document.getElementById('betAmount').value);

  if (isNaN(betNumber) || isNaN(betAmount) || betNumber < 1 || betNumber > 6 || betAmount <= 0) {
    alert("Please enter valid bet details.");
    return;
  }

  if (betAmount > balance) {
    alert("You don't have enough balance!");
    return;
  }

  // Simulate a dice roll between 1 and 6
  const diceRoll = Math.floor(Math.random() * 6) + 1;

  // Update balance based on win or loss
  if (betNumber === diceRoll) {
    balance += betAmount * 5; // win, multiply the bet by 5
    document.getElementById('message').textContent = `You win!`;
    document.getElementById('message').style.color = 'green';
  } else {
    balance -= betAmount; // lose, deduct bet amount
    document.getElementById('message').textContent = `You lose!`;
    document.getElementById('message').style.color = 'red';
  }

  document.getElementById('diceRoll').textContent = `Dice roll: ${diceRoll}`;
  document.getElementById('balance').textContent = `Balance: $${balance}`;

  if (balance <= 0) {
    alert("Game over! You have no more balance.");
    balance = 100; // reset the balance
    document.getElementById('balance').textContent = `Balance: $${balance}`;
  }
}
