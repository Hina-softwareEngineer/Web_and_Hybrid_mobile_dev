//-------------------Task 1----------------
document.write(new Date());


//-------------------Task 2----------------
let months = ['January', 'Feruary', 'March',
    'April', "May", 'June', 'July', "August", 'September',
    'October', 'November', 'December'];

document.write("<br><br></br>Current Month : ", months[new Date().getMonth()])



//-------------------Task 3----------------
let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
document.write("<br><br></br>Today is ", days[new Date().getDay()]);


//-------------------Task 4----------------
if (new Date().getDay() == 5 || new Date().getDay() == 6) {
    document.write("<br><br></br>It's Fun day");
}


//-------------------Task 5----------------
if (new Date().getDate() < 16) {
    document.write("<br><br></br>First fifteen days of the month");
}
else {
    document.write("<br><br></br>Last days of the month.");
}

//-------------------Task 6----------------
document.write("<br><br></br>Current Date", new Date());
document.write("<br><br></br>Elapsed milliseconds since January 1, 1970: ", new Date().getTime());
document.write("<br><br></br>Elapsed minutes since January 1, 1970: ", (new Date().getTime()) / (1000 * 60 * 60));


//-------------------Task 7----------------
if (new Date().getHours < 13) {
    document.write("<br><br></br>It's AM");
}
else {
    document.write("<br><br></br>It's PM");
}

//-------------------Task 8----------------
document.write("<br><br></br>Later Date : ", new Date(2020, 4, 30));



//-------------------Task 9----------------
let ramadan = new Date(2020, 3, 25).getTime();
let today1 = new Date().getTime();

document.write("<br>", Math.floor((today1 - ramadan) / (1000 * 60 * 60 * 24)), " days have passed since 1st Ramadan");


//-------------------Task 10----------------
let diff = new Date("Dec 5, 2015").getTime();
let today = new Date().getTime();
let result = (diff - today);
document.write("<br><br>", result, " seconds has passed since beginning of 2015");

//-------------------Task 11----------------
var date_now = new Date();
document.write("<br><br></br>Current Date : ", date_now);
var one_hour = new Date();
one_hour.setHours(date_now.getHours() - 1);
document.write("<br><br></br>1 hour ago, it was ", one_hour);


//-------------------Task 12----------------
var date_now = new Date();
document.write("<br><br></br>Current Date : ", date_now);
var one_hour = new Date();
one_hour.setHours(date_now.getFullYear() - 100);
document.write("<br><br></br>1 hour ago, it was ", one_hour);


//-------------------Task 13----------------
var age = prompt("Enter your age");
document.write("<br><br></br>Your age is ", age);
document.write("<br><br></br>Your birth Year is  :", new Date().getFullYear() - +age);


//-------------------Task 14----------------
document.write("<br><br></br><h1>K-Electric Bill</h1>");
document.write("<br><br></br>Customer Name : <strong>ABC Customer</strong>");
document.write("<br><br></br>Month :  <strong>", months[new Date().getMonth()], "</strong>");
document.write("<br><br></br>Number of units :  <strong>410</strong>");
document.write("<br><br></br>Charges per unit :  <strong>16</strong>");

document.write("<br><br></br>Net Amount Payable (within Due Date) :  <strong>6560</strong>");
document.write("<br><br></br>Late payment surcharge :  <strong>350</strong>");
document.write("<br><br></br>Gross Amount Payable (after Due Date) :  <strong>6910</strong>")