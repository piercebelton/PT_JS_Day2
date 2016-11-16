//Purpose: Number guessing game between 1-100 with hints of high or low if user guesses wrong
//Signature: (x) -> string
//Examples: (5) -> "Too low, dummy."
//          (91) -> "Too high, idiot."
//          (52) -> "Right on the money, champ."

function highLowGame() {
  var attempts = 0;
  var guess;
  var answer = Math.floor((Math.random() * 100) + 1);
  console.log (answer);
  var name = prompt("What is your name?")
    while (guess != answer){
      guess = parseInt(prompt("Guess a number between 1 and 100"))
      if (attempts > 7) {
        alert("All of your data has been deleted from GitHub")
        return;
      }
      else if (guess < answer){
        alert("Too low, dummy.")
      }
      else if (guess > answer){
        alert("Too high, idiot.")
      }
      else if (guess === answer) {
        alert("Right on the money, " + name);
      }
      else {
        alert("You have to enter a number, dippy.")
      }
      attempts ++;
    }
}





//Returns a random number between 1 and 100

Math.floor((Math.random() * 100) + 1);
