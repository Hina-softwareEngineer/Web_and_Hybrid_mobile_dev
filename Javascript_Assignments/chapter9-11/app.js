
//---------------------Task 1------------------
var input = prompt("Enter city name: ")
if (input == "Karachi") { document.write("Welcome to City of Lights") }


//---------------------Task 1------------------
var gender = prompt("Enter gender :")
if (gender == "male") { document.write("Good Morning, Sir") }
else { document.write("Good Morning Ma'am") }


//---------------------Task 2------------------
var color = prompt("Enter color");
if (color == "Red") { document.write("Must Stop") }
else if (color == 'Yellow') { document.write("Ready to Move") }
else { document.write("Move Now") }


//---------------------Task 3------------------
var fuel = +prompt("Enter remaining fuel in car");
if (fuel < 0.25) {
    document.write("Please refill the fuel in the car")
}


//---------------------Task 4------------------
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}


//---------------------Task 5------------------
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}



//---------------------Task 6------------------
var sub1 = prompt("Enter subject");
var sub2 = prompt("Enter subject");
var sub3 = prompt("Enter subject");
let totalMark = 100;
let mark1 = +prompt("Enter marks");
let mark2 = +prompt("Enter marks");
let mark3 = +prompt("Enter marks");

let percentage = (mark3 + mark2 + mark1) * 100 / (totalMark * 3);
document.write("Total Marks : ", (totalMark * 3));
document.write("Marks Obtained : ", mark1 + mark2 + mark3);
document.write("Percentage : ", percentage);
if (percentage >= 80) {
    document.write("Grade : A-one");
    document.write("Excellent");
}
else if (percentage >= 70) {
    document.write("Grade : A");
    document.write("Good");
}
else if (percentage >= 60) {
    document.write("Grade : B");
    document.write("You need to improve");
}
else {
    document.write("Grade : Fail");
    document.write("Sorry");
}




//---------------------Task 7------------------
let secret_no = Math.random() * 11 + 1;
let guess = +prompt("Guess the secret Number");
if (secret_no == guess) { alert("Bingo! Correct answer") }
else { document.write("Close enough to the correct answer.") }


//---------------------Task 8------------------
var number = +prompt("enter number")
if (number % 3 == 0) { alert("Number is divisible by 3") }



//---------------------Task 9------------------
var number1 = +prompt("enter number")
if (number1 % 2 == 0) { alert("Number is even") }
else {
    alert("Number is odd")
}


//---------------------Task 10------------------
var temp = prompt("Write the Temperature");
if (temp > 40) { document.write("It is stoo hot outside.") }
else if (temp > 30) { document.write("The weather today is Normal.") }
else if (temp > 20) { document.write("Today's weather is cool") }
else if (temp > 10) { document.write("OMG! Today's weather is so cool") }



//---------------------Task 11------------------
var num1 = prompt('Enter first number');
var num2 = prompt("Enter second numer");
var op = prompt("Enter operation");



if (op === '+') { document.write("<br>", num1, " ", op, " ", num2, " = ", num + num2) }
if (op === '-') { document.write("<br>", num1, " ", op, " ", num2, " = ", num - num2) }
if (op === '*') { document.write("<br>", num1, " ", op, " ", num2, " = ", num * num2) }
if (op === '/') { document.write("<br>", num1, " ", op, " ", num2, " = ", num / num2) }
if (op === '%') { document.write("<br>", num1, " ", op, " ", num2, " = ", num % num2) }
