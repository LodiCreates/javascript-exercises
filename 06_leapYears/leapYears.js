const leapYears = function(year) {
    if (year % 400 === 0) {  // if divisible by 400, leap year
        return true;
    } else if (year % 100 === 0) {  // not divisible by 400 but divisible by 100, not leap year
        return false;
    } else if (year % 4 === 0) {  // not divisible by 400 or 100, but divisible by 4, leap year
        return true;
    } else {  // otherwise, not leap year
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;