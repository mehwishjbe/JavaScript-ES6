"use strict"

/* function testVar() {
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

console.log(colors); */


/* class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register(){
        console.log(this.username+' is now registered');
    }
}
let bob = new User('bob','bob@gmail.com', '12345');
bob.register();



class Member extends User{
    constructor(username, email, password, memberpkg){
        super(username, email, password);
        this.memberpkg = memberpkg;
    }
    getPackage(){
        console.log(this.username+' is subscribed to the '+this.memberpkg+' package.');
    }
}
let mike = new Member('mike','mike@gmail.com','123','Standard');
mike.getPackage(); */


/* //Template Literals

let name = 'Meh';

function makeUpperCase(word){
    return word.toUpperCase();
}

let template =`<h1>${makeUpperCase('hello')} ${name}</h1>
<p> This is a simple template</p>`;

document.getElementById('templatehtml').innerHTML = template; */


//NEW STRING AND NUMBER METHODS

/* let theString = 'hello, this is javasrcipt ES6 and concept of new string and & number methods'

console.log(theString.startsWith('hello'));
console.log(theString.endsWith('methods'));
console.log(theString.includes('and'));

//hex
console.log(0xFF);
//binary
console.log(0b1010010010001);
//octal
console.log(0o543);

console.log(Number.isFinite(3));
console.log(Number.isFinite(-3));
console.log(Number.isFinite(Infinity));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN('string'));

console.log(Number.isInteger(453));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger('string')); */


/* //DEFAULT PARAMETERS
function greet($greeting = 'Meh') {
    console.log($greeting);
}
greet();

function greets($greeting) {
    console.log($greeting);
}
greets('Jbe'); */



//SPREAD OPERATORS

let args = [1,2,3,4,5];
let args1 = [6,7,8,9,10];

function test(){
    console.log(args);
    console.log(args+ ',' +args1);

}

/* test.apply(null, args); */
test(...args);
test(...args,...args1);