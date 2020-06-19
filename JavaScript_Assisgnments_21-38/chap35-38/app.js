//-------------------Task 1----------------

function current_date() {
    document.write(new Date());
}


//-------------------Task 2----------------
function fullName(input1, input2) {
    var fullName1 = input1 + input2;
    alert(`Welcome ${fullName1}`);
}

//-------------------Task 3----------------
function add(num1, num2) {
    document.write("Sum is ", num2 + num2);
}


//-------------------Task 4----------------
function calculator(num1, num2, op) {
    if (op === '+') { document.write("<br>", num1, " ", op, " ", num2, " = ", num + num2) }
    if (op === '-') { document.write("<br>", num1, " ", op, " ", num2, " = ", num - num2) }
    if (op === '*') { document.write("<br>", num1, " ", op, " ", num2, " = ", num * num2) }
    if (op === '/') { document.write("<br>", num1, " ", op, " ", num2, " = ", num / num2) }
    if (op === '%') { document.write("<br>", num1, " ", op, " ", num2, " = ", num % num2) }
}

//-------------------Task 5----------------
function square(n) {
    return n * n;
}

//-------------------Task 6----------------
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


//-------------------Task 7----------------
function display(start, end) {
    for (var i = start; i < end + 1; i++) {
        document.write(" i :", i);
    }
}


//-------------------Task 8----------------
function calculateHypotenuse(base, perpendicular) {
    let hyp = base * base + perpendicular * perpendicular;
    document.write(Math.sqrt(hyp));

    function calculateSquare(hyp) {
        return hyp;
    }
}



//-------------------Task 9----------------
function area(width = 56, height = 45) {
    return width * height;
}



//-------------------Task 10----------------
function palindrome(string) {
    let rev = "";
    for (var i = string.length; i >= 0; i--) {
        rev += string[i];
    }

    if (string === rev) {
        document.write("String is palindrome");
    }
}



//-------------------Task 11----------------
function uppercase(string) {
    let splitted_string = string.split(" ");
    for (var i = 0; i < splitted_string.length; i++) {
        console.log(splitted_string[i][0].toUpperCase() + splitted_string[i].substr(1, splitted_string[i].length))
    }
}



//-------------------Task 12----------------
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


//-------------------Task 13----------------
function count_letter(string, letter) {
    let count = 0;
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            count = count + 1;
        }
    }
    console.log(count);
}


//-------------------Task 14----------------
function calcCircumference(radius) {
    document.write("The circumference is : ", radius * 3.142, 2);
}

function calcArea() {
    document.write("The area is ", radius * radius * 3.142);
}