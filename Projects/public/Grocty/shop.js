let brand = document.querySelector('.brand');
let category = document.querySelector('.category');
let plus = document.querySelectorAll('.fa-plus');

category.style.display = "none";
brand.style.display = "none";

let display1 = false;
let display2 = false;

plus[0].addEventListener('click', function () {
    if (display1) {
        brand.style.display = "none";
    }
    else {
        brand.style.display = "block";
    }
    display1 = !display1;
});

plus[1].addEventListener('click', function () {
    if (display2) {
        category.style.display = "none";
    }
    else {
        category.style.display = "block";
    }
    display2 = !display2;
});


