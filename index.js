var Word = require("./Word")
var WordBank = require("./wordBank.js")
var inquirer = require("inquirer")

var newGuess;
var userName; 
var numberofGuesses = 10; 
var listOfGuesses = [];
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Welcome to the 90's movies \nHangman \n What is your name?",
      name: "username"
    }
  ])
  .then(function(answers) {
    userName = answers.username;
    resetGame();
    runGame(); 
  });

function runGame() {
    // console.clear();
    console.log("******* HangMan *******")
    console.log("Guess this popular 90's movie: ")
    
    console.log(newGuess.wordDisplay())
    console.log("Your guess so far: " + listOfGuesses)
    console.log("Number of Guess left " + (numberofGuesses))
    if(!newGuess.correctGuess){
      inquirer
        .prompt([
          {
            type: "input",
            message: "Pick a letter",
            name: "letters",
            validate: function (value) {
              var letters = /^[A-Za-z]+$/;
              // counter is to check that all values enter are letters
              var counter = 0;
              for (var i = 0; i < value.length; i++){
                if (value[i].match(letters) && !listOfGuesses.includes(value[i])  ) {
                  for(var i = 0; i < value.legnth;i++){
                    listOfGuesses.push(value[i].toLowerCase());
                  }
                  counter++;
                } 
                else{
                  console.log("\n Already picked");
                }
              }
              // if counter is equal to value.lenght than all entries were letters
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
              newGuess.checkAllLetters(response.letters[i]); 
          }
          if(numberofGuesses <= 0){
            console.log("You are out of guesses")
            console.log("***********Game Over**********")
            newGame();
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
  numberofGuesses = 10;
  listOfGuesses = [];
  
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