function distanceFromHqInBlocks(pickupLoc) {
    return Math.abs(42 - pickupLoc);
}

function distanceFromHqInFeet(pickupLoc) {
    return 264 * Math.abs(42 - pickupLoc);
}

function distanceTravelledInFeet(startLoc, endLoc) {
    return 264 * Math.abs(startLoc - endLoc);
}

function calculatesFarePrice(startLoc, endLoc) {
    let fare;
    const distance = distanceTravelledInFeet(startLoc, endLoc);
    if (distance < 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
    return fare;
}