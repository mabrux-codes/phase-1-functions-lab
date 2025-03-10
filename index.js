// Code your solution in this file!
// Function to calculate the number of blocks from Scuber HQ
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
}

// Function to convert blocks to feet
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot beyond 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25
    } else {
        return "cannot travel that far"; // Rides over 2500 feet are not allowed
    }
}
