var Letter = function(letter){
  this.letter = letter;
  this.guessed = false;
};

Letter.prototype.getDisplay = function(){
  // return "_" if not guess, otherwise return the letter
  if ( !this.guessed ) {
    return "_";
  }
  return this.letter;
};

Letter.prototype.guess = function (userGuess) {
  if ( userGuess.toLowerCase() === this.letter.toLowerCase()) {
    this.guessed = true;
  }
};

// =================================================
//  Testing stuff
// =================================================
// var a = new Letter( "a" );
// console.log( "A " + a);

// console.log(a.getDisplay());
// a.guess("a");
// console.log(a.getDisplay());

// a.guess( "b" );

// console.log( a + '' );

// a.guess( "a" );

// a.guessed = true;

// console.log(a.getDisplay());

// Word has an array of "Letter" objects

module.exports =  Letter
