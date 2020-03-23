
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url1 = "https://www.laughingplace.com/w/p/disneyland-current-wait-times/";
const url2 = "https://www.laughingplace.com/w/p/disney-california-adventure-current-wait-times/";
var openTime1 = "";
var openTime2 = "";
var rides = [];
var lastCheckTime = "";
var testRide = {
  "name": "N/A",
  "waitTime": "N/A",
  "status": "N/A",
  "location": "N/A",
  "thrillType": "N/A",
  "parkName": "N/A",
}

$.ajax({
  url: (proxyUrl + url1), success: function (htmlStr) {
    let startPos = htmlStr.indexOf("Operating Hours For");
    let endPos = htmlStr.indexOf("The Wait and Go");
    let tableData = htmlStr.substring(startPos, endPos);
    let minStr = "";
    let rideName = "";
    let ridesArr = getIndicesOf("disneyland/", tableData);
    let j = 0;

    for (let i = 0; i < 100; i++) {
      if (tableData[i] == "<") {
        break;
      }
      openTime1 += tableData[i];
    }

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
          "parkName": "Disneyland"
        }
        rides.push(testRide);
        rideName = ""
        minStr = "";
      }
    }
    let lastRide = {
      "name": rides[rides.length - 1]["name"],
      "waitTime": rides[rides.length - 1]["waitTime"],
      "status": rides[rides.length - 1]["status"],
      "location": "Adventureland",
      "thrillType": rides[rides.length - 1]["thrillType"],
      "parkName": rides[rides.length - 1]["parkName"]
    }
    rides[rides.length - 1] = lastRide;
    $.ajax({
      url: (proxyUrl + url2), success: function (htmlStr2) {
        let startPos = htmlStr2.indexOf("Operating Hours For");
        let endPos = htmlStr2.indexOf("The Wait and Go");
        let tableData = htmlStr2.substring(startPos, endPos);
        let minStr = "";
        let rideName = "";

        let ridesArr = getIndicesOf("-adventure/", tableData);
        j = 0;

        for (let i = 0; i < 100; i++) {
          if (tableData[i] == "<") {
            break;
          }
          openTime2 += tableData[i];
        }

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

        document.getElementById("isLoaded").style.display = "block";
        rides = fixWaitTime(rides);
        rides = orderData(rides);
        displayData(rides, openTime1, openTime2, lastCheckTime);


        document.getElementById("parkSelect").addEventListener("input", function (event) {
          let park = document.getElementById("parkSelect");
          let parkChoice = park.options[park.selectedIndex].value;
          if (parkChoice == "null"){
            parkChoice = "both";
          }

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
          if (parkChoice == "null"){
            parkChoice = "both";
          }
          let thrillChoice = document.getElementById("thrillSelect").value;
          if (thrillChoice == "null"){
            thrillChoice = "allRides";
          }
          let locChoice = "allLands";
          if (parkChoice == "California Adventures") {
            locChoice = document.getElementById("CASelect").value;
            if (locChoice == "null"){
              locChoice = "allLands";
            }
          }
          else if (parkChoice == "Disneyland") {
            locChoice = document.getElementById("disneySelect").value;
            if (locChoice == "null"){
              locChoice = "allLands";
            }
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
      }
    });
  }
});


