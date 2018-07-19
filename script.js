/*const puzzles = [
    ['?', 'A']
];
const chosenQuestion = Math.floor(Math.random() * ((puzzles.length - 1) - 0 + 1)) + 0;

window.addEventListener("keypressed", checkKeyPressed, false);

function start() {
    document.getElementById('question').textContent = (puzzles[chosenQuestion] || [])[0];
}

function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
        enter();
    }
}

const page = [
    ['p','first p tag','class','h']
];
let iteration = 0;

function enter() {
    if (document.getElementById('answerText').value == puzzles[chosenQuestion][1]) {
        test()
        //var buildInterval = setInterval(pageBuild(), 20);
    }
    else {
        console.log('wrong, try again')
        //infinite loop
    }
}

function pageBuild() {
    if (iteration <= page.length * 3) {
        let ele = document.createElement(page[iteration][0]);
        let txt = document.createTextNode(page[iteration][1]);
        ele.appendChild(txt);
        ele.setAttribute(page[iteration][2], page[iteration[3]]);
        document.appendChild(ele);
        iteration++
    }
    else {
        clearInterval(buildInterval)
    }
}

function test() {
    console.log('setting p tag')
    let ele = document.createElement(page[iteration][0]);
    let txt = document.createTextNode(page[iteration][1]);
    ele.appendChild(txt);
    ele.setAttribute(page[iteration][2], page[iteration[3]]);
    document.appendChild(ele);
}*/