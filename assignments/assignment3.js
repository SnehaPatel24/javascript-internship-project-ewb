
let score = Number(prompt("Enter your test score:"));

let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score >= 0 && score < 60) {
    grade = "F";
} else {
    grade = "Invalid";
}

let gradeMessage;

switch (grade) {
    case "A":
        gradeMessage = "A";
        break;
    case "B":
        gradeMessage = "B";
        break;
    case "C":
        gradeMessage = "C";
        break;
    case "D":
        gradeMessage = "D";
        break;
    case "F":
        gradeMessage = "F";
        break;
    default:
        gradeMessage = "Invalid score";
}

let status = score >= 60 && score <= 100
    ? "Passed"
    : "Failed";

console.log("Score:", score);
console.log("Grade:", gradeMessage);
console.log("Status:", status);
