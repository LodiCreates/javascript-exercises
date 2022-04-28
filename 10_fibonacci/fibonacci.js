const fibonacci = function(position) {
    // INVALID ARGUMENTS //
    if (position === 'string') {position = Number(position)};
    if (position < 0) {return `OOPS`};
    
    // EDGE CASES //
    if (position === 0) {return 0};
    if (position === 1 || position === 2) {return 1};
    
    // LOCAL VARIABLES //
    let index = position - 1; //convert position to array index
    let sequence = [1, 1]; //initialize fibonacci sequence
    
    // LOOP //
    for (let i = 2; i <= index; i++){ //fill in rest of fibonacci sequence until position requested
        sequence.push(sequence[i-1] + sequence[i-2]);
    };
    return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
