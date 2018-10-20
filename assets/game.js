var isGameOn = 0;
var userGuess = "";
var word = "";
var answerBlank = [];
var wordArray = [];
var wrongLetters = [];
var wrongCount = 0;
var winCount = 0;
var losesCount = 0;

var words = [
    "school",
    "hospital",
    "skyscraper",
    "store",
    "mall",
    "house",
    "cabin"
];

//outside, crweate all variables that are used by many functions
//insisde of game-start function:
// re-set appropriate varaibles back to zero, or one (game active)
// choose new word, set new word array

//choose word, make dashed word
    var word = words[Math.floor(Math.random() * words.length)];
    var answerBlank = [];
    for (var i = 0; i < word.length; i++){
        answerBlank[i] = "_";
    }
    var wordArray = word.split('');
    var wrongLetters = [];
    var wrongCount = 0;
    var winCount = 0;
    var losesCount = 0;

document.onkeyup = function(event) {
    var characterValid = false;
    userGuess = event.key;
    userGuess = userGuess.toLowerCase();
 
    if (validCharater() == true) {
        compareGuess();
        setTextVariables();
        isGameOver();
    }
}

//compare guess function to make sure guess is accurate
function compareGuess(){
    var matches = 0;
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i] == userGuess) {
            answerBlank[i] = userGuess
            matches++
        }
    }
    if (matches == 0) {
        wrongLetters.push(userGuess)
        wrongCount++
    }
}    

function isGameOver() {
    if (answerBlank.indexOf("_") == -1) {
       // confirm("game over you win!");
       winCount++;
    }
    else if (wrongCount > 12) {
        // confirm("game over you lose");
        losesCount++;
    }
}


function setTextVariables() {

    var answerBlankText = document.getElementById("blankguess-text")
    answerBlankText.textContent = answerBlank

    var wrongLettersText = document.getElementById("wrongguess-text")
    wrongLettersText.textContent = wrongLetters.join(", ");

    var winDisplay = document.getElementById("wins")
    winDisplay.textContent = winCount;

    var losesDisplay = document.getElementById("loses")
    losesDisplay.textContent = losesCount;


}       

function validCharater() {
   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (alphabet.indexOf(userGuess) == -1) {
        return false
    } else {
        return true
    }
}



    
   // Game code goes here
    // Show the player their progress
    // Take input from the player
    // Update answerBlank and remainingLetters for every correct guess
 
    


    
// If the word has been guessed then break (End game)

// else // If the word has not been guessed {

    //  Show the player their current progress
    
    //  Get a guess from the player

    //  If the guess is in the word {
            //compareGuessToWord(guess, word)
         //  Update the player's progress with the guess
                // replace blank spaces with correct letter
    // else (the guess is not in the word)

        // mark wrong
        // exit 

