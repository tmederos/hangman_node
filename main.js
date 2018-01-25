var inquirer = require( 'inquirer' );
var isLetter = require('is-letter');
var Letter = require( './letter.js' );
var game = require( './game.js' );
var Word = require('./word.js');

var remainingGuesses = 7;
var guessedArray = [];

console.log( "" );
console.log( "Welcome to the Hangman game! The secret word is a city in Arizona.");
console.log( "" );
console.log( "You have " + remainingGuesses + " guesses remaining."  );
var showWord = game.pickTheWord();
var secretWord = showWord.toLowerCase();
console.log( "Secret word - " + secretWord );
var word = new Word( secretWord );
var displayWord = word.getDisplay();
console.log( "Display word " + displayWord );

function PromptForLetter(){
  //
  if ( word.checkSolved() ){
    console.log( "Congratulations you guessed the word!  " + showWord );
    restartGame();
    return;
  }
  if ( remainingGuesses === 0 ){
    console.log( "Game Over. You ran out of guesses. The word was - " + showWord );
    restartGame();
    return;
  }

  inquirer.prompt([{
    name: "userLetter",
    type: "input",
    message: "Guess a letter:",
    validate: function(value) {
      if ( isLetter( value )){
        return true;
      } else{
        console.log( "  Please enter a letter from a to z." );
        return false;
      }
    }
  }]).then( function( letter ) {
    var currentLetter = ( letter.userLetter ).toLowerCase();
    // Adds to the guessedLetters array if it isn't already there
    var guessedAlready = false;
      for ( var i = 0; i< guessedArray.length; i++ ){
        if ( currentLetter === guessedArray[i] ){
          guessedAlready = true;
        }
      }
      if( guessedAlready === false ){
        guessedArray.push( currentLetter );
        word.checkGuess( currentLetter );
        var correctGuess = secretWord.indexOf( currentLetter );
        displayWord = word.getDisplay();
        console.log( "" );
        console.log( "Display Word: " + word.getDisplay() );
        console.log( "" );
        if ( correctGuess  === -1 ) {
          remainingGuesses--      
          console.log( "Incorrect, Try again! You have " + remainingGuesses + " guesses remaining."  );
          console.log( "Letters guessed: " + guessedArray );
          console.log( "" );
          PromptForLetter();
        }
        else {
          console.log( "Correct guess!" );
          console.log( "Letters guessed: " + guessedArray );
          console.log( "You have " + remainingGuesses + " guesses remaining."  );
          console.log( "" );
          PromptForLetter();
        }
      }
      else{
        console.log( "You've guessed that letter already. Try again." );
        console.log( "" );
        PromptForLetter();
      }
})
};

PromptForLetter();

function restartGame() {
  console.log("")
  inquirer.prompt([{
    name: "play",
    type: "confirm",
    message: "Would you like to play the Hangman game again?"
  }]).then( function( answer ) {
    if ( !answer.play ){
      console.log( "Good-bye.");
      return;
    }
    else
    {
      remainingGuesses = 7;
      guessedArray = [];
      console.log( "" );
      console.log("Starting a new game ==================");
      var showWord = game.pickTheWord();
      var secretWord = showWord.toLowerCase();
      console.log( "Secret word - " + secretWord );
      var word = new Word( secretWord );
      var displayWord = word.getDisplay();
      console.log( "Display word " + displayWord );
      PromptForLetter();
    }
})};
