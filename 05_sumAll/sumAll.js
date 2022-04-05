const sumAll = function(int1, int2) {
    // ARGUMENT VALIDITY //
    if (int1 < 0 || int2 < 0) {return `ERROR`};
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) {return `ERROR`};
    
    // LOCAL VARIABLES //
    let result = 0;  // declare new variable to store result and initialize to 0

    // FUNCTION //
    for (let i = Math.min(int1, int2); i <= Math.max(int1, int2); i++){  // iterate through numbers from smaller integer to larger integer and add each to result
        result += i;
    };
    return result;  // return result
};

// Do not edit below this line
module.exports = sumAll;