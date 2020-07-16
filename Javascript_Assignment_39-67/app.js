function power(a, b) {
  return Math.pow(a, b);
}

function leapyear(year) {
  if (year % 4 && (year % 400 || year % 100)) {
    return "Leap year";
  }
  return "Not a Leap year";
}

let year = prompt("Enter year");
leapyear(year);

function areaTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  area = s * (s - a) * (s - b) * (s - c);
  return area;
}

function mainFunction(obtained_marks) {
  let m = 0;
  obtained_marks.forEach((marks) => {
    m += marks;
  });
  let average = average(m);
  let percent = percentage(m);
}

function average() {
  return obtained_marks / 3;
}

function percentage(marks) {
  return (marks * 100) / 300;
}

function indexOf(char, searchLetter) {
  let findElement = null;
  for (var i = 0; i < char.length; i++) {
    if (char[i] === searchLetter) {
      findElement = i;
      break;
    }
  }

  console.log(findElement);
}

function deleteVowels(name) {
  return name.replace(/[aeiou]/g, "");
}

function countVowels(name) {
  let count = 0;
  for (var i = 0; i < name.length - 1; i++) {
    if (
      ["a", "e", "i", "o", "u"].includes(name[i]) &&
      ["a", "e", "i", "o", "u"].includes(name[i + 1])
    ) {
      count = count + 1;
    }
  }

  console.log("Number of occurences", count);
}

function distancecity(a, b) {}
