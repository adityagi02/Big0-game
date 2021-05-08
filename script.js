
// Variable to store the list of guesses 
let guesses = [];

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
   
  }

// Functionality for playing the whole game
 
function playGame(){

let numberGuess = document.getElementById("number-guess").value;
displayResult(numberGuess);
saveGuessHistory(numberGuess);
    displayHistory();
}
// Show the result for if the guess it too high, too low, or correct

function displayResult(numberGuess){
if (correctNumber > numberGuess){
   showNumberBelow();
  }
else if (correctNumber < numberGuess){
    showNumberAbove();
  }
else {
   showYouWon();
  } 
}
// Initializing a new game by resetting all values and content on the page

function initGame(){
  correctnumber = getRandomNumber();
  document.getElementById("history").innerHTML = "";
  guesses = [];
  displayHistory();  
}

// Reset the HTML content for guess history

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

// Return a random number between 1 and 100;

function getRandomNumber(){
  let randomNumber = Math.random();
  let wholeNumber = Math.floor(randomNumber*100)+1;
  return wholeNumber;
}


 // Save guess history 
 
function saveGuessHistory(guess) {
    guesses.push(guess);
    
}

//  Display guess history to use 

function displayHistory() {
  let index; 
  let list = "<ul class='list-group'>";
 
    while (index < guesses.length){
        list += "li class='list-group-item'>" + "You Guessed  " +
            guesses[index] + "</li>";
        index++
    }
             
     list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

// Retrieve the dialog based on if the guess is wrong or correct 

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  
  //  Retrieve the dialog using the getDialog() function
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}
function showNumberAbove(){
  const text = "Your guess is too high!"
  
  // Retrieve the dialog using the getDialog() function
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  
  //Retrieve the dialog using the getDialog() function 
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
