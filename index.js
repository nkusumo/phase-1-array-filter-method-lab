// Code your solution here

function findMatching (driversArray, name) {
    return driversArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (driversArray, name) {
    return driversArray.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

function matchName (driverObjects, nameProp) {
    return driverObjects.filter(driver => driver.name === nameProp);
}