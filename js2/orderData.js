function orderData(ridesArr) {
    var tempVal;
    var tempArr = [];

    // sort array by wait time
    for (var i = 0; i < ridesArr.length - 1; i++) {
        for (var t = 0; t < (ridesArr.length - 1) - i; t++) {
            if (ridesArr[t]["waitTime"] > ridesArr[t + 1]["waitTime"]) {
                tempVal = ridesArr[t + 1];
                ridesArr[t + 1] = ridesArr[t];
                ridesArr[t] = tempVal;
            }
        }
    }
    // get each ride sorted by location
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Adventureland") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Critter Country") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Fantasyland") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Frontierland") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Main Street USA") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Mickey's Toontown") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "New Orleans Square") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Star Wars: Galaxy's Edge") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Tomorrowland") {
            tempArr.push(ridesArr[i]);
        }
    }

    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Cars Land") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"]== "Grizzly Peak") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Hollywood Land") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["location"] == "Pixar Pier") {
            tempArr.push(ridesArr[i]);
        }
    }
    ridesArr = tempArr;
    tempArr = [];
    // get each ride sorted by park
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["parkName"] == "California Adventures") {
            tempArr.push(ridesArr[i]);
        }
    }
    for (var i = 0; i < ridesArr.length; i++) {
        if (ridesArr[i]["parkName"] == "Disneyland") {
            tempArr.push(ridesArr[i]);
        }
    }
    ridesArr = tempArr;
    return ridesArr;
}