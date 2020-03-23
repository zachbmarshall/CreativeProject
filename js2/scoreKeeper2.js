var newPlayer = {
    "name": "N/A",
    "score": 0
}

var aoPlayers = [];
var lowScore = false;

function getNumPlayers() {
    var iNumPlayers = parseInt(document.getElementById("numPlayers").value);
    document.getElementById("winnerName").innerHTML = "";
    document.getElementById("winnerName").style.removeProperty("color");


    if (iNumPlayers < 1 || iNumPlayers > 100 || isNaN(parseInt(document.getElementById("numPlayers").value))) {
        document.getElementById("winnerName").innerHTML = "Please enter a number between 1-100";
        document.getElementById("winnerName").style = "color: red;";
        document.getElementById("numPlayers").value = "";

    }
    else {
        document.getElementById("numPlayers").style.display = "none";
        document.getElementById("btnGetNumPlayers").style.display = "none";

        let display = "";

        document.getElementById("heading").innerHTML = "Enter the players names";

        for (var iCount = 0; iCount < iNumPlayers; iCount++) {
            //Displays all of the divs for the same number of players
            display += "<div id=\"player" + (iCount + 1) + "Div\">"
            display += "<div><label id=\"player" + (iCount + 1) + "Name\" class=\"text-respond\">Enter Player " + (iCount + 1) + "'s Name</label></div>";
            display += "<div><input type=\"text\" id=\"player" + (iCount + 1) + "Score\" class=\"text-respond\"></input></div>";
            display += "<div><label id=\"player" + (iCount + 1) + "Total\" class=\"text-respond\"></label></div>";
            display += "</div>"
        }
        display += "<div class=\"centerBtn\"><div id=\"btnStartGame\" style=\"display: none\"><input type=\"checkbox\" id=\"lowScore\" name=\"lowScore\" value=\"lowScore\"><label for=\"lowScore\"> Lowest score wins</label><input type=\"button\" class=\"text-respond\" value=\"Start Game\" onclick=\"getPlayerNames();\"><br><br></div><div id=\"btnAddScore\" style=\"display: none\"><input type=\"button\" class=\"text-respond\" value=\"Add Points\" onclick=\"addScore();\" href=\"#heading\"><br><br></div><div id=\"btnEndGame\" style=\"display: none\"><input type=\"button\" class=\"text-respond\" value=\"End Game\" onclick=\"endGame();\" href=\"#heading\"></div></div>";
        document.getElementById("playerInfo").innerHTML = display;
        //Displays the Start Game button
        document.getElementById("btnStartGame").style.display = "block";
    }
}

function getPlayerNames() {

    lowScore = document.getElementById("lowScore").checked;
    document.getElementById("btnStartGame").style.display = "none";
    var iNumPlayers = parseInt(document.getElementById("numPlayers").value);
    var sName = "";

    for (var iCount = 0; iCount < iNumPlayers; iCount++) {
        sName = document.getElementById("player" + (iCount + 1) + "Score").value;
        newPlayer = {
            "name": sName,
            "score": 0
        }
        aoPlayers.push(newPlayer);

        var oInputField = document.getElementById("player" + (iCount + 1) + "Score");
        oInputField.type = ("number");
        oInputField.placeholder = ("0");

        document.getElementById("player" + (iCount + 1) + "Name").innerHTML = aoPlayers[iCount]["name"];
        document.getElementById("player" + (iCount + 1) + "Total").innerHTML = aoPlayers[iCount]["score"];
    }

    document.getElementById("btnAddScore").style.display = "block";
    document.getElementById("btnEndGame").style.display = "block";

    displayScore();
}

function addScore() {
    for (var iCount = 0; iCount < aoPlayers.length; iCount++) {
        if (isNaN(parseInt(document.getElementById("player" + (iCount + 1) + "Score").value))) {
            aoPlayers[iCount]["score"] += 0;
            document.getElementById("player" + (iCount + 1) + "Score").value = "";
        }
        else {
            aoPlayers[iCount]["score"] += parseInt(document.getElementById("player" + (iCount + 1) + "Score").value);
            document.getElementById("player" + (iCount + 1) + "Score").value = "";
        }
    }
    displayScore();
}

function displayScore() {
    document.getElementById("heading").innerHTML = "Current Score";
    var aoTempArray = [];

    if (lowScore) {
        //bubble sorts the winners by score in ascending order
        for (var iCount1 = 0; iCount1 < aoPlayers.length - 1; iCount1++) {
            for (var iCount2 = iCount1 + 1; iCount2 < aoPlayers.length; iCount2++) {
                if (aoPlayers[iCount1]["score"] > aoPlayers[iCount2]["score"]) {
                    aoTempArray[iCount1] = aoPlayers[iCount1];
                    aoPlayers[iCount1] = aoPlayers[iCount2];
                    aoPlayers[iCount2] = aoTempArray[iCount1];
                }
            }
        }
    }
    else {
        //bubble sorts the winners by score in descending order
        for (var iCount1 = 0; iCount1 < aoPlayers.length - 1; iCount1++) {
            for (var iCount2 = iCount1 + 1; iCount2 < aoPlayers.length; iCount2++) {
                if (aoPlayers[iCount1]["score"] < aoPlayers[iCount2]["score"]) {
                    aoTempArray[iCount1] = aoPlayers[iCount1];
                    aoPlayers[iCount1] = aoPlayers[iCount2];
                    aoPlayers[iCount2] = aoTempArray[iCount1];
                }
            }
        }
    }

    for (var iCount = 0; iCount < aoPlayers.length; iCount++) {
        document.getElementById("player" + (iCount + 1) + "Name").innerHTML = aoPlayers[iCount]["name"];
        document.getElementById("player" + (iCount + 1) + "Total").innerHTML = aoPlayers[iCount]["score"];

    }
}

function endGame() {
    //changes title heading and hides add score and end game buttons
    document.getElementById("heading").innerHTML = "Game Over";
    document.getElementById("btnAddScore").style.display = "none";
    document.getElementById("btnEndGame").style.display = "none";

    //hide the player score input fields
    for (var iCount = 0; iCount < aoPlayers.length; iCount++) {
        document.getElementById("player" + (iCount + 1) + "Score").style.display = "none";
    }

    //show the play again button
    //document.getElementById("btnPlayAgain").style.display = "block";
    document.getElementById("btnResetGame").style.display = "block";
    //declare winner of the game
    document.getElementById("winnerName").innerHTML = "<br>" + aoPlayers[0].name + " wins with a score of " + aoPlayers[0].score + "!<br>";

}

//plays the game again with the same players
function playAgain() {
    //set all players scores to 0
    for (var iCount = 0; iCount < aoPlayers.length; iCount++) {
        aoPlayers[iCount].resetScore();
    }
    //displays both the add score and end game buttons
    document.getElementById("btnAddScore").style.display = "block";
    document.getElementById("btnEndGame").style.display = "block";
    //displays the input fields for each of the players again
    for (var iCount = 0; iCount < aoPlayers.length; iCount++) {
        document.getElementById("player" + (iCount + 1) + "Score").style.display = "block";
    }
    //hides the play again and reset button
    document.getElementById("btnPlayAgain").style.display = "none";
    document.getElementById("btnResetGame").style.display = "none";
    displayScore();
    document.getElementById("winnerName").innerHTML = "";
    getPlayerNames();
}