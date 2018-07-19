//split
//create Element
//json struningfy
//document.place append

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


function k1() {
    let gotCitiesArr = gotCitiesCSV.split(',');
    let textnode = document.createTextNode(gotCitiesArr);
    document.getElementById("k1d").appendChild(textnode);
}

function k2() {
    let bestThingArr = bestThing.split(',');
    let textnode = document.createTextNode(bestThingArr);
    document.getElementById("k2d").appendChild(textnode);
}

function k3() {
    let gotCitiesArr = gotCitiesCSV.split(',').join(';');
    let textnode = document.createTextNode(gotCitiesArr);
    document.getElementById("k3d").appendChild(textnode);
}

function k4() {
    let lotrCitiesCSV = lotrCitiesArray.toString(',');
    lotrCitiesCSV.textContent = JSON.stringify(lotrCitiesCSV);
    let textnode = document.createTextNode(lotrCitiesCSV);
    document.getElementById("k4d").appendChild(textnode);
}

function k5() {
    let lotrCitiesCSV = lotrCitiesArray.slice(3).toString(',');
    lotrCitiesCSV.textContent = JSON.stringify(lotrCitiesCSV);
    let textnode = document.createTextNode(lotrCitiesCSV);
    document.getElementById("k5d").appendChild(textnode);
}

function k6() {
    let lotrCitiesCSV = lotrCitiesArray.splice(2,1).toString(',');
    lotrCitiesCSV.textContent = JSON.stringify(lotrCitiesArray);
    let textnode = document.createTextNode(lotrCitiesArray);
    document.getElementById("k6d").appendChild(textnode);
}

function k7() {
    let bestThingArr = bestThing.slice(23,38).split(',');
    let textnode = document.createTextNode(bestThingArr);
    document.getElementById("k7d").appendChild(textnode);
}

function k8() {
    let bestThingArr = bestThing.slice(64,68).split(',');
    let textnode = document.createTextNode(bestThingArr);
    document.getElementById("k8d").appendChild(textnode);
}

function k9() {
    let thrones= gotCitiesCSV.split(',')
    for (var i = 0; i<thrones.length; i++ ) {
        var city = thrones[i]
        if (city.includes('aa')||city.includes('ee')||city.includes('ii')||city.includes('oo')||city.includes('uu')) {
            let textnode = document.createTextNode(city);
            document.getElementById("k9d").appendChild(textnode);
        }
    }
}

function k10() {
    lotrCitiesArray.sort(
        function (a,b) {
            return a.length-b.length;
        }
    );
    let textnode = document.createTextNode(JSON.stringify(lotrCitiesArray));
    document.getElementById("k10d").appendChild(textnode);
}