
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = "https://www.laughingplace.com/w/p/disneyland-current-wait-times/";

$.ajax({
  url: (proxyUrl + url), success: function (htmlStr) {

    // console.log(htmlStr); 

    class Ride {

      name;
      waitTime;
      status;

      constructor(currName, currWait, currStatus) {
        this.name = currName;
        this.waitTime = currWait;
        this.status = currStatus;
      }
    }




    //let htmlStr = '<div class="header">Operating Hours For Thu, Feb 20: 8a-11p (EMH &amp; Magic Morning 7a-8a)</p><p>Last Check at <span id="f_lastcheck">12:51pm on Thursday</span></div><table class="lp_attraction" width="100%"><tr><td><a href="https://www.laughingplace.com/w/p/alice-in-wonderland-disneyland/">Alice in Wonderland</a></td><td><span id="f_alice_in_wonderland">30 minutes</span></td></tr><tr><td>Meet the Resistance at Star Wars Launch Bay</td><td><span id="f_meet_the_resistance_at_star_wars_launch_bay">Open</span></td></tr><tr><td></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/astro-orbitor-disneyland/">Astro Orbitor</a></td><td><span id="f_astro_orbitor"></p><div class="waiticon"><table><tr><td>30 minutes</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table></div><p></span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/tarzans-treehouse-disneyland/">Tarzan&#8217;s Treehouse™</a></td><td><span id="f_tarzans_treehouse">Open</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/autopia-disneyland/">Autopia</a></td><td><span id="f_autopia"></p><div class="waiticon"><table><tr><td>Open</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table></div><p></span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/big-thunder-mountain-railroad-disneyland/">Big Thunder Mountain Railroad</a></td><td><span id="f_big_thunder_mountain_railroad"></p><div class="waiticon"><table><tr><td>45 minutes</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table></div><p></span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/buzz-lightyear-astro-blasters-disneyland/">Buzz Lightyear Astro Blasters</a></td><td><span id="f_buzz_lightyear_astro_blasters">30 minutes</span></td></tr><tr><td><a href="https://www.laughingplace.com/w/p/casey-jr-circus-train-disneyland/">Casey Jr. Circus Train</a></td><td><span id="f_casey_jr_circus_train"></p><div class="waiticon"><table><tr><td>20 minutes</td><td><img src="https://www.laughingplace.com/w/wp-content/uploads/2018/09/wait2.png"></td></tr></table> The Wait and Go';

    let startPos = htmlStr.indexOf("Operating Hours For");
    let endPos = htmlStr.indexOf("The Wait and Go");
    let tableData = htmlStr.substring(startPos, endPos);
    var minStr = "";
    var tempStr = "";

    let rideName = "";
    let rides = [];

    let ridesArr = getIndicesOf("disneyland/", tableData);
    let j = 0;

    for (var i = 0; i < ridesArr.length; i++) {

      if (i == ridesArr.length - 1) {
        j = ridesArr[i] + 13;
        while (tableData[j] != "<") {
          if (tableData.substring(j, j + 7) == "&#8217;") {
            rideName += "'";
            j += 7;
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

        rides.push(new Ride(rideName, getWaitTime(minStr), getWaitStatus(minStr)));
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
          else {
            rideName += tableData[j];
            j++;
          }
        }
        while (tableData.substring(j, j + 3) != "a h") {
          minStr += tableData[j];
          j++;
        }
        rides.push(new Ride(rideName, getWaitTime(minStr), getWaitStatus(minStr)));
        rideName = ""
        minStr = "";
      }



    }

    for (var i = 0; i < rides.length; i++) {
      console.log(rides[i].name);


    }
    console.log("Number of rides: " + rides.length);

    document.getElementById("btnGetNumPlayers").addEventListener("click", function (event) {
      alert(rides[0].name);
    });
  }
});

function getIndicesOf(searchStr, str, caseSensitive) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0, index, indices = [];
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

  }
  else if (waitStr.includes("Refurbishment")) {
    returnStr = "Refurbishment";
  }
  else if (waitStr.includes("Open")) {
    returnStr = "Open";
  }
  else if (waitStr.includes("Closed")) {
    returnStr = "Closed";
  }
  else if (waitStr.includes("statusdown")) {
    returnStr = "Down";
  }
  else {
    returnStr = "N/A";
  }

  return returnStr;
}

function getWaitStatus(waitStr) {

  let returnStr = "";
  let timeIndex = 0;
  let j = 0;

  if (waitStr.includes("waiticon") && waitStr.includes("wait2.png")) {
    returnStr = "Wait"
  }
  else if (waitStr.includes("waiticon") && waitStr.includes("go2.png")) {
    returnStr = "Go"
  }
  else {
    returnStr = "Normal";
  }

  return returnStr;
}

/* var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
 const url = "https://www.laughingplace.com/w/p/disneyland-current-wait-times/";
 fetch(proxyUrl + url)
   .then(function (response) {
     console.log(response);
   }).then(function (json) {
     console.log("yay");
   })
   .catch(e => {
     console.log(e);
     return e;
   });*/
