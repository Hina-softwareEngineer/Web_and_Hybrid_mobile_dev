

function current_date() {
    document.write(new Date());
}

function fullName(input1, input2) {
    var fullName1 = input1 + input2;
    alert(`Welcome ${fullName1}`);
}


function add(num1, num2) {
    document.write("Sum is ", num2 + num2);
}


function(num1, num2, op) {
    if (op === '+') { document.write("<br>", num1, " ", op, " ", num2, " = ", num + num2) }
    if (op === '-') { document.write("<br>", num1, " ", op, " ", num2, " = ", num - num2) }
    if (op === '*') { document.write("<br>", num1, " ", op, " ", num2, " = ", num * num2) }
    if (op === '/') { document.write("<br>", num1, " ", op, " ", num2, " = ", num / num2) }
    if (op === '%') { document.write("<br>", num1, " ", op, " ", num2, " = ", num % num2) }
}


function square(n) {
    return n * n;
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        for (var i = 1; i < n; i++) {
            n = n * i;
        }
    }
    return n;
}



function display(start, end) {
    for (var i = start; i < end + 1; i++) {
        document.write(" i :", i);
    }
}


function calculateHypotenuse(base, perpendicular) {
    let hyp = base * base + perpendicular * perpendicular;
    document.write(Math.sqrt(hyp));

    function calculateSquare(hyp) {
        return hyp;
    }
}



function area(width = 56, height = 45) {
    return width * height;
}


function palindrome(string) {
    let rev = "";
    for (var i = string.length; i >= 0; i--) {
        rev += string[i];
    }

    if (string === rev) {
        document.write("String is palindrome");
    }
}


function uppercase(string) {
    let splitted_string = string.split(" ");
    for (var i = 0; i < splitted_string.length; i++) {
        console.log(splitted_string[i][0].toUpperCase() + splitted_string[i].substr(1, splitted_string[i].length))
    }
}



function longest_string(string) {
    let splitted_string = string.split(" ");
    let max = 0;
    let longest = "";
    for (var i = 0; i < splitted_string.length; i++) {
        if (splitted_string[i].length > max) {
            max = splitted_string[i].length;
            longest = splitted_string[i]

        }
    }
    console.log("Longest string : ", max, longest)
}



function count_letter(string, letter) {
    let count = 0;
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            count = count + 1;
        }
    }
    console.log(count);
}



function calcCircumference(radius) {
    document.write("The circumference is : ", radius * 3.142, 2);
}

function calcArea() {
    document.write("The area is ", radius * radius * 3.142);
}