var htmlStr = '<div class="header">Operating Hours For Thu, Feb 20: 8a-11p (EMH &amp; Magic Morning 7a-8a)</p><p>Last Check at <span id="f_lastcheck">12:51pm on Thursday</span></div><table class="lp_attraction" width="100%"><tr><td><a href="https://www.laughingplace.com/w/p/alice-in-wonderland-disneyland/">Alice in Wonderland</a></td><td><span id="f_alice_in_wonderland">30 minutes</span></td></tr><tr><td>Meet the Resistance at Star Wars Launch Bay</td><td><span id="f_meet_the_resistance_at_star_wars_launch_bay">Open</span></td></tr><tr><td></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/astro-orbitor-disneyland/">Astro Orbitor</a></td><td><span id="f_astro_orbitor"></p><div class="waiticon"><table><tr><td>30 minutes</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table></div><p></span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/millennium-falcon-smugglers-run-disneyland/">Millennium Falcon: Smugglers Run</a></td><td><span id="f_millennium_falcon_smugglers_run">40 minutes</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/tarzans-treehouse-disneyland/">Tarzan&#8217;s Treehouse™</a></td><td><span id="f_tarzans_treehouse">Open</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/autopia-disneyland/">Autopia</a></td><td><span id="f_autopia"></p><div class="waiticon"><table><tr><td>Open</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table></div><p></span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/big-thunder-mountain-railroad-disneyland/">Big Thunder Mountain Railroad</a></td><td><span id="f_big_thunder_mountain_railroad"></p><div class="waiticon"><table><tr><td>45 minutes</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table></div><p></span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/buzz-lightyear-astro-blasters-disneyland/">Buzz Lightyear Astro Blasters</a></td><td><span id="f_buzz_lightyear_astro_blasters">5 minutes</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/casey-jr-circus-train-disneyland/">Casey Jr. Circus Train</a></td><td><span id="f_casey_jr_circus_train"></p><div class="waiticon"><table><tr><td>20 minutes</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table> The Wait and Go';
var htmlStr2 = '<div class="header">Operating Hours For Sat, Feb 22: 8a-10p</p><p>Last Check at <span id="f_lastcheck">5:16pm on Saturday</span></div><table class="lp_attraction" width="100%"><tr><td><a href="https://www.laughingplace.com/w/p/disney-junior-dance-party-disney-california-adventure/">Disney Junior Dance Party!</a></td><td><span id="f_disney_junior_dance_party">Closed</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/golden-zephyr-disney-california-adventure/">Golden Zephyr</a></td><td><span id="f_golden_zephyr">5 minutes</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/goofys-sky-school-disney-california-adventure/">Goofy&#8217;s Sky School</a></td><td><span id="f_goofys_sky_school">40 minutes</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/grizzly-river-run-disney-california-adventure/">Grizzly River Run</a></td><td><span id="f_grizzly_river_run"></p><div class="waiticon"><table><tr><td>5 minutes</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/go2.png"></td></tr></table></div><p></span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/guardians-of-the-galaxy-mission-breakout-disney-california-adventure/">Guardians of the Galaxy – Mission: BREAKOUT!</a></td>\'<td><span id="f_guardians_of_the_galaxy__mission_breakout">60 minutes</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/incredicoaster-disney-california-adventure/">Incredicoaster</a></td><td><span id="f_incredicoaster">35 minutes</span></td></table></tr><tr><td><a href="https://www.laughingplace.com/w/p/inside-out-emotional-whirlwind-disney-california-adventure/">Inside Out Emotional Whirlwind</a></td><td><span id="f_inside_out_emotional_whirlwind">30 minutes</span></td></tr><tr><td></td></table>The Wait and Go'
var rides = [];
var lastCheckTime = "";
var openTime1 = "";
var openTime2 = "";
//getCARides(htmlStr2);
/*
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = "https://www.laughingplace.com/w/p/disney-california-adventure-current-wait-times/";

$.ajax({
    url: (proxyUrl + url), success: function (data) {
        getCARides(data);


    waitTime;
    status;
    location;
    thrillType;
    parkName;


    }
});*/

let startPos = htmlStr.indexOf("Operating Hours For");
let endPos = htmlStr.indexOf("The Wait and Go");
let tableData = htmlStr.substring(startPos, endPos);
var minStr = "";
var testRide = {
    "name": "N/A",
    "waitTime": "N/A",
    "status": "N/A",
    "location": "N/A",
    "thrillType": "N/A",
    "parkName": "N/A",
}

let rideName = "";

let ridesArr = getIndicesOf("disneyland/", tableData);
let j = 0;

for (let i = 0; i < 100; i++) {
    if (tableData[i] == "<") {
        break;
    }
    openTime1 += tableData[i];
}
console.log(openTime1);

for (let i = tableData.indexOf("<p>Last Check at"); i < tableData.indexOf("<p>Last Check at") + 100; i++) {
    if (tableData.substring(i, i + 6) == "</div>") {
        break;
    }
    lastCheckTime += tableData[i];
}

let tempStr = "";
let tempStr2 = "";
tempStr = lastCheckTime.slice(0, lastCheckTime.indexOf(" on"));
tempStr2 = lastCheckTime.slice(lastCheckTime.indexOf("on"), lastCheckTime.length);
tempStr2 = "(PST) " + tempStr2;
lastCheckTime = tempStr + tempStr2;



