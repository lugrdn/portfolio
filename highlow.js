const comText = document.getElementById("comText");
var uNum;
var guess;
var minGuess;
var maxGuess;
minGuess = 1
maxGuess = 100
function highLow() {
    comText.innerHTML = ' ';
    uNum = uNumberInput.value;
    if (uNum > 100 || uNum < 1) {
        comText.innerHTML = 'Only numbers 1 to 100';
    }
    else {
        guess = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;
        comText.innerHTML = guess;
    }
}
function nextGuess(direction) {
    var direction;
    if (direction === 1) {
        minGuess = guess;
        guess = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;
        comText.innerHTML = guess;
        console.log('minGuess: ' + minGuess)
        console.log('maxGuess: ' + maxGuess)
        console.log('guess: ' + guess)
    }
    if (direction === 0) {
        maxGuess = guess;
        guess = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;
        comText.innerHTML = guess;
        console.log('minGuess: ' + minGuess)
        console.log('maxGuess: ' + maxGuess)
        console.log('guess: ' + guess)
    }
    if (direction === 2) {
        comText.innerHTML = 'You guessed ' + guess;
    }
}