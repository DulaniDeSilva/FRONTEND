//variables 

let stringvar = "Dulani";
let intvar = 12;
let boolvar = true;
let e;
let f = null;

//finding the type of the variable: typeof
console.log(typeof(stringvar));
console.log(typeof(boolvar));

//typeconversion
intvar = String(intvar);
console.log(intvar);
console.log(typeof(intvar));

//number type
let a  =  Number(boolvar);
console.log(a);

//parseInt: one by one searching for a number
let fu = 13.432
let bu = "234df";
console.log(parseInt(bu));

//functions

function addNumbers(num1, num2){
    let ans = num1 + num2;
    console.log(ans);
}
addNumbers(12, 34);

var profession =  function(job, firstName){
    switch(job){
        case 'doctor':
            return firstName + ' is treating patients';
            break;
        case 'teacher':
            return firstName + ' is teaching patients';
            break;
    }
}

console.log(profession('doctor', 'Dulani'));

//arrays

//defining an array
var students = ["Ruwan", "Dulani", "gami", "han"];
var marks = new Array(60, 33, 45, 50);

for(var i = 0; i<= students.length; i++){
    console.log(students[i],  "got", marks[i], "for the course" );
}

students[5] = "Mainda";
console.log(students.length);

//different data types of an array
var std1 = ['Kamal', 'Perera', 22, 'civil', true];

//add element too an array in the end
std1.push('green');

//add element too an array in the first
std1.unshift("Miss");

//remove element from an aray in the end
std1.pop();

//remove element from an aray in the first
std1.shift();

//get index of an element
console.log(std1.indexOf("Miss"));


let tips = new Array();
let amount = new Array();

function tipCalculator(bill){
    var tip;
    for( i = 0; i < bill.length; i++){
        if(bill < 1000){
            return 0.2;
        }else if( bill > 1000 && bill < 1500){
            return 0.15;
        }else {
            return 0.1;
        }
    }
}

let bill = [1230, 982, 1640];

var tip = function(bill){
   
   
}

console.log(tip);
















