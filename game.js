// Write code to randomnly generate a letter that will be the computer's letter when you start the game

$(document).ready(function() {

  var alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split("");
  var wins = 0;
  var losses = 0;
  var guessesLeft = 0;
  var computerLetter = [];
  var userGuess = [];

  // Create button that initalizes the game when you click it. This button will:
  //   (1) generate a random alphabet number that will be stored in the variable computerLetter;
  //   (2) set the guessesLeft back to 5;
  //   (3) empty lettersGuessed;
  //   (5) logs the letter of the alphabet to "ltr-log";

  var btn = document.getElementById('btn');
  btn.addEventListener('click', startGame);

  function startGame() {
    var computerLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]; //have to keep the variable here as opposed to outside of the function so that a new letter is generated everytime user click on btn.
    console.log(computerLetter);
    lettersGuessed = [""];
    console.log(lettersGuessed);
    guessesLeft = 5;
    console.log(guessesLeft);
    $("#guessesleft").text('' + guessesLeft);
    console.log(computerLetter);
    $("#ltrlog").empty();

  //Code that will, upon user inputting a letter, do the following:
  // (1) log the user's guess into the div "ltrs";
  // (2) -1 from the variable guessesLeft;
  // (3) compare user's input to the computer letter
  //    (i) if they match, alert "You win!" and +1 to wins;
  //    (ii) if they don't match, alert "Try again!", +1 to guesses, -1 to guessesleft;
  // Run this until the user's guesses === computerLetter OR
  // guessesleft=0
  //  (4) When guessesleft=0, alert "You lose!".

      document.onkeyup = function myFxn(event) {
      userGuess = event.key;
      $("#ltrlog").append(userGuess + " ");
      guessesLeft--;
      console.log(userGuess);
      if (event.key === computerLetter) {
        wins++;
        $("#wins").text('' + wins);
        alert("You win!");
        alert("Click button to start new Game!")
        } else {
          alert("Try again!");
        }
      if (guessesLeft === 0) {
      losses++;
      $("#losses").text('' + losses);
      alert("You lose!");
      alert("Click button to start new Game!")
    }
      }
    }

  // If the user's guess matches the computer's letter, then you win! If the user's guess does not match the computer, alert try again!
    
});


//KJH Comments:  Had to put lines 41-60 within the startGame function