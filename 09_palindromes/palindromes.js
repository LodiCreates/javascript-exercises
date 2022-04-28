const palindromes = function (string) {
    // get forward string of only lowercase letters
    let lettersForward = string
                                .replace(/[^A-Za-z0-9]/g,'')
                                .toLowerCase();
    // get reverse string of only lowercase letters
    let lettersReverse = lettersForward
                                        .split('')
                                        .reverse()
                                        .join('');
    // compare
    return lettersForward === lettersReverse;
};

// Do not edit below this line
module.exports = palindromes;
