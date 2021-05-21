//var name = window.prompt("Enter your name: ");
//var score = window.prompt("Please enter your name", "Harry Potter");
var grade;
var score = 24;

if (score > 25 && score <= 30) {
    grade = 'A';
}

else if (score > 20 && score <= 25) {
    grade = 'B';
}

else if (score > 15 && score <= 20) {
    grade = 'C';
}

else if (score > 10 && score <= 15) {
    grade = 'D';
}

else if (score > 5 && score <= 10) {
    grade = 'E';
}

else if (score >= 0 && score <= 5) {
    grade = 'F';
}
console.log(grade)