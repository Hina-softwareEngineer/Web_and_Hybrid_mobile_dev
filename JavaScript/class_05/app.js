
var a = new Date()
console.log(a, a.toString());

var dob = new Date("Dec 26, 2019");
var dobmili = dob.getTime();
var today = new Date();
var todarmili = today.getTime();

var age = todarmili - dobmili;

var diffyear = diff / (1000 * 60 * 60 * 24 * 12);

var accuage = Math.floor(diffyear);
console.log("age : ", age);


var dob = new Date(prompt("Enter your date of birth, Jan 1 1970"));


function add(a, b, c) {
    var z = a + b + c;
    return z;
}

var g = add(5, 8, 1);

alert(g);

console.log("hello");


function hello() {
    console.log("Hello world");
}

console.log("world");


//parameters
function first(b, a) {
    alert(b + a);
}

//arguments
first(2, 3);

console.log(first(4, 5));


function foo() {
    var a = "ghouus"
}

foo();

console.log(a);


function calc(num1, opr, num2) {
    if (opr === '+') {
        return num1 + num2;
    }
    else if (opr === '-') {
        return num1 - num2;
    }
    else if (opr === '*') {
        return num1 * num2;
    }
}

var res1 = calc(5, "+", 5);
var res2 = calc(4, "-", 6);
var res3 = calc(9, "*", 8);

console.log(res1, res2, res3);


var name = "Ghours";

switch (name) {
    case "Ghours":
        alert("hello ghous");
        break;

    case "Basit":
        alert("Helo basit");
        break;
    default:
        alert("helllo")
}