const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    // returns a string created from the specified sequence of UTF-16 code units
    // your argument will determine what kind of string will be returned
    // Math.floor will round the number down to the nearest whole number
    // Math.random returns a floating point (0 - 1(1 being non-inclusive)) * the highest random # --> we will use 26 for alphabet characters
    // PLUS 97, which is a lowercase a
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    // we ADD 65 because that is A (or the start of the alphabet in UPPERCASE)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    // we ADD 48 because that is 0 (or the start of the nums 0 - 9)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

