var Word = require("./Letter.js")
var inquirer = require("inquirer")
var NewGuess = new Word("Isaac");

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
    if (inquirerResponse.confirm) {
      
    }
    else {
     
    }
  });

  function runGame(){
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
      if (inquirerResponse.confirm) {
        
      }
      else {
       
      }
    });
  }