const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((currentOldest,nextPerson) => {
        // get ages
        let currentOldestAge;
        if (currentOldest.yearOfDeath === undefined) {
            currentOldestAge = ((new Date()).getFullYear()) - currentOldest.yearOfBirth;
        } else {
            currentOldestAge = currentOldest.yearOfDeath - currentOldest.yearOfBirth;
        };
        let nextPersonAge;
        if (nextPerson.yearOfDeath === undefined) {
            nextPersonAge = ((new Date()).getFullYear()) - nextPerson.yearOfBirth;
        } else {
            nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        };
        // compare ages
        return (currentOldestAge > nextPersonAge) ? currentOldest : nextPerson;
    }, peopleArray[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
