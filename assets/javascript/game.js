
var psychicGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "v",
"n", "o", "p","q", "r", "s", "t", "u", "z", "w", "x", "y"];


// // var chances =0;
// // var psychicGuess;
// // var wrongguess = [];

// if (chances === 0) {
//     computerguess = computerchoices [
//         Math.floor( Math.random() * computerchoices.length];
// };

// if (computerguess !== userkeypress) {
//     if
// }





    // var game = 0;
    var wins = 0;
    var losses  =0 ;
    var guesses = 0;
    var guessesLeft = 9;
    var guessedLetters = [];
    var letterToGuess = null;

// document.onkeyup = function(event) {
//     var userkeypress = event.key;
    
// }


// var winsSpace = document.getElementById("wins");
// winsSpace.textContent = "Wins: " + wins;   

// var lossSpace = document.getElementById("losses");
// lossSpace.textContent = "Losses: " + losses;


// computer selects random letter
        var psychicChoice = psychicGuess[Math.floor(Math.random() * psychicGuess.length)];
// gives users 9 guesses
        function updateGuessessLeft() {
            // Getting HTML element and setting it equal to guessessLft
            document.querySelector('#guessLeft').innerHTML="Guesses left:" + guessesLeft;
        };

        function updateLetterToGuess() {
            letterToGuess = this.psychicGuess[Math.floor(Math.random() * this.psychicGuess.length)];
};
updateLetterToGuess ();
        
        function updateGuessesSoFar() {
            // Guesses user tries
            document.querySelector('#var').innerHTML = "Your Guesses so far:" + guessedLetters.join(',');

        };

        // This function is used to reset the game
    var reset = function () {
        guessesLeft = 9;
        guessedLetters = []
        updateLetterToGuess();
        updateGuessessLeft();
        updateGuessesSoFar();
    }
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode (event.keyCode).toLowerCase();
        var check = psychicGuess.includes(userGuess);
   
       console.log(check);

        if (!check) {
            alert("Not a valid selection");
            return false;
        } else {

           guessesLeft--;
           guessedLetters.push(userGuess);
           updateGuessessLeft();
           updateGuessesSoFar ();

           // if(psychicGuess !=)
           
        if (guessesLeft > 0) {
           if (userGuess === psychicChoice) {
                wins++;
               document.querySelector('#wins').innerHTML = "Wins: " + wins;
               userGuess = userGuess.toUpperCase();
               reset();
           } 
       } else {
           // We will lose the game and it will display
           losses++;
           document.querySelector('#losses').innerHTML = "Losses: " + losses;
           updateGuessessLeft()
           // Then we'll call the reset. 
           reset();
       }
   }
   }

    // User key input to make selection in lowercase / alternate code 
    
    // document.onkeyup = function(event) {
    //      var userGuess = String.fromCharCode (event.keyCode).toLowerCase();
    //      var check = psychicGuess.includes(userGuess);
    
    //      if (check === false) {
    //          alert("Not a valid selection");
    //          return false;
    //      } else if (check === true) {
    //         guessesLeft--;
    //         guessedLetters.push(userGuess);
    //         updateGuessessLeft();
    //         updateGuessesSoFar ();

    //         // if(psychicGuess !=)
            
    //      if (guessesLeft > 0) {
    //         if (userGuess === psychicChoice) {
    //              wins++;
    //             document.querySelector('#wins').innerHTML = "Wins: " + wins;
    //             userGuess = userGuess.toUpperCase();
    //             reset();
    //         }
    //     } else if (guessesLeft == 0) {
    //         // We will lose the game and it will display
    //         losses++;
    //         document.querySelector('#losses').innerHTML = "Losses: " + losses;
    //         updateGuessessLeft()
    //         // Then we'll call the reset. 
    //         reset();
       
    //     }
    // }
    // }