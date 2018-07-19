var rl = [
    ['2: ', 0, 0],
    ['3: ', 0, 0],
    ['4: ', 0, 0],
    ['5: ', 0, 0],
    ['6: ', 0, 0],
    ['7: ', 0, 0],
    ['8: ', 0, 0],
    ['9: ', 0, 0],
    ['10: ', 0, 0],
    ['11: ', 0, 0],
    ['12: ', 0, 0],
]
const results = document.getElementById('results');

let diceSum = 0;

function roll() {
    let z;
    results.style.display = "none"
    for (var i=2; i<=12; i++) {
        rl[i-2][1] = 0
        rl[i-2][2] = 0
    }
    for (var i=1; i<=1000; i++) {
        z = (Math.floor(Math.random() * (6 - 1 + 1)) + 1) + (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
        rl[z-2][1]++;
    }
    for (var i=2; i<=12; i++) {
        rl[i-2][2] = (rl[i-2][1]/1000) * 1000
    }
    for (var i=2; i<=12; i++) {
        document.getElementById('l' + i).textContent = rl[i-2][0] + rl[i-2][1];
        document.getElementById('b' + i).textContent = rl[i-2][1];
        document.getElementById('b' + i).style.width = rl[i-2][2]/2 + '%'
    }
    results.style.display = "block"
}