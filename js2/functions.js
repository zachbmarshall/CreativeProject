function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0,
        index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}



function getWaitTime(waitStr) {

    let returnStr = "";
    let timeIndex = 0;
    let j = 0;

    if (waitStr.includes("minutes")) {
        timeIndex = waitStr.indexOf("minutes");
        j = timeIndex;
        while (waitStr[j] != ">") {
            j--;
        }
        timeIndex += 7;

        for (var i = j + 1; i < timeIndex; i++) {
            returnStr += waitStr[i];
        }

    } else if (waitStr.includes("Refurbishment")) {
        returnStr = "Refurbishment";
    } else if (waitStr.includes("Open")) {
        returnStr = "Open";
    } else if (waitStr.includes("Closed")) {
        returnStr = "Closed";
    } else if (waitStr.includes("statusdown")) {
        returnStr = "Down";
    } else {
        returnStr = "N/A";
    }

    return returnStr;
}

function getWaitStatus(waitStr) {

    let returnStr = "";

    if (waitStr.includes("waiticon") && waitStr.includes("wait2.png")) {
        returnStr = "Wait"
    } else if (waitStr.includes("waiticon") && waitStr.includes("go2.png")) {
        returnStr = "Go"
    } else {
        returnStr = "Normal";
    }

    return returnStr;
}

function getLocation(ride) {
    let location = "";
    switch (ride) {
        case "Alice in Wonderland":
            location = "Fantasyland";
            break;
        case "Astro Orbitor":
            location = "Tomorrowland";
            break;
        case "Autopia":
            location = "Tomorrowland";
            break;
        case "Big Thunder Mountain Railroad":
            location = "Frontierland";
            break;
        case "Buzz Lightyear Astro Blasters":
            location = "Tomorrowland";
            break;
        case "Casey Jr. Circus Train":
            location = "Fantasyland";
            break;
        case "Davy Crockett's Explorer Canoes":
            location = "Critter Country";
            break;
        case "Disneyland Monorail":
            location = "Tomorrowland";
            break;
        case "Disneyland Railroad":
            location = "Multiple";
            break;
        case "Dumbo the Flying Elephant":
            location = "Fantasyland";
            break;
        case "Finding Nemo Submarine Voyage":
            location = "Tomorrowland";
            break;
        case "Gadget's Go Coaster":
            location = "Mickey's Toontown";
            break;
        case "Indiana Jones™ Adventure":
            location = "Adventureland";
            break;
        case "Jungle Cruise":
            location = "Adventureland";
            break;
        case "King Arthur Carrousel":
            location = "Fantasyland";
            break;
        case "Mad Tea Party":
            location = "Fantasyland";
            break;
        case "The Many Adventures of Winnie the Pooh":
            location = "Critter Country";
            break;
        case "Mark Twain Riverboat":
            location = "Frontierland";
            break;
        case "Matterhorn Bobsleds":
            location = "Fantasyland";
            break;
        case "Mickey's House and Meet Mickey":
            location = "Mickey's Toontown";
            break;
        case "Millennium Falcon: Smugglers Run":
            location = "Star Wars: Galaxy's Edge";
            break;
        case "Mr. Toad's Wild Ride":
            location = "Fantasyland";
            break;
        case "Peter Pan's Flight":
            location = "Fantasyland";
            break;
        case "Pinocchio's Daring Journey":
            location = "Fantasyland";
            break;
        case "Pirate's Lair on Tom Sawyer Island":
            location = "Frontierland";
            break;
        case "Pirates of the Caribbean":
            location = "New Orleans Square";
            break;
        case "Roger Rabbit's Car Toon Spin":
            location = "Mickey's Toontown";
            break;
        case "Sailing Ship Columbia":
            location = "Frontierland";
            break;
        case "Snow White's Scary Adventures":
            location = "Fantasyland";
            break;
        case "Space Mountain":
            location = "Tomorrowland";
            break;
        case "Splash Mountain":
            location = "Critter Country";
            break;
        case "Star Tours – The Adventures Continue":
            location = "Tomorrowland";
            break;
        case "Star Wars Launch Bay":
            location = "Tomorrowland";
            break;
        case "Star Wars: Path of the Jedi":
            location = "N/A";
            break;
        case "Storybook Land Canal Boats":
            location = "Fantasyland";
            break;
        case "Tarzan's Treehouse™":
            location = "Adventureland";
            break;
        case "Walt Disney's Enchanted Tiki Room":
            location = "Adventureland";

        // end Disney Rides
        case "Disney Junior Dance Party!":
            location = "Hollywood Land";
            break;
        case "Golden Zephyr":
            location = "Pixar Pier";
            break;
        case "Goofy's Sky School":
            location = "Pixar Pier";
            break;
        case "Grizzly River Run":
            location = "Grizzly Peak";
            break;
        case "Guardians of the Galaxy – Mission: BREAKOUT!":
            location = "Hollywood Land";
            break;
        case "Incredicoaster":
            location = "Pixar Pier";
            break;
        case "Inside Out Emotional Whirlwind":
            location = "Pixar Pier";
            break;
        case "Jessie's Critter Carousel":
            location = "Pixar Pier";
            break;
        case "Jumpin' Jellyfish":
            location = "Pixar Pier";
            break;
        case "The Little Mermaid ~ Ariel's Undersea Adventure":
            location = "Pixar Pier";
            break;
        case "Mickey's PhilharMagic":
            location = "Hollywood Land";
            break;
        case "Monsters, Inc. Mike & Sulley to the Rescue!":
            location = "Hollywood Land";
            break;
        case "Pixar Pal-A-Round – Non-Swinging":
            location = "Pixar Pier";
            break;
        case "Pixar Pal-A-Round – Swinging":
            location = "Pixar Pier";
            break;
        case "Radiator Springs Racers":
            location = "Cars Land";
            break;
        case "Red Car Trolley":
            location = "Buena Vista Street";
            break;
        case "Redwood Creek Challenge Trail":
            location = "Grizzly Peak";
            break;
        case "Silly Symphony Swings":
            location = "Pixar Pier";
            break;
        case "Soarin' Around the World":
            location = "Grizzy Peak";
            break;
        case "Toy Story Midway Mania!":
            location = "Pixar Pier";
            break;
        default:
            location = "N/A";
    }
    return location;
}

