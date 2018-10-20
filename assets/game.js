
//set variables
var isGameOn = 0;
var userGuess = "";
var word = "";
var answerBlank = [];
var wordArray = [];
var wrongLetters = [];
var wrongCount = 0;
var winCount = 0;
var losesCount = 0;
var winDiv = document.getElementById("winDiv");
var loseDiv = document.getElementById("loseDiv")



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


function startGame() { 

    word = words[Math.floor(Math.random() * words.length)];
    answerBlank = [];
    for (var i = 0; i < word.length; i++){
        answerBlank[i] = "_";
    }
    wordArray = word.split('');
    wrongLetters = [];
    wrongCount = 0;
    isGameOn = 1;
}



document.onkeyup = function(event) {

    if (isGameOn == 0) {
        startGame();
    }
    else {
        userGuess = event.key;
        userGuess = userGuess.toLowerCase();
 
        if (validCharater() == true) {
            compareGuess();
            setTextVariables();
            isGameOver();
        }
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
       winCount++;
       isGameOn = 0;
       greenb();
    }
    else if (wrongCount > 12) {
        losesCount++;
        isGameOn = 0;
        redb()
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

function greenb() {
        if (winDiv.style.backgroundColor == "") {
            winDiv.style.backgroundColor = "green";
        } else if (winDiv.style.backgroundColor == "green") {
            winDiv.style.backgroundColor = "rgb(0, 255, 127)";
        } else if (winDiv.style.backgroundColor == "rgb(0, 255, 127)"){
            winDiv.style.backgroundColor = "green";
        }
        if (loseDiv.style.backgroundColor != "") {
            loseDiv.style.backgroundColor = "";
        }
}

function redb() {
    if (loseDiv.style.backgroundColor == "") {
        loseDiv.style.backgroundColor = "red";
    } else if (loseDiv.style.backgroundColor == "red") {
        loseDiv.style.backgroundColor = "rgb(250, 128, 114)";
    } else if (loseDiv.style.backgroundColor == "rgb(250, 128, 114)"){
        loseDiv.style.backgroundColor = "red";
    }
    if (winDiv.style.backgroundColor != "") {
        winDiv.style.backgroundColor = "";
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

