const resultEl = document.getElementById('result')
// this points to the span element where the generated password will be shown 
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    // grab the input by using .value
    // parse the string into a number by adding a + in front
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
  
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    let typesArr = [{lower}, {upper}, {number}, {symbol}].filter( item => Object.values(item)[0])
    //this should filter out any object that is checked --> excluding false(non-checked items)

    if(typesCount === 0){
        return ''
    }

    for(let i = 0; i < length; i += typesCount ){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            //returns lower, upper, number, symbol
            generatedPassword += randomFunc[funcName]()
            //this will loop through, apending onto our empty string - depending on the length( number inputted by user) 
            //creating a random lowercase, uppercase, number & symbol in that order until it is as long as the length input
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
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

