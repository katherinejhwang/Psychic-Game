$(document).ready(function() {

  var alphabetArray = ('abcdefghijklmnopqrstuvwxyz').split('');
  var wins = 0;
  var losses = 0;
  var guessesLeft = '';
  var computerLetter = [];
  var userGuess = [];
  var lettersGuessed = ['']

  // "Start button" will initialize the game:
  // (1) Generate a random alphabet number that will be stored in the var computerLetter;
  // (2) Set the guessesLeft to 10;
  // (3) empty lettersGuessed array;
  // (4) logs the letter of the alphabet to "ltr-log" and letterGuessed array;

  var btn = document.getElementById('btn');
  btn.addEventListener('click', startGame);

  function startGame() {
    computerLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]; //have to keep the variable here as opposed to outside of the function so that a new letter is generated everytime user click on btn.
    console.log(computerLetter);
    console.log(lettersGuessed);
    // guessesLeft = 10;
    // console.log('why five')
    // console.log(guessesLeft);
    // $('#guessesleft').text('' + guessesLeft);
    console.log(computerLetter);
    $('#ltrlog').empty();

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

      document.onkeyup = function myFxn(event) {
      userGuess = event.key;
      $('#ltrlog').append(userGuess + ' ');
      guessesLeft--;
      console.log(userGuess);
      if (event.key === computerLetter) {
        wins++;
        $('#wins').text('' + wins);
        alert('You win!');
        alert('Click button to start new Game!')
        } else {
          alert('Try again!');
        }
      if (guessesLeft === 0) {
      losses++;
      $('#losses').text('' + losses);
      alert('You lose!');
      alert('Click button to start new Game!')
    }
      }
    }
    
});
