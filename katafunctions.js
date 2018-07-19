function KAdd(x,y) {
    console.log(x+y);
    return x+y;
}
function KMultiply(x,y) {
    let z;
    z = x;
    for (var i=1; i<y; i++) {
        z = KAdd(z,x);
    }
    console.log(z);
    return z;
}
function KPower(x,y) {
    let z;
    z = x;
    for (var i=1; i<y; i++) {
        z = KMultiply(z,x);
    }
    console.log(z);
    return z;
}
/*function KFactorial(x) {
    for (var i = 1; i<x+3; i++) {
        z = KMultiply(x,i);
    }
    console.log(z);
    return z;
}

function KFactorial2(x) {
    let z;
    let y;
    y = x - 1;
    z = 0
    for (x; x>=1; x--) {
        z = z + KMultiply(x,y);
        y--
    }
    console.log(z);
    return z;
}

function KFactorial3(x) {
    let y;
    y = x;
    x - 1;
    for (x; x=0; x--) {
        y = KMultiply(y,x);
    }
    console.log(y);
    return y;
}*/

function KFactorial4(x) {
    let y;
    y = x;
    for (var i=1; i<x; i++) {
        y = KMultiply(i,y)
    }
    console.log(y);
}

function KFibonacci(input) {
    let old = 0;
    let last = 1;
    let next;
    for (var i=2; i<input; i++) {
        next = KAdd(old,last);
        old = last;
        last = next;
    }
    console.log(next);
}