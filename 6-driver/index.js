const isDrunk = false;
const hasLicence = true;
const age = 16;

function canDrive(isDrunk, hasLicence, age) {
    return !isDrunk && hasLicence && (age >= 18) ? "Может" : "Не может";
}

console.log(canDrive(isDrunk, hasLicence, age));