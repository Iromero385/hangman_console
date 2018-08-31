var Word = require("./Letter.js")
var WordBank = require("./wordBank.js")
var inquirer = require("inquirer")
var NewGuess = new Word(WordBank[6]);
var userName; 
var gameOver = false
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    }
  ])
  .then(function(answers) {
    userName = answers.username;
    runGame(); 
  });

function runGame() {
    if(!gameOver){
      inquirer
        .prompt([
          {
            type: "input",
            message: "Pick a letter",
            name: "letter",
            validate: function (value) {
              var letters = /^[A-Za-z]+$/;
              if (value.match(letters)) {
                return true;
              }
              else {
                alert("message");
                return false;
              }
            }
          }
        ])
        .then(function (response) {
          
        });

    }
      
  

}
function resetGame(){
  var seed = Math.floor(Math.random()*WordBank.length)
  NewGuess = new Word(WordBank[6]);
  gameOver = false;
}