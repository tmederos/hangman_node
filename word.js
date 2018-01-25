var Letter = require('./letter.js');

var Word = function( word ){
  this.wordArray = [];
  for ( var i=0; i < word.length; i++ ){
    this.wordArray.push( new Letter(word[i]));
  }
};

Word.prototype.getDisplay = function( ) {
	var hangWord = "";
	// Iterate over each letter in the word
	for ( var i = 0; i < this.wordArray.length; i++ ) {
		var currentWordLetter = this.wordArray[i];
		// use imported function to append either the letter itself (if it was guesssed) or a "_" if it wasn't guessed
		hangWord = hangWord + " " + currentWordLetter.getDisplay();
	}
	return hangWord;
};

Word.prototype.checkGuess = function( guessedLetter ) {
	for ( var i = 0; i < this.wordArray.length; i++ ){
	  this.wordArray[i].guess(guessedLetter) === true;
	}
	// console.log( "Word Array: " + JSON.stringify( this.wordArray )  );
};

Word.prototype.checkSolved = function () {
	return this.getDisplay().indexOf('_') === -1;
};

// =================================================
//  Testing stuff
// =================================================

// var currentWord = "glendale";
// var a = new Letter( "l" );
// console.log( "The Current Word is: " + currentWord );
// var word = new Word( currentWord );

// console.log( "The Word is - " + word.wordArray );
// console.log( "The letter is - " + a.letter );
// var checkGuess = word.checkGuess( "l"  );
// console.log( "Is Letter in Word - " + checkGuess );
// console.log( "Display - " + word.getDisplay( "l" ) );

// console.log( "Found! "+  a.letter  ) );

// var displayWord = word.getDisplay();
// console.log( "Display word " + displayWord );

// var solved = word.checkSolved();

// console.log("Is it solved - " + solved );

module.exports =  Word

