class Ride {

    name;
    waitTime;
    status;
    location;
    thrillType;
    parkName;

    constructor(currName="unknown", currWait="unknown", currStatus="unknown", currLoc = "N/A", currThrill = "N/A", currPark = "N/A") {
        this.name = currName;
        this.waitTime = currWait;
        this.status = currStatus;
        this.location = currLoc;
        this.thrillType = currThrill;
        this.parkName = currPark;
    }

    updateWait(newWait){
        this.waitTime = newWait;
    }
    updateLoc(newLoc){
        this.location = newLoc;
    }
}