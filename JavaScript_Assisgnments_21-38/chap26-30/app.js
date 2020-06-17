
var integer = prompt("Enter positive integer");
document.write("Number : ", integer);
document.write("Round off Value : ", Math.round(integer));
document.write("Floor Value : ", Math.floor(integer));
document.write("Ceil Value : ", Math.floor(integer) + 1);

var negative_integer = prompt("Enter positive negative_integer");
document.write("Number : ", negative_integer);
document.write("Round off Value : ", Math.round(negative_integer));
document.write("Floor Value : ", Math.floor(negative_integer));
document.write("Ceil Value : ", Math.floor(negative_integer) + 1);



var absolute_value = prompt("Enter absolute number");
document.write("The absolute value of ", absolute_value, " is ", Math.abs(absolute_value));


document.write("Random Dice Value : ", Math.floor(Math.random() * 6) + 1);


let coin_toss = Math.floor(Math.random() * 2 + 1);
if (coin_toss == 2) { document.write("2<br>RAndom coin value : Heads") }
else { document.write("1<br>Random coin value : Tails"); }

document.write("Random number between 1 and 100 is ", Math.floor(Math.random() * 100 + 1));


var weight = prompt("Enter weight:");
let w = weight.match(/[0-9 .]*/);
document.write('THe weight of user is ', w[0], ' kilograms');


var secret = prompt('Enter secret Number ?');
var random = Math.random() * 10 + 1;

if (secret == random) {
    alert("Congratulations! Matched");
}
else {
    alert("Try Again!");
}

