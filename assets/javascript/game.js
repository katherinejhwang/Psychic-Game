$(document).ready(function() {

  var alphabetArray = ('abcdefghijklmnopqrstuvwxyz').split('');
  var wins = 0;
  var losses = 0;
  var guessesLeft = '';
  var computerLetter = '';
  var userGuess = '';
  var lettersGuessed = ['']

  // "Start button" will initialize the game:
  // (1) Generate a random alphabet number that will be stored in the var computerLetter;
  // (2) Set the guessesLeft to 10;
  // (3) empty lettersGuessed array;
  // (4) logs the letter of the alphabet to "ltr-log" and letterGuessed array;

function game() {
  document.onkeyup = function myFxn(event) {
    userGuess = event.key;
    if (alphabetArray.includes(userGuess) === false) {
      alert('Please choose a letter of the alphabet');
        }
    else if (lettersGuessed.includes(userGuess) === true) {
      alert('Letter already guessed!');
        }
    else if (alphabetArray.includes(userGuess) === true) {
      if (userGuess === computerLetter) {
        wins++;
        $('#wins').text('' + wins);
        alert('You win!');
        alert('Click Owl to start new Game!')
        }
      else {
        $('#ltrlog').append(userGuess + ' ');
        guessesLeft--;
        $('#guessesleft').text('' + guessesLeft);
        alert('Try again!'); 
        lettersGuessed.push(userGuess);
      }
}
  if (guessesLeft === 0) {
    losses++;
    $('#losses').text('' + losses);
    alert('You lose!');
    alert('Click button to start new Game!')
  }
  }
} 

  function init() {
    computerLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    $('#ltrlog').empty();
    lettersGuessed = [];
    console.log(computerLetter);
    guessesLeft = 8;
    $('#guessesleft').text(guessesLeft);
  }

  var btn = document.getElementById('btn');
  btn.addEventListener('mousedown', init);
  btn.addEventListener('mouseup', game);

  });
  
    
  // When user inputs a guess:
  // (1) store in var lettersGuessed;
  // (2) display user's guess into the div 'ltrs';
  // (3) subtract 1 from the var guessesLeft;
  // (4) compare userGuess to the computerLetter and:
  //    (i) if they match, alert "You win!" and +1 to wins;
  //    (ii) if they don't match, alert "Try again!", -1 to guessesleft;
  // Run this until the user's guesses === computerLetter OR
  // guessesleft=0
  // (5) When guessesleft=0, alert "You lose!".

;
