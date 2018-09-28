'use strict'

// pick a random number in range 0-100, 0 and 100 included
var numberToGuess = Math.floor(Math.random() * (100 + 1) );

// debug message for the developer, comment out or remove in production
console.log("To guess: " + numberToGuess);

// variable to hold the latest guess
// initial value is undefined to be able to tell if any guesses have been made
var guess = undefined;

// define variables also for the best upper and lower side guess as well as the
// number of guesses

var bestLower =0;//= document.getElementById('lower-best').value;
var bestUpper =0;//= document.getElementById('upper-best').value;
// you may want to fetch the DOM elements into variables to make
// your code easier to write and read (refer to variable names instead of
// "document.getElementById(...)" etc)

var numbers = [];
var  guessCount = 1;

/*for (var i= 0; i > numbers.length; i++){
  if (quess >numbers[i].value)
  document.getElementById('upper-best').innerHTML = bestUpper;
  guessCount ++;
  console.log(numbers[i]);
}
*/
//
// event handler for form submission
//
function guessMade() {

  // fetch the input value and convert it into a number


  var input = document.getElementById('number').value;
  guess = Number(input);
  console.log("Guess: " + guess);
  numbers.push(guess);
  console.log(numbers);


if(guess==numberToGuess){
document.getElementById('hint').innerHTML= "your guess is rigth ";
  console.log("You guess rigth");
  var listOfNumbers ="";
    for (var p of numbers) {
      listOfNumbers = listOfNumbers + p +"<br>";
            console.log(listOfNumbers);

    }
    document.getElementById('numbers').innerHTML=listOfNumbers;
}
else if (guess<numberToGuess){
  console.log("your guess is too low ");
  document.getElementById('hint').innerHTML= "your guess is too low ";

  if (guess>bestLower){
    bestLower = guess;
    console.log("Lower guess is " + bestLower);
    document.getElementById('lower-best').innerHTML= "Lower guess is: " + bestLower;

}
}
else if(guess>numberToGuess){
  console.log("Guess: " + guess);
  console.log("your guess is too high ");
  document.getElementById('hint').innerHTML= "your guess is too high ";



/*if (guess<bestUpper){
  bestLower = guess;
  console.log("Lower guess is " + bestLower);

}*/

if(guess > bestUpper){
  bestUpper = guess;

console.log("Highest guess is " + bestUpper);
document.getElementById('upper-best').innerHTML= "Highest guess is: " + bestUpper;
}
}
//console.log("Highest guess is " + bestUpper);

/*else  if (guess<bestUpper){
  bestLower = guess;

  console.log("Lower guess is " + bestLower);
}*/
//function checkgueses(){

//console.log(numbers);



  // clear the form for a new guess
  document.getElementById('input-form').reset();

  /*
  Implement algorithm:

	Update the number of guesses
	If the guess is lower than the number to guess
		Give hint that the number is higher
		If the guess if better than the current best lower side guess
			Update the best lower side guess
	If the guess is higher than the number to guess
		Give hint that the number is lower
		If the guess if better than the current best upper side guess
			Update the best upper side guess
	Otherwise
		Display the game over message and the number of guesses in the hint element
		Display all the numers from zero to the number to guess in the numbers element (note that you'll need to output them as html code to make them
		render correctly)
  */

  // submit handler returns false to prevent form submission
  // which would cause a page reload and reset everything
  return false;
}


// set submit handler for the form, that is tell which function
// to call when the user presses submit
document.getElementById('input-form').onsubmit = guessMade;
