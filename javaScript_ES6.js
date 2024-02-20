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



/* //SPREAD OPERATORS

let args = [1,2,3,4,5];
let args1 = [6,7,8,9,10];

function test(){
    console.log(args);
    console.log(args+ ',' +args1);

}

//test.apply(null, args);
test(...args);
test(...args,...args1); */



/* //SET & MAP
let myArray = [12,45,7,78];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a: 1, b: 2});

mySet.delete(12);

//mySet.clear();

mySet.add('10');
mySet.add('34');
mySet.add('50');

//console.log(mySet);
//console.log(mySet.size);

mySet.forEach(function(val){
    console.log(val);
})

let myMap = new Map([['a1','hello'],['b2','goodbye']]);

myMap.set('c3', 'foodie');
myMap.delete('b2');
console.log(myMap);
console.log(myMap.size); */


/* //WEAK SET

let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic',
    color: 'black'
}

let car2 = {
    make: 'Toyota',
    model: 'Corola',
    color: 'White'
}

let car3 = {
    make: 'BMW',
    model: 'BMW 2020',
    color: 'Silver'
}

carWeakSet.add(car2);
carWeakSet.add(car1);

console.log(carWeakSet); */


/* //WEAKMAP

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
}

let car1 = {
    make: 'BMW',
    model: 'BMW 2020',
    color: 'Silver'
}
let key2 = {
    id: 2
}

let car2 = {
    make: 'Toyota',
    model: 'Corola',
    color: 'White'
}

carWeakMap.set(key1,car1);
carWeakMap.set(key2,car2);

carWeakMap.delete(key1);

console.log(carWeakMap); */


//ARROW FUNCTION

/* let add = function(a, b){
    let sum = a + b;
    console.log(sum);
}
add(2,2);


let add1 = (a, b) => {
    let sum = a + b;
    console.log(sum);
}
add(11,2);

function Checking(prefix){
    this.prefix = prefix;
}

Checking.prototype.prefixArray = function(arr){
    let that = this;
    return arr.map(function(x){
        console.log(that.prefix + x);
    });
}

let pre = new Checking('Hello ');
pre.prefixArray(['Meh', 'Jbe']); */


/* //PROMISES -- operation that has not completed yet but expects to be complete in future
//Immediatley Resolved

//var myPromise = Promise.resolve('Foo');
//myPromise.then((res) => console.log(res));


function getData(method, url){
    return new Promise(function( resolve, reject){
       var xhr = new XMLHttpRequest();
       xhr.open(method, url);
       xhr.onLoad = function(){
        if(this.status >= 200 && this.status < 300){
            resolve(xhr.response);
        }else{
            reject({
                status: this.status,
                statusText: XMLHttpRequest.statusText
            });
        }
       }
       xhr.onerror = function(){
        reject({
            status: this.status,
            statusText: XMLHttpRequest.statusText
        });
       };
       xhr.send();
    });
}

getData('GET','https://jsonplaceholder.typicode.com/todos').then(function (data) {

console.log(data);
    
}).catch(function(err){
    console.log(err);
}); */


//GENERATOR

/* function *g1(){
    console.log('Hello');
    yield 'Yield 1 Meh..';
    console.log('World');
    yield 'Yield 2 Meh..';
    return 'Returned...'
}

var g = g1(); */
//console.log(g.next().value);
//console.log(g.next().value);
//console.log(g.next().value);
/* for (let val of g){
    console.log(val);
} */


// Arrays in JavaScript
/* const arrays = [0,1,2,3,4,5,6,7,8,9,10];
console.log(arrays[4]);
console.log(arrays[arrays.length-1]); */ //to see the last value of array


// Declaring Arrays as OBJECTS
//const num = new Array(1,2,3,4,5,6,7,8,9,10,11);
//console.log(num[num.length-1]);


// Push method
/* num.push(12);
num.push(13)
console.log(num); */


// Unshift method 
/* num.unshift(0); //to add element at the start
console.log(num); */


// Pop method
/* num.pop() //remove last element
console.log(num); */


// Unshift method 
/* num.shift() //remove first element
console.log(num); */


//changing value using index
/* const num = [0,1,2,3,4,5,6,7,8,9,10];
num[3] = 33;
num[2] = "MJ";
num[1] = true;
num[0] = {num:56};
console.log(num); */


//Indexof
//to find index in array using value by indexOf
const subjects = ['laptop', 'table', 'cat', 'Fernsehen', 'pencil', 'mobile', 'cat'];
console.log(subjects.indexOf('cat')); // if value not match in array list then -1 will return
// indexOf start search from start when match it returns the index number, no matter value exist more than once in array list
console.log(subjects.indexOf('cat', 3)); // 3 means start search from index 3
