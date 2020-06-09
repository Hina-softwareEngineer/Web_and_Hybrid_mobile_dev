
//--------------------task 1------------------
var array = [];

//--------------------task 2------------------
var array2 = new Array();
//--------------------task 3------------------
var string = ["name"];
//--------------------task 4------------------
var number = [5];
//--------------------task 5------------------
var boolean = [true];
//--------------------task 6------------------
var mixed_array = ['name', 45, true];

//--------------------task 7------------------
var education = ["ssc", "hssc", "bcs", "bs", "bcom", "Ms", "Mphil", "Phd"];
for (i = 0; i < education.length; i++) {
    document.write("<br>", i + 1, ") ", education[i].toUpperCase());
}

//--------------------task 8------------------
var students = ['michael', 'john', 'tony'];
var scores = [320, 230, 480];

for (var i = 0; i < students.length; i++) {
    document.write("<br>", "Score of ", students[i], " is ", scores[i], " Percentage : ", (scores * 100 / 500), "%")
}

//--------------------task 9------------------
var colors = ["red", "blue", 'yellow', "pink", "green"];
document.write("<br>", colors.shift(prompt("Enter color name")))
document.write("<br>", colors.push(prompt("Enter color name")))
document.write("<br>", colors.splice(0, 0, ["pink", "purple"]))
document.write("<br>", colors.unshift())
document.write("<br>", colors.pop())
var number = +prompt("enter index");
var color = prompt("enter color");
document.write("<br>", colors.splice(number, 0, color));
var number = prompt("enter number odf elements");
var index = prompt("enter index");
document.write("<br>", colors.splice(index, number))


//--------------------task 10------------------
var sort = [320, 230, 480, 120];
document.write("<br>", "Obtained Scores of Students: ", (sort.sort()).join(" ,"));



//--------------------task 11------------------
var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = city.slice(3, 6);
document.write("<br>", selectedCities.join(" ,"));


//--------------------task 12------------------
var arr = ["This ", "is ", "my ", "cat"];
document.write("<br>", arr.join(" ,"));


//--------------------task 13------------------
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];

document.write("<br>", "Devices: ", devices.join(" ,"));

for (var i = 0; i < devices.length; i++) {
    document.write("<br>", "Out : \n", devices[i]);
}


//--------------------task 14------------------
document.write("<br>", "Devices: ", devices.join(" ,"));
for (var i = devices.length - 1; i >= 0; i--) {
    document.write("<br>", "Out : \n", devices[i]);
}



//--------------------task 15------------------
var store = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony", "Haier"];
document.write("<br>", "<select>");
for (var i = 0; i < store.length; i++) {
    document.write("<br>", "<option>", store[i], "</option>");
}
document.write("<br>", '</select');




