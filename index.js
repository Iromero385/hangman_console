var Word = require("./Word")
var WordBank = require("./wordBank.js")
var inquirer = require("inquirer")
var newGuess = new Word(WordBank[6]);
var userName; 
var gameOver = false
// inquirer
//   .prompt([
//     // Here we create a basic text prompt.
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "username"
//     }
//   ])
//   .then(function(answers) {
//     userName = answers.username;
//     runGame(); 
//   });
runGame();
function runGame() {
    console.log(newGuess.wordDisplay())
    if(!newGuess.correctGuess){
      inquirer
        .prompt([
          {
            type: "input",
            message: "Pick a letter",
            name: "letter",
            validate: function (value) {
              var letters = /^[A-Za-z]+$/;
              if (value.match(letters) && value.length==1) {
                return true;
              }
              else {
                return false;
              }
            }
          }
        ])
        .then(function(response) {
          newGuess.checkAllLetters(response.letter.toLowerCase())
          newGuess.wordDisplay();
          newGuess.wordIsGuess();
          runGame();
        });

    }
    else{
      console.log("You are a Winner")
      console.log("Try again?")
      resetGame();
      runGame();
    }
      
  

}
function resetGame(){
  var seed = Math.floor(Math.random()*WordBank.length)
  newGuess = new Word(WordBank[seed]);
  
}