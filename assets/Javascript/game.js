
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
    "hotel",
    "restaurant",
    "cabin"
];



//start game choose random word and replace with "_"
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


//User input event and start game
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
        answerBlank = wordArray;
        redb()
        setTextVariables()
    }
}


function setTextVariables() {

    var answerBlankText = document.getElementById("blankguess-text")
    answerBlankText.textContent = answerBlank.join(" ")

    var wrongLettersText = document.getElementById("wrongguess-text")
    wrongLettersText.textContent = wrongLetters.join(" ");

    var winDisplay = document.getElementById("wins")
    winDisplay.textContent = winCount;

    var losesDisplay = document.getElementById("loses")
    losesDisplay.textContent = losesCount;


}       
///function to determined if user has chosen a letter from alphabet
function validCharater() {
   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (alphabet.indexOf(userGuess) == -1) {
        return false
    } else {
        return true
    }
}

//turn the wins to 2 greens
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

//turn the loses to 2 reds
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

    