var arr = ["cat", "dog", "tiger", "lion", "elephant"];
arr.push('rat')

console.log(arr)
arr.shift()
console.log(arr)

arr.unshift('mice')
console.log(arr)


// for loop
var a;
for (a = 1; a <= 10; a++) {
    document.write(a + " hello <br>")
}

var names = ["Ghous", "Basit", "Fahad", "Unknown"];

console.log(names[0]);

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);

    if ("Unknown" == names[i]) {
        console.log("Matched finally")
        break;
    }
}

var letter = "civic";
var count = 0;
// Palindrome

for (var i = 0; i < Math.floor(letter.length) / 2; i++) {

    if (letter[i] !== letter[letter.length - i - 1]) {
        console.log("not palindrome");
        count = 1;
        break;
    }

}

letter = letter.toUpperCase();

if (count == 0) {
    console.log("Palindrome")
}
console.log('end');

var check = "";
for (var i = 0; i < letter.length; i++) {
    check += letter[i];
}

console.log(letter.indexOf('I'), check)

if (check == letter) {

    console.log('palindrome');
}
else {
    console.log('not palindrome')
}

//--------

let value1 = +prompt("Enter first Value");
let value2 = +prompt("Enter second Value");
var operator = prompt("Enter operator");

console.log(value1 + operator + value2);

if (operator === '+') {
    document.write("The sum is : ", value1 + value2);
}

else if (operator === '-') {
    document.write("The sum is : ", value1 - value2);
}

else if (operator === '*') {
    document.write("The sum is : ", value1 * value2);
}

else if (operator === '/') {
    document.write("The sum is : ", value1 / value2);
}

else {
    document.write("Syntax Error");
}