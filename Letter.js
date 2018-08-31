function Letter(letter){
    this.hiddenLetter = "_";
    this.letter = letter.toLowerCase();
    this.guessRight = false;
    this.display = function(){
        if(this.guessRight){
            return this.letter
        }
        else{
            return this.hiddenLetter
        }
    };
    this.checkLetter = function(userLetter){
        if(this.letter === userLetter){
            this.guessRight=true;
        }
    };

}

module.exports = Letter; 
