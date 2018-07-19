function match(pla) {
    const resultText = document.getElementById("resultText");
    var pla;
    var com;
    com = Math.floor(Math.random() * Math.floor(3));
    if (com == pla) {
        resultText.innerHTML = 'Tie';
    }
    else if (com == 0 && pla == 1) {
        resultText.innerHTML = 'Player Win';
    }
    else if (com == 0 && pla == 2) {
        resultText.innerHTML = 'Computer Win';
    }
    else if (com == 1 && pla == 0) {
        resultText.innerHTML = 'Computer Win';
    }
    else if (com == 1 && pla == 2) {
        resultText.innerHTML = 'Player Win';
    }
    else if (com == 2 && pla == 0) {
        resultText.innerHTML = 'Player Win';
    }
    else if (com == 2 && pla == 1) {
        resultText.innerHTML = 'Computer Win';
    }
}