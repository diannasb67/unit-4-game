// create an array of crystals 
var crystals = ['assets/images/amberGem.jpg', 'assets/images/greenGem.jpg', 'assets/images/purpleGem.png', 'assets/images/redGem.jpg'];

//Create a random number to guess
var targetNumber = Math.floor(Math.random() * 121);
console.log(targetNumber);

//Assign a random number for user to click
var userClick = Math.ceil(Math.random() * 12);
console.log(userClick);

var counter = 0;

console.log(counter);

$("#number-to-match").text(targetNumber);

//Create a loop and assign a random number to each cyrstal for the player to click between 1-12 and create an onclick event

for (var i = 0; i < crystals.length; i++) {
  var newCrystal = $("<img>");
  newCrystal.attr('src', crystals[i]);
  newCrystal.attr('random-value', Math.ceil(Math.random() * 12));
  newCrystal.addClass('gem-image newCrystal');
  newCrystal.attr('data-value', crystals[i]);
  $("#crystals").append(newCrystal);

};
console.log("works");


//Create a tally of wins and losses
//Create counter for the player and link it to update the total score when the crystal is clicked

$("img").on('click', function () {
  var crystalValue = ($(this).attr("data-value"));
  crystalValue = parseInt(userClick);
  counter += crystalValue;


  alert("New score: " + counter);
  $(".score").append(counter);
  counter++;

//Create if else statements, player wins if their score matches the random number
//Create if else statements: player losses if their score goes above random number


  if (counter === targetNumber) {
    alert("You win!"); counter++;
  }

  else if (counter >= targetNumber) {
    alert("You lose!!"); counter++
  }

});



//At restart the total score should remain, do not refresh.

//New game should have a new random number
//New game: crystals should have new random number
//New game: score and counter reset to zero





