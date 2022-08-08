function distanceFromHqInBlocks(pickupLoc) {
    return Math.abs(42 - pickupLoc);
}

function distanceFromHqInFeet(pickupLoc) {
    return 264 * Math.abs(42 - pickupLoc);
}

function distanceTravelledInFeet(startLoc, endLoc) {
    return 264 * Math.abs(startLoc - endLoc);
}