"use strict"

function testVar() {
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);
}
testVar();

function testLet(){
    let b = 40;
    if(true){
        let b = 80;
        console.log(b);
    }
    console.log(b);
}
testLet();

const colors = [];
colors.push('red');
colors.push('yellow');
colors.push('green');
colors.push('blue');
colors.push('purple');
colors.push('pink');
colors.push('black');
colors.push('silver');
colors.push('dark_blue');

console.log(colors);