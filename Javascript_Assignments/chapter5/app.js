
//---------------------Task 1-------------------
let a = +prompt("Enter first number.")
let b = +prompt("Enter second number.")

document.write("The sum of ", a, " and ", b, ' is ', a + b + "<br><br>");


//---------------------Task 2-------------------
let a1 = +prompt("Enter first number.")
let b1 = +prompt("Enter second number.")

document.write("The sum of ", a, " and ", b, ' is ', a - b + "<br><br>")
let a2 = +prompt("Enter first number.")
let b2 = +prompt("Enter second number.")

document.write("The sum of ", a, " and ", b, ' is ', a * b + "<br><br>")
let a3 = +prompt("Enter first number.")
let b3 = +prompt("Enter second number.")

document.write("The sum of ", a, " and ", b, ' is ', a / b + "<br><br>")
let a4 = +prompt("Enter first number.")
let b4 = +prompt("Enter second number.")

document.write("The sum of ", a, " and ", b, ' is ', a % b + "<br><br>");



//---------------------Task 3-------------------

let variable;
document.write("Value after variable declaration is:", variable + "<br><br>");
variable = 6;
document.write('Initial value: ', variable + "<br><br>");
variable++;
document.write("Value after increment is: ", variable + "<br><br>");
variable += 6;
document.write("Value after addition is :", variable + "<br><br>");
variable--;
document.write("Value after decrement is: ", variable + "<br><br>");
variable /= 3;
document.write("The remainder is : ", variable + "<br><br>");



//---------------------Task 4-------------------
let price = 600;
document.write("Total cost to buy 5 tickets to a movie is ", price * 5, "PKR<br>");



//---------------------Task 5-------------------
document.write("<br><br>Table of 4 <br>")
for (var i = 1; i < 11; i++) {
    document.write("4 x ", i, " = ", 4 * i, "<br>");
}



//---------------------Task 6-------------------
let temp = 37;
temp2 = (temp * 9 / 5) + 32;
document.write("<br><br><br>", temp, "<sup>0</sup>C is ", temp2, "<sup>0</sup>F");
let tempF = 98;
tempF2 = (tempF - 32) * 5 / 9;
document.write("<br>", tempF, "<sup>0</sup>F is ", tempF2, "<sup>0</sup>C");



//---------------------Task 7-------------------
let price1 = 650;
let price2 = 100;
let quantity1 = 3;
let quantity2 = 7;
let shipping = 100;

document.write("<br><br><br>Price of item 1 is ", price1, "\
<br>Price of item 2 is ", price2, "\
<br>Ordered quantity of item 1 is ", quantity1, "\
<br>Ordered Quantity of item 2 is ", quantity2, "\
<br>Shipping charges is ", shipping);

document.write("<br><br>Total cost of your order is ", (price1 * quantity1) + (price2 * quantity2) + shipping);



//---------------------Task 8-------------------
let totalMarks = 980;
let obtained = 804;
let percentage = (obtained * 100) / totalMarks;

document.write("<br>Total marks : ", totalMarks);
document.write("<br>Marks Obtained : ", obtained);
document.write("<br>Percentage : ", percentage);


//---------------------Task 9-------------------
document.write("<br><h1>Currency in PKR</h1>");
document.write("<br><br><br>Total Currency in PKR : ", (10 * 104.80) + (25 * 28));;



//---------------------Task 10-------------------
let number = 90;
document.write("<br><br><br>", number + 5, " &nbsp;&nbsp;", number * 10, " &nbsp;&nbsp;", number / 2);



//---------------------Task 11-------------------
let currentYear = 2020;
let BirthYear = 2002;
let age = currentYear - BirthYear;
document.write("<br><br><br><h1>Age Calculator</h1>")
document.write("<br>current Year : ", currentYear);
document.write("<br>Birth Year : ", BirthYear);
document.write("<br>Your age is : ", age, " or ", age - 1);



//---------------------Task 12-------------------
let radius = 20;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;

document.write("<br><br><h1>The Geometrizer</h1>");

document.write("<br>Radius of circle : ", radius);
document.write("<br>The circumference is : ", circumference);
document.write("<br>The area is : ", area);



//---------------------Task 13-------------------
let favSnack = "chocolate Chip";
let currentAge = 15;
let maxAge = 65;
let amountDay = 3;


document.write("<br><br><br><h1>The Lifetime Supply Calculator</h1>")
document.write("<br><br>Favourite Snack :", favSnack);
document.write("<br>Current Age : ", currentAge);
document.write("<br>Estimated Maximum Age : ", maxAge);
document.write("<br>Amount of snacks per day : ", amountDay);

document.write("<br><br>You will need ", (maxAge - currentAge) * amountDay, " to last you until the ripe old age of ", maxAge);