function getThrill(ride) {
    let thrill = "";
    switch (ride) {
        case "Indiana Jones™ Adventure":
            thrill = "Thrill";
            break;
        case "Splash Mountain":
            thrill = "Thrill";
            break;
        case "Matterhorn Bobsleds":
            thrill = "Thrill";
            break;
        case "Big Thunder Mountain Railroad":
            thrill = "Thrill";
            break;
        case "Gadget's Go Coaster":
            thrill = "Thrill";
            break;
        case "Millennium Falcon: Smugglers Run":
            thrill = "Thrill";
            break;
        case "Space Mountain":
            thrill = "Thrill";
            break;
        case "Star Tours – The Adventures Continue":
            thrill = "Thrill";
            break;
        case "Pirates of the Caribbean":
            thrill = "Thrill";
            break;
        // end Disney Rides
        case "Goofy's Sky School":
            thrill = "Thrill";
            break;
        case "Grizzly River Run":
            thrill = "Thrill";
            break;
        case "Guardians of the Galaxy – Mission: BREAKOUT!":
            thrill = "Thrill";
            break;
        case "Incredicoaster":
            thrill = "Thrill";
            break;
        case "Radiator Springs Racers":
            thrill = "Thrill";
            break;
        case "Soarin' Around the World":
            thrill = "Thrill";
            break;
        default:
            thrill = "Leisure";
            break;
    }
    return thrill;
}

function getValidPark(ridesArr, parkName) {
    var goodRides = [];

    if (parkName == "both") {
        goodRides = ridesArr;
    } else {
        for (var i = 0; i < ridesArr.length; i++) {
            if (ridesArr[i]["parkName"] == parkName) {
                goodRides.push(ridesArr[i]);
            }
        }

    }
    return goodRides;
}

