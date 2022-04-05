const removeFromArray = function(array, ...itemsToRemove) {
    let resultArray = [];  // create resultArray to store result
    arrayLoop: for (const item of array) {  // iterate through each item in array
        for (const itemToRemove of itemsToRemove) {  // check if item matches any itemsToRemove
            if (item === itemToRemove) {
                continue arrayLoop;  // if match, move to next item in array without adding current item to resultArray
            };
        };
        resultArray.push(item);  // if no matches, push current item into resultArray
    };
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
