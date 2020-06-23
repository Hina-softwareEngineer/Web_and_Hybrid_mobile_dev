

var b = 0;
while (b < 10) {
    console.log(b);
    b++;
}


var c = 0;
do {
    console.log(c);
    c++;
} while (c < 10);


function foo(greet) {
    console.log("foooo, ", greet);
}


function getItem() {
    let i = document.getElementsByTagName("input");
    console.log(i.value);
}


function calc() {
    let para = document.getElementById("para");
    console.log(para.value);

    para.innerHTML = "mine"
}
