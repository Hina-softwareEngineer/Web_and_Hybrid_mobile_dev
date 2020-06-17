
document.write(new Date());


let months = ['January', 'Feruary', 'March',
    'April', "May", 'June', 'July', "August", 'September',
    'October', 'November', 'December'];


document.write("Current Month : ", months[new Date().getMonth()])

let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
document.write("Today is ", days[new Date().getDay()]);

if (new Date().getDay() == 5 || new Date().getDay() == 6) {
    document.write("It's Fun day");
}

if (new Date().getDate() < 16) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month.");
}


document.write("Current Date", new Date());
document.write("Elapsed milliseconds since January 1, 1970: ", new Date().getTime());
document.write("Elapsed minutes since January 1, 1970: ", (new Date().getTime()) / (1000 * 60 * 60));


if (new Date().getHours < 13) {
    document.write("It's AM");
}
else {
    document.write("It's PM");
}


document.write("Later Date : ", new Date(2020, 4, 30));

let ramadan = new Date(2020, 3, 25).getTime();
let today1 = new Date().getTime();

document.write(Math.floor((today1 - ramadan) / (1000 * 60 * 60 * 24)), " days have passed since 1st Ramadan");



let diff = new Date("Dec 5, 2015").getTime();
let today = new Date().getTime();
let result = (diff - today);
document.write(result, " seconds has passed since beginning of 2015");


var date_now = new Date();
var one_hour = new Date();