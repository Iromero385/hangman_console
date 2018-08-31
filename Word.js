var Letter = require("./Letter.js")

function Word(word){
    this.dataWord = []; 
    for(var i =0 ; i < word.length;i++)
    {
        var character = new Letter(word[i]);
        this.dataWord.push(character);
    }
    this.wordDisplay = ()=>{
        var tempString = "";
        this.dataWord.forEach(element => {
            tempString += element.display() + " ";
        });
        return tempString;
    }
}

module.exports = Word;