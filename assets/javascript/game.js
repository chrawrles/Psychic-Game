  // Array of the Alphabet + counter of the events
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
  // Variable needed for functions
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
  display();

  // Event designated for guesses
document.onkeypress = function(event) {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}
  // Function that displays all of the wins/losses/guesses
function display() {
  var winsP = document.getElementById("wins");
  var lossesP = document.getElementById("losses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");
  winsP.innerHTML = wins;
  lossesP.innerHTML = losses;
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(',');
}
  // On win this function will reset the game
function win() {
  wins++;
  resetGame();
}
  // This function will reset after all of the guesses are used up
function lost() {
  losses++;
  resetGame();
}
  // This function shows the letters that player failed to guess right
function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}
  // This function resets the game and resets the guesses left & guessed le
function resetGame() {
  guessesLeft = 8;
  guessedLetters = [];
  letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("Letter to guess: " + letterToGuess);
}