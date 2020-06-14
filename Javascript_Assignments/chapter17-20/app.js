//-------------------task 1-----------------
var arrays = [[]];


//-------------------task 2-----------------
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

//-------------------task 3-----------------
for (var i = 0; i < 10; i++) {
    document.write(i + 1);
}

//-------------------task 4-----------------
var number = +prompt("Enter number");
var length = +prompt("ENter length of TAble");

for (var i = 1; i <= length; i++) {
    document.write("<br>", number, " x ", i, " = ", number * i);
}

//-------------------task 5-----------------
var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write("<br>Element at index ", i, " is ", fruits[i]);
}


//-------------------task 6-----------------
document.write("<br><h1>Counting</h1><br>")
for (var i = 1; i < 16; i++) {
    document.write(i, ", ");
}


document.write("<br><h1>Reverse Counting</h1><br>")
for (var i = 10; i > 0; i--) {
    document.write(i, ", ");
}

document.write("<br><h1>Even</h1><br>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i, ", ");
}

document.write("<br><h1>Odd</h1><br>")
for (var i = 1; i < 20; i = i + 2) {
    document.write(i, ", ");
}

document.write("<br><h1>Serires</h1><br>")
for (var i = 2; i < 16; i = i + 2) {
    document.write(i, "K, ");
}


//-------------------task 7-----------------
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABc Bakery! What do you want to order ma'am?")

if (a.includes(input)) {
    alert(`${input} is available at ${a.indexOf(input)}`);
}
else {
    alert("We are sorry , pastry is not available in our bakery.")
}

//-------------------task 8-----------------
var A = [24, 53, 78, 91, 12]
A.sort().reverse();
document.write(A[0], " is the larest number.<br>")

//-------------------task 9-----------------
A.sort();
document.write(A[0], " is the smallest number<br>");


//-------------------task 10-----------------
document.write("<br>Multiples of 5<br>");
for (var i = 1; i < 101; i++) {
    document.write(i * 5, ", ");
}