console.log('Hello');

//Global Variables
var pChoice; //player choice
var cChoice; //computer choice
var playerWin = '';
var playOptions = ["Rock", "Paper", "Sissors"]; 

//DOM References
var buttonDiv = document.querySelector('.buttons');
var resultText = document.querySelector('.result h2');
var cChoicerText = document.getElementById('cChoice');

//Functions

var displayResults = function() {
    cChoicerText.textContent = playOptions[cChoice];
    resultText.textContent = playerWin;
}

var checkForWin = function() {
//compare weapons
if (pChoice !== cChoice){
    switch(pChoice){
        case 0: // player chose rock
            playerWin = cChoice === 1 ? 'You Lose' : 'You Win!'
            break;
        case 1: //player chose paper
            playerWin = cChoice === 2 ? 'You Lose' : 'You Win!'
            break;
        case 2: // player chose sissors
            playerWin = cChoice === 3 ? 'You Lose' : 'You Win!'
            break;
    }} else {
        playerWin = 'Yall tied';
    };
    displayResults();

//return true if player wins
//else return false 
// compare player choice and computer choice 
// make a function: checkPlayerWinwin(playerChoice, computerChoice) => true/false

};

// comp will choose r,p,or s (via Math.random()) randomly
// correlat "rock", "paper", "sissors" to numeric values => generate number between 1-3
// use array for playOptions: var playOptions = ["Rock", "Paper", "Sissors"]
var computerTurn = function() {
    cChoice = Math.floor(Math.random() * 3)
    checkForWin();
};

// Event Handlers
//player will choose r, p, or s
    //listen for a button click (click handler on buttons or ansestor of buttons)
        // save the value
buttonDiv.addEventListener('click', function(e){
    e.stopPropagation();
    pChoice = parseInt(e.target.id);
    console.log(pChoice);

    //now the computer goes. b/c not hoisting function, comp choice must be above this section 
    computerTurn();
});





// display results 
    // color the button chosen by the player
    //  disable the other two buttons 
    //  display the computer choice 
        // add the relevant image 
//  display who won