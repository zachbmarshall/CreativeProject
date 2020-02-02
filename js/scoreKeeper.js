class Player{
    name;
    score = 0;

    constructor(sName){
        this.name = sName;
    }

    setScore(iScore){
        this.score = iScore;
    }

    addScore(iScore){
        this.score += iScore;
    }

    resetScore(){
        this.score = 0;
    }
}

let aoPlayers = [];

function getNumPlayers(){
    document.getElementById("numPlayers").style.display = "none";
    document.getElementById("btnGetNumPlayers").style.display = "none";
    
    var iNumPlayers = parseInt(document.getElementById("numPlayers").value);
    var oBtnStartGame = document.createElement("INPUT");

    document.getElementById("heading").innerHTML = "Enter the players names";

    for(var iCount = 0; iCount < iNumPlayers; iCount++){
        //Displays all of the divs for the same number of players
        document.getElementById("player" + (iCount+1) + "Div").style.display = "block";
        document.getElementById("player" + (iCount+1) + "Name").innerHTML = "Enter player " + (iCount + 1) + "'s name";
        var oInputField = document.getElementById("player" + (iCount+1) + "Score");
        oInputField.type = ("text");
    }
    //Displays the Start Game button
    document.getElementById("btnStartGame").style.display = "block";

}

function getPlayerNames(){

    document.getElementById("btnStartGame").style.display = "none";
    var iNumPlayers = parseInt(document.getElementById("numPlayers").value);
    var sName = "";

    for (var iCount = 0; iCount < iNumPlayers; iCount++){
        sName = document.getElementById("player" + (iCount + 1) + "Score").value;
        aoPlayers.push(new Player(sName));

        var oInputField = document.getElementById("player" + (iCount+1) + "Score");
        oInputField.type = ("number");

        document.getElementById("player" + (iCount + 1) + "Name").innerHTML = aoPlayers[iCount].name;
        document.getElementById("player" + (iCount + 1) + "Total").innerHTML = aoPlayers[iCount].score;
    }

    document.getElementById("btnAddScore").style.display = "block";
    document.getElementById("btnEndGame").style.display = "block";

    displayScore();
}

function addScore(){
    var bIsFull = true;

    for(var iCount = 0; iCount < aoPlayers.length; iCount++){
        if(isNaN(parseInt(document.getElementById("player" + (iCount + 1) + "Score").value)))
        {
            bIsFull = false;
        }

    }
    if(bIsFull){
        for(var iCount = 0; iCount < aoPlayers.length; iCount++)
        {
            aoPlayers[iCount].addScore(parseInt(document.getElementById("player" + (iCount + 1) + "Score").value));
            document.getElementById("player" + (iCount + 1) + "Score").value = "";
        }
        displayScore();
    }
    else{
        alert("Please enter a score for every player.");
    }     
}

function displayScore(){
    document.getElementById("heading").innerHTML = "Current Score";
    var aoTempArray = [];

    //bubble sorts the winners by score in descending order
    for (var iCount1 = 0; iCount1 < aoPlayers.length - 1; iCount1++){
        for (var iCount2 = iCount1 + 1; iCount2 < aoPlayers.length; iCount2++){
            if (aoPlayers[iCount1].score < aoPlayers[iCount2].score){
                aoTempArray[iCount1] = aoPlayers[iCount1];
                aoPlayers[iCount1] = aoPlayers[iCount2];
                aoPlayers[iCount2] = aoTempArray[iCount1];
            }
        }
    }

    for(var iCount = 0; iCount < aoPlayers.length; iCount++){
        document.getElementById("player" + (iCount + 1) + "Name").innerHTML = aoPlayers[iCount].name;
        document.getElementById("player" + (iCount + 1) + "Total").innerHTML = aoPlayers[iCount].score;

    }
}

function endGame(){
    //changes title heading and hides add score and end game buttons
    document.getElementById("heading").innerHTML = "Game Over";
    document.getElementById("btnAddScore").style.display = "none";
    document.getElementById("btnEndGame").style.display = "none";

    //hide the player score input fields
    for(var iCount = 0; iCount < aoPlayers.length; iCount++){
        document.getElementById("player" + (iCount + 1) + "Score").style.display = "none";
    }

    //show the play again button
    //document.getElementById("btnPlayAgain").style.display = "block";
    document.getElementById("btnResetGame").style.display = "block";
    //declare winner of the game
    document.getElementById("winnerName").innerHTML = "<br>" + aoPlayers[0].name + " wins with a score of " + aoPlayers[0].score + "!<br>";

}

//plays the game again with the same players
function playAgain(){
    //set all players scores to 0
    for(var iCount = 0; iCount < aoPlayers.length; iCount++){
        aoPlayers[iCount].resetScore();
    }
    //displays both the add score and end game buttons
    document.getElementById("btnAddScore").style.display = "block";
    document.getElementById("btnEndGame").style.display = "block";
    //displays the input fields for each of the players again
    for(var iCount = 0; iCount < aoPlayers.length; iCount++){
        document.getElementById("player" + (iCount + 1) + "Score").style.display = "block";
    }
    //hides the play again and reset button
    document.getElementById("btnPlayAgain").style.display = "none";
    document.getElementById("btnResetGame").style.display = "none";
    displayScore();
    document.getElementById("winnerName").innerHTML = "";
    getPlayerNames();
}