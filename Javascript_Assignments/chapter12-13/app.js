
//-------------------------Task 1-----------------------
var input = prompt("Enter number");
var code = input.charCodeAt();
if (code >= 48 && code <= 57) { console.log("Number") }
if (code >= 65 && code <= 90) {
    console.log("Uppercase Letter")
}
if (code >= 97 && code <= 122) {
    console.log("Lowercase Letter")
}


//-------------------------Task 2-----------------------
var num1 = prompt("Enter number");
var num2 = prompt("Enter number");
if (num1 > num2) {
    document.write(num1, " is greater than ", num2);
}
else if (num1 == num2) {
    document.write(num1, " is equal to ", num2);
}
else {
    document.write(num2, " is greater than ", num1);
}


//-------------------------Task 3-----------------------
var num1 = prompt("Enter number");
if (num1 > 0) alert("Positive number")
else if (num1 < 0) alert("Negative number");
else alert("Zero ")



//-------------------------Task 4-----------------------
var x = prompt("Enter number");
if (["a", "e", "i", "o", "u"].includes(x)) { document.write("Vowel") }
else document.write("consonant")


//-------------------------Task 5-----------------------
let password = "12345";
var user = prompt("Enter your password");
if (user == "") { alert("please enter your password") }
if (password == user) {
    alert("Correct! The password you entered matches the orgininal password")
}
else {
    alert("Incorrect Password")
}


//-------------------------Task 6-----------------------
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}



//-------------------------Task 7-----------------------
var time = prompt("Enter time: ");
if (time >= "0000" && time < +"1200")
    document.write("Good Morning!")
else if (time >= "1200" && time <= "1700")
    document.write("Good afternoon!")
else if (time >= "1700" && time <= "2100")
    document.write("Good evening!")
else if (time >= "2100" && time < +"2400")
    document.write("Good Night!")