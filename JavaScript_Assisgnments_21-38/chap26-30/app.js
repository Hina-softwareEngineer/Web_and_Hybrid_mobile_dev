//-----------------------Task 1---------------------

var integer = prompt("Enter positive integer");
document.write("<br><br>Number : ", integer);
document.write("<br><br>Round off Value : ", Math.round(integer));
document.write("<br><br>Floor Value : ", Math.floor(integer));
document.write("<br><br>Ceil Value : ", Math.floor(integer) + 1);


//-----------------------Task 2---------------------
var negative_integer = prompt("Enter positive negative_integer");
document.write("<br><br>Number : ", negative_integer);
document.write("<br><br>Round off Value : ", Math.round(negative_integer));
document.write("<br><br>Floor Value : ", Math.floor(negative_integer));
document.write("<br><br>Ceil Value : ", Math.floor(negative_integer) + 1);


//-----------------------Task 3---------------------
var absolute_value = prompt("Enter absolute number");
document.write("<br><br>The absolute value of ", absolute_value, " is ", Math.abs(absolute_value));

//-----------------------Task 4---------------------
document.write("<br><br>Random Dice Value : ", Math.floor(Math.random() * 6) + 1);


//-----------------------Task 5---------------------
let coin_toss = Math.floor(Math.random() * 2 + 1);
if (coin_toss == 2) { document.write("<br><br>2<br>RAndom coin value : Heads") }
else { document.write("<br><br>1<br>Random coin value : Tails"); }


//-----------------------Task 6---------------------
document.write("<br><br>Random number between 1 and 100 is ", Math.floor(Math.random() * 100 + 1));


//-----------------------Task 7---------------------
var weight = prompt("Enter weight:");
let w = weight.match(/[0-9 .]*/);
document.write('THe weight of user is ', w[0], ' kilograms');

//-----------------------Task 8---------------------
var secret = prompt('Enter secret Number ?');
var random = Math.random() * 10 + 1;

if (secret == random) {
    alert("Congratulations! Matched");
}
else {
    alert("Try Again!");
}

