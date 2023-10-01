// node filename.js

var myName = "Dulani";
console.log(myName);

// var yourname = prompt("What is your name? ");
// alert("Welcome " + yourname + "To javascript")


// variables
var a = 3;
var b = 8;

var k =  a;
a = b;
b = k;


console.log(a)
console.log(b)

//strings

//concatenation
alert("Hello" + "World");

var message = "Hello";
var namee = "Dulani";
// alert(message + namee + "Welcome to javascript");


console.log(namee.length);

// length 
var message = "Hello";
var namee = "Dulani";

var limit = 10;
var inputName = prompt("Enter the name: ");
if(inputName.length > limit)
    alert("Excedd limit");
else
    alert("Success");



//slicing
var slicing_string = "This is good";
slicing_string.slice(0, 2); //first include last excluding 

//uppercase
var upp = "skdjfos";
upp.toUpperCase();


//Random number generation in javascript 
// Math.random() = > generates random numbers
// range 
//psudo number generator  
var random_number = Math.random();  //this gives numbers between 0 and 1  
random_number = random_number * 6;
random_number = Math.floor(random_number) //round up the number

//
var output = [];
var count = 1;

function fizzBuzz(){

    output.push(count);
    count++;
    console.log(output);
}






















































