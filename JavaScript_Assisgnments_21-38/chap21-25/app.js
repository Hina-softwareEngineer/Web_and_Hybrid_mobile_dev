//------------------------Task 1---------------------

var input1 = prompt("Enter your first name:")
var input2 = prompt("Enter your second name : ")

var fullName = input1 + input2;
alert(`Welcome ${fullName}`);


//------------------------Task 2---------------------
var mobilePhone = prompt("Enter your favourite mobile phone model");
document.write("<br><br><br>My favourite phone is : ", mobilePhone, "<br>The length of string is : ", mobilePhone.length);


//------------------------Task 3---------------------
var string = "Pakistan";
document.write("<br><br>String : ", string, "<br>Index of 'n'", string.indexOf('n'));


//------------------------Task 4---------------------
var lastIndex = 'Hello World';
document.write("<br><br>String : ", lastIndex, "<br>Index of 'l'", string.lastIndexOf('l'));


//------------------------Task 5---------------------
document.write("<br><br>String : ", string, "<br>Character at index 3 : ", string[3]);


//------------------------Task 6---------------------
var fullName2 = input1.concat(input2);


//------------------------Task 7---------------------
var city = "Hyderabad";
document.write("<br><br>After REplacement", city.replace("Hyder", "Islam"));


//------------------------Task 8---------------------
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write("<br><br>Message : ", message.split("and").join("&"));


//------------------------Task 9---------------------
var number = "472";
document.write("<br><br>Value : ", number, "<br>Type : ", typeof (number));
document.write("<br><br>Value : ", +number, "<br>Type : ", typeof (+number));


//------------------------Task 10---------------------
var user_input = prompt("Enter fruit anme");
document.write("<br><br>User INput : ", user_input);
document.write("<br><br>User Case : ", user_input.toUpperCase());


//------------------------Task 11---------------------
var user_input = prompt("Enter name");
document.write("<br><br>User INput : ", user_input);
document.write("<br><br>User Case : ", user_input[0].toUpperCase(), user_input.slice(1, user_input.length));


//------------------------Task 12---------------------
var number = 35.36;
document.write("<br><br>Number : ", number);
document.write("<br><br>Result : ", number.toString().replace(".", ""));


//------------------------Task 13---------------------
var user_name = prompt("Enter username");
for (var i = 0; i < user_name.length; i++) {
    if (user_name[i].charCodeAt() == 33 ||
        user_name[i].charCodeAt() == 44 ||
        user_name[i].charCodeAt() == 46 ||
        user_name[i].charCodeAt() == 64) {
        alert("Please enter a valid name");
        break;
    }
}


//------------------------Task 14---------------------
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var bakery = prompt("Welcome to ABC Bakery. What do you wnat to order ?");
for (i = 0; i < A.length; i++) {
    if (bakery.toLowerCase() === A[i].toLowerCase()) {
        document.write(A[i], " is available at index ", i, " in our bakery.")
    }
    else {
        document.write("<br><br>We are sorry. ", bakery, " is not available in not bakery.")
    }
}

//------------------------Task 15---------------------
var password = prompt("Enter password");
if (password.match(/^[A-Za-z][a-zA-Z0-9]{5}$/)) {
    alert("Password can't begin with a number");
    alert("Please enter a valid password");
}


//------------------------Task 16---------------------
var university = "University of Karachi";
document.write(university.split(""));


//------------------------Task 17---------------------
var user_input1 = prompt("Enter your country name: ");
document.write(document.write("<br><br><br>", user_input1[user_input1.length - 1]));


//------------------------Task 18---------------------
var string2 = "The quick brown fox jumps over the lazy dog";
document.write("<br><br>There are ", string2.match(/the/gi).length, " of the world 'the'");