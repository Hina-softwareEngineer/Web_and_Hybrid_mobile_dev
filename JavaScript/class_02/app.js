
var a= 25;
console.log(a);


var x = 5;
var y = x++ + ++x + x + --x + x-- - x
// 5 + 7 + 7 + 6 + 6 - 5
console.log(y)


var a = +prompt("Enter your age", "Your age is ");
var b = a + 10;
console.log("The output is " ,a, "  ",b)

var age = 18
if (age < 18){
    alert("Your age is less");
}
else if (age > 18) {
    alert("You are no more with less age.");
}
else {
    alert("Your age is good!!!..")
}


var age = +prompt("Enter your age...")
var gender = prompt("Enter your gender")
if (age > 18 && gender == "male"){
    alert('You are allowed')
}
else { alert("You are not allowed"); }




var a = "5";
if (a === 5 ){ alert("True")}
else {alert("False")}



// If IfElse and Else


// var percent = +prompt("Enter your percent")
// if (percent >= 80 && percent <=100){
//     alert("A+")
// }
// else if (percent >=70 && percent <= 80){
//     alert("A")
// }
// else if (percent >=60 && percent <= 70){
//     alert("B")
// }
// else if (percent >=50 && percent <= 60){
//     alert("C")
// }
// else if (percent >=40 && percent <= 50){
//     alert("D")
// }
// else if (percent >=30 && percent <= 40){
//     alert("E")
// }
// else{
//     alert('Fail')
// }

// Array

var students = ["ghous", "basit", "ali"]
students.pop()
students.push("Hina")
students.push("adiba", 1234)
console.log(students)

students.shift()
students.unshift("Bubloo", 'hasse')
console.log(students)

var names = []

names[0]="Ghous"
names[1]=123
console.log(names)
names.splice(1, 0, "huhu", "bubloo")
console.log(names)
names.splice(0, 1)
console.log(names)
names.push("123", "hiankhaidim", "khadim")
var name = names.slice(3 , 5)
console.log(names, name)