

var input1 = prompt("Enter your first name:")
var input2 = prompt("Enter your second name : ")

var fullName = input1 + input2;
alert(`Welcome ${fullName}`);

var mobilePhone = prompt("Enter your favourite mobile phone model");
document.write("<br>My favourite phone is : ", mobilePhone, "<br>The length of string is : ", mobilePhone.length);

var string = "Pakistan";
document.write("String : ", string, "<br>Index of 'n'", string.indexOf('n'));


var lastIndex = 'Hello World';
document.write("String : ", lastIndex, "<br>Index of 'l'", string.lastIndexOf('l'));


document.write("String : ", string, "<br>Character at index 3 : ", string[3]);

var fullName2 = input1.concat(input2);

var city = "Hyderabad";
document.write("After REplacement", city.replace("Hyder", "Islam"));


var message = "Ali and Sami are best friends. They play cricket and football together."
document.write("Message : ", message.split("and").join("&"));


var number = "472";
document.write("Value : ", number, "<br>Type : ", typeof (number));
document.write("Value : ", +number, "<br>Type : ", typeof (+number));

var user_input = prompt("Enter fruit anme");
document.write("User INput : ", user_input);
document.write("User Case : ", user_input.toUpperCase());


var user_input = prompt("Enter fruit anme");
document.write("User INput : ", user_input);
document.write("User Case : ", user_input[0].toUpperCase());


var number = 35.36;
document.write("Number : ", number);
document.write("Result : ", number.toString().replace(".", ""));


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


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var bakery = prompt("Welcome to ABC Bakery. What do you wnat to order ?");
for (i = 0; i < A.length; i++) {
    if (bakery.toLowerCase() === A[i].toLowerCase()) {
        document.write(A[i], " is available at index ", i, " in our bakery.")
    }
    else {
        document.write("We are sorry. ", bakery, " is not available in not bakery.")
    }
}


var password = prompt("Enter password");
if (password.match(/^[A-Za-z][a-zA-Z0-9]{5}$/)) {
    alert("Password can't begin with a number");
    alert("Please enter a valid password");
}


var university = "University of Karachi";
document.write(university.split(""));


var user_input1 = prompt("Enter your country name: ");
document.write(document.write("<br>", user_input1[user_input1.length - 1]));


var string2 = "The quick brown fox jumps over the lazy dog";
document.write("There are ", string2.match(/the/gi).length, " of the world 'the'");