for (let i = 0; i < ridesArr.length; i++) {
    if (i == ridesArr.length - 1) {
        j = ridesArr[i] + 13;
        while (tableData[j] != "<") {
            if (tableData.substring(j, j + 7) == "&#8217;") {
                rideName += "'";
                j += 7;
            }
            else if (tableData.substring(j, j + 6) == "&#038;") {
                rideName += "&";
                j += 6;
            }
            else {
                rideName += tableData[j];
                j++;
            }
        }
        while (tableData.substring(j, j + 3) != "/ta") {
            minStr += tableData[j];
            j++;
        }

        testRide = {
            "name": rideName,
            "waitTime": getWaitTime(minStr),
            "status": getWaitStatus(minStr),
            "location": getLocation(rideName),
            "thrillType": getThrill(rideName),
            "parkName": "Disneyland",
        }
        rides.push(testRide);
        rideName = ""
        minStr = "";
    }
    else {
        j = ridesArr[i] + 13;
        while (tableData[j] != "<") {
            if (tableData.substring(j, j + 7) == "&#8217;") {
                rideName += "'";
                j += 7;
            }
            else if (tableData.substring(j, j + 6) == "&#038;") {
                rideName += "&";
                j += 6;
            }
            else {
                rideName += tableData[j];
                j++;
            }
        }
        while (tableData.substring(j, j + 3) != "a h") {
            minStr += tableData[j];
            j++;
        }
        testRide = {
            "name": rideName,
            "waitTime": getWaitTime(minStr),
            "status": getWaitStatus(minStr),
            "location": getLocation(rideName),
            "thrillType": getThrill(rideName),
            "parkName": "Disneyland",
        }
        rides.push(testRide);
        rideName = ""
        minStr = "";
    }
}

//////

startPos = htmlStr2.indexOf("Operating Hours For");
endPos = htmlStr2.indexOf("The Wait and Go");
tableData = htmlStr2.substring(startPos, endPos);
minStr = "";
rideName = "";

ridesArr = getIndicesOf("-adventure/", tableData);
j = 0;

for (let i = 0; i < 100; i++) {
    if (tableData[i] == "<") {
        break;
    }
    openTime2 += tableData[i];
}
console.log(openTime2);

for (let i = 0; i < ridesArr.length; i++) {
    if (i == ridesArr.length - 1) {
        j = ridesArr[i] + 13;
        while (tableData[j] != "<") {
            if (tableData.substring(j, j + 7) == "&#8217;") {
                rideName += "'";
                j += 7;
            }
            else if (tableData.substring(j, j + 6) == "&#038;") {
                rideName += "&";
                j += 6;
            }
            else {
                rideName += tableData[j];
                j++;
            }
        }
        while (tableData.substring(j, j + 3) != "/ta") {
            minStr += tableData[j];
            j++;
        }
        testRide = {
            "name": rideName,
            "waitTime": getWaitTime(minStr),
            "status": getWaitStatus(minStr),
            "location": getLocation(rideName),
            "thrillType": getThrill(rideName),
            "parkName": "California Adventures",
        }
        rides.push(testRide);
        rideName = ""
        minStr = "";
    }
    else {
        j = ridesArr[i] + 13;
        while (tableData[j] != "<") {
            if (tableData.substring(j, j + 7) == "&#8217;") {
                rideName += "'";
                j += 7;
            }
            else if (tableData.substring(j, j + 6) == "&#038;") {
                rideName += "&";
                j += 6;
            }
            else {
                rideName += tableData[j];
                j++;
            }
        }
        while (tableData.substring(j, j + 3) != "a h") {
            minStr += tableData[j];
            j++;
        }
        testRide = {
            "name": rideName,
            "waitTime": getWaitTime(minStr),
            "status": getWaitStatus(minStr),
            "location": getLocation(rideName),
            "thrillType": getThrill(rideName),
            "parkName": "California Adventures",
        }
        rides.push(testRide);
        rideName = ""
        minStr = "";
    }
}

for (let i = 0; i < rides.length; i++) {
    console.log(rides[i]["name"] + " " + rides[i]["status"]);
}

document.getElementById("isLoaded").style.display = "block";
rides = fixWaitTime(rides);
rides = orderData(rides);
displayData(rides, openTime1, openTime2, lastCheckTime);


document.getElementById("parkSelect").addEventListener("input", function (event) {
    let park = document.getElementById("parkSelect");
    let parkChoice = park.options[park.selectedIndex].value;

    if (parkChoice == "Disneyland") {
        document.getElementById("CARides").style.display = "none";
        document.getElementById("landSelect").style.display = "block";
        document.getElementById("disneyRides").style.display = "block";
    }
    else if (parkChoice == "California Adventures") {
        document.getElementById("disneyRides").style.display = "none";
        document.getElementById("landSelect").style.display = "block";
        document.getElementById("CARides").style.display = "block";
    }
    else {
        document.getElementById("landSelect").style.display = "none";
        document.getElementById("CARides").style.display = "none";
        document.getElementById("disneyRides").style.display = "none";
    }

});

// Order all of the elements //
document.getElementById("sortRides").addEventListener("click", function (event) {
    let validRides = rides;
    let parkChoice = document.getElementById("parkSelect").value;
    let thrillChoice = document.getElementById("thrillSelect").value;
    let locChoice = "allLands";
    if (parkChoice == "California Adventures") {
        locChoice = document.getElementById("CASelect").value;
    }
    else if (parkChoice == "Disneyland") {
        locChoice = document.getElementById("disneySelect").value;
    }

    if (parkChoice == "both") {
        validRides = getValidPark(validRides, parkChoice);
        validRides = getValidThrill(validRides, thrillChoice);

    }
    else {
        validRides = getValidPark(validRides, parkChoice);
        validRides = getValidThrill(validRides, thrillChoice);
        validRides = getValidLoc(validRides, locChoice);

    }
    validRides = orderData(validRides);
    displayData(validRides, openTime1, openTime2, lastCheckTime);

});