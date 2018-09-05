var Letter = require("./Letter.js")

function Word(word){
    this.dataWord = []; 
    this.correctGuess = false;
    for(var i =0 ; i < word.length;i++)
    {
        var character = new Letter(word[i]);
        this.dataWord.push(character);
    }
    this.wordDisplay = function(){
        var tempString = "";
        this.dataWord.forEach(function(element){
            tempString += element.display() + " ";
        });
        return tempString;
    }
    this.checkAllLetters = function(letter){
        var correct = false;
        this.dataWord.forEach(function(element){
            element.checkLetter(letter);  
        })
        
    }
    this.wordIsGuess = function(){
        var counter= 0; 
        // count how many letter have boolean with true
        this.dataWord.forEach(function(element){
            if(element.guessRight ==  true){
                counter++;
            }
            
        })
        // if all letter have booleans with true then the total should be equal to the length of the array.
        if(counter == this.dataWord.length){
            this.correctGuess = true; 
        }
        else{
            this.correctGuess = false;
        }
        
    }
}

module.exports = Word;