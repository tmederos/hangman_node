var wordList = {
    words: [ "Phoenix", "Tucson", "Mesa", "Chandler", "Glendale", "Scottsdale", "Gilbert", "Tempe", "Peoria", "Surprise", "Bisbee" ]
  };
function pickTheWord(){
    var word =  wordList.words[Math.floor(Math.random()*wordList.words.length)];
    return word;
};
  
 module.exports.pickTheWord = pickTheWord;
