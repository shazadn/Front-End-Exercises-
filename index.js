//index.js

const x = 4;
const y = 6;

function add() {
    return x + y;
}
function addParam(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function multiply2(a, b) {
    let multi = multiply(a,b);
    console.log(multi);
    return multi;
}

let asdf = (a,b) => a * b;

function doSomething(){
    console.log("Hello");
}


// console.log(add());
// console.log(addParam(5, 7));

// multiply2(2,3);
// console.log(asdf(4,5));

// function value1(a){
//     return a;
// }
// function value2(b){
//     return b;
// }