function getValidThrill(ridesArr, thrillLevel) {
    var goodRides = [];

    if (thrillLevel == "allRides") {
        goodRides = ridesArr;
    } else {
        for (var i = 0; i < ridesArr.length; i++) {
            if (ridesArr[i]["thrillType"] == thrillLevel) {
                goodRides.push(ridesArr[i]);
            }
        }

    }
    return goodRides;
}

function getValidLoc(ridesArr, rideLoc) {
    var goodRides = [];

    if (rideLoc == "allLands") {
        goodRides = ridesArr;
    } else {
        for (var i = 0; i < ridesArr.length; i++) {
            if (ridesArr[i]["location"] == rideLoc) {
                goodRides.push(ridesArr[i]);
            }
        }
    }
    return goodRides;
}

function fixWaitTime(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].waitTime == "5 minutes") {
            let newRide = {
                "name": arr[i]["name"],
                "waitTime": "05 minutes",
                "status": arr[i]["status"],
                "location": arr[i]["location"],
                "thrillType": arr[i]["thrillType"],
                "parkName": arr[i]["parkName"],
            }
            arr[i] = newRide;
        }
    }
    return arr;
}

function displayData(arr, openTime1, openTime2, checkTime) {
    let currLoc = arr[0]["location"];
    let currPark = arr[0]["parkName"];
    let tempPark = "";
    let tempLoc = "";
    let display = "";
    let tempTime = "";

    if (currPark == "California Adventures") {
        tempTime = openTime1;
        openTime1 = openTime2;
        openTime2 = tempTime;
    }
    display += "<h4>Ride Wait Times:</h4>";
    display += "" + checkTime + "<br>  <sup>*Swipe left to see more rides</sup>";
    display += "<h2><b>" + currPark + "</b></h2>";
    display += "<p>" + openTime1 + "</p>";
    display += "<h4>" + currLoc + "</h4>";
    display += "<div class=\"scrolling-wrapper\" id=\"scrolling-wrapper\">";

    for (let i = 0; i < arr.length; i++) {
        tempPark = arr[i]["parkName"];
        tempLoc = arr[i]["location"];
        if (tempPark != currPark) {
            currPark = tempPark;
            currLoc = tempLoc;
            display += "</div>";
            display += "<h2><b>" + currPark + "</b></h2>";
            display += "<p>" + openTime2 + "</p>";
            display += "<h4>" + currLoc + "</h4>";
            display += "<div class=\"scrolling-wrapper\" id=\"scrolling-wrapper\">";
        } else {
            if (tempLoc != currLoc) {
                currLoc = tempLoc;
                display += "</div>";
                display += "<h4>" + currLoc + "</h4>";
                display += "<div class=\"scrolling-wrapper\" id=\"scrolling-wrapper\">";
            }
        }
        if (arr[i]["status"] == "Go" || arr[i]["waitTime"] == "Open") {
            display += "<div class=\"card\" id=\"short_wait\">";
            display += arr[i]["name"] + "<br>";
            display += arr[i]["waitTime"] + " <sup>(Go)</sup>" + "<br>";
            display += "</div>";
        } else if (arr[i]["status"] == "Wait") {
            display += "<div class=\"card\" id=\"long_wait\">";
            display += arr[i]["name"] + "<br>";
            display += arr[i]["waitTime"] + " <sup>(Wait)</sup>" + "<br>";
            display += "</div>";
        }
        else if (arr[i]["waitTime"] == "Closed"||arr[i]["waitTime"] == "Refurbishment") {
            display += "<div class=\"card\" id=\"closed_wait\">";
            display += arr[i]["name"] + "<br>";
            display += arr[i]["waitTime"] + "<br>";
            display += "</div>";
        }
        else {
            display += "<div class=\"card\" id=\"normal_wait\">";
            display += arr[i]["name"] + "<br>";
            display += arr[i]["waitTime"] + "<br>";
            display += "</div>";
        }


    }
    document.getElementById("rideInfo").innerHTML = display;
}