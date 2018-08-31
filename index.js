var Word = require("./Word")
var WordBank = require("./wordBank.js")
var inquirer = require("inquirer")
var newGuess = new Word(WordBank[6]);
var userName; 
var numberofGuesses = 0; 
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Welcome to the 90's movies Hangman \n What is your name?",
      name: "username"
    }
  ])
  .then(function(answers) {
    userName = answers.username;
    runGame(); 
  });

function runGame() {
    console.log(newGuess.wordDisplay())
    console.log("Number of Guess left " + (10-numberofGuesses))
    if(!newGuess.correctGuess){
      inquirer
        .prompt([
          {
            type: "input",
            message: "Pick a letter",
            name: "letters",
            validate: function (value) {
              var letters = /^[A-Za-z]+$/;
              var counter = 0;
              for (var i = 0; i < value.length; i++){
                if (value[i].match(letters) ) {
                  counter++;
                }
              }
              numberofGuesses=+counter;
              if(counter == value.length){
                return true;
              }
              else{
                return false;
              }
  
              
            }
          }
        ])
        .then(function(response) {
          for(var i=0; i < response.letters.length; i++){
            newGuess.checkAllLetters(response.letters[i])
          }
          newGuess.wordDisplay();
          newGuess.wordIsGuess();
          runGame();
        });

    }
    else{
      console.log( userName+ " Won!")
      newGame();
    }
}
function resetGame(){
  var seed = Math.floor(Math.random()*WordBank.length);
  newGuess = new Word(WordBank[seed]);
  numberofGuesses = 0;
  
}
function newGame(){
  
  inquirer
        .prompt([
          {
            type: "confirm",
            message: "Would you like to play again " + userName,
            name: "newGame"
          }
        ])
        .then(function(response) {
          if(response.newGame){
            resetGame();
            runGame();
          }
          else{
            console.log("Thank you for Playing \n"+"Bye "+ userName);
          }
        });
}