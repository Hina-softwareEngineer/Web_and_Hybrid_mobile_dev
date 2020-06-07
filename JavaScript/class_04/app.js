// for (var i = 1; i < 100; i = i + 10) {
//     for (var j = 0; j < 10; j++) {
//         document.write(i + j + " ");
//     }
//     document.write("<br>");
// }

// for (var a = 1; a <= 100; a = a + 10) {
//     for (var b = a; b < a + 10; b++) {
//         document.write(b + " &nbsp;&nbsp;")
//     }
//     document.write("<br>");
// }


// var city = prompt("Enter your City Name : ");
// var arr = ["Karachi", "Islamabad", "Lahore"];
// var firstword = city.slice(0, 1).toUpperCase();
// var otherchar = city.slice(1).toLowerCase();

// var word = firstword + otherchar;


// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === word) {
//         document.write("Match ", arr[i] + "<br>");
//     }
//     else {
//         document.write("Not matched ", arr[i], "<br>");
//     }
// }

var para = 'this is test para , test para';
para1 = para.replace(/test/g, "example");
console.log(para1);


var num = 1.4;
console.log(Math.round(num));
