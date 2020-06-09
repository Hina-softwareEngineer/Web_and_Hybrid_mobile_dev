

// -----------------Task 1----------------------

let x = +prompt("Enter number");
document.write("Result :")
document.write("<br>The value of x is : ", x);

document.write("--------------------------------------------");
document.write("<br>The value of ++x is : ", ++x);
document.write("Now, The value of x is : ", x);
document.write("<br><br>The value of x++ is : ", x++);
document.write("Now, The value of x is : ", x);
document.write("<br><br>The value of --x is : ", --x);
document.write("Now, The value of x is : ", x);
document.write("<br><br>The value of x-- is : ", x--);
document.write("Now, The value of x is : ", x);


// -----------------Task 2----------------------
var a = 2, b = 1;
var result = --a;
document.write("<br>a is ", a);
document.write("<br>b is ", b);
result = --a - --b;
document.write("<br>a is ", a);
document.write("<br>b is ", b);
result = --a - --b + ++b;
document.write("<br>a is ", a);
document.write("<br>b is ", b);
result = --a - --b + ++b + b--;
document.write("<br>Result is ", result);



// -----------------Task 3----------------------
var input = prompt("Enter Your name: ");
document.write(input, " ! Welcome to our site");



// -----------------Task 4----------------------
var number = +prompt("Enter number");
if (!number) {
    number = 5;
}
for (var i = 1; i < 11; i++) {
    document.write(number, " x ", i, " = ", number * i);
}



// -----------------Task 5----------------------
var sub1 = prompt("Enter subject");
var sub2 = prompt("Enter subject");
var sub3 = prompt("Enter subject");
let totalMark = 100;
let mark1 = +prompt("Enter marks");
let mark2 = +prompt("Enter marks");
let mark3 = +prompt("Enter marks");
document.write(
    " <table>\
    <tr>\
        <th>Subject</th>\
        <th>Total Marks</th>\
        <th>Obtained Marks</th>\
        <th>Percentage</th>\
    </tr>\
    <tr>\
        <td>,", sub1, ",</td>\
        <td>", totalMark, "</td>\
        <td>", mark1, "</td>\
        <td>", (mark1 * 100) / totalMark, "%</td>\
    </tr>\
    <tr>\
    <td>,", sub2, ",</td>\
    <td>", totalMark, "</td>\
    <td>", mark2, "</td>\
    <td>", (mark2 * 100) / totalMark, "%</td>\
    </tr>\
    <tr>\
    <td>,", sub3, ",</td>\
    <td>", totalMark, "</td>\
    <td>", mark3, "</td>\
    <td>", (mark3 * 100) / totalMark, "%</td>\
    </tr>\
    <tr>\
    <td></td>\
    <td>", totalMark * 3, "</td>\
    <td>", mark1 + mark2 + mark3, "</td>\
    <td>", (mark1 + mark2 + mark3) * 100 / (totalMark * 3), "%</td>\
    </tr>\
</table>"
);