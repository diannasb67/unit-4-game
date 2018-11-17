
$( document ).ready(function() {
    console.log( "ready!" );
});

// <!-- // computer selects random number // -->


document.getElementById("random").innerHTML =
Math.floor(Math.random() * 121);


// <!-- // set tally of wins and losses -->

var gems = ["pink", "green", "red", "purple" ];
var wins = 0;
var losses = 0;





