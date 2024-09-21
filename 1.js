"use strict";
function getGrade(percentage) {
    if (percentage >= 90) {
        return 'A+';
    }
    else if (percentage >= 80) {
        return 'A';
    }
    else if (percentage >= 70) {
        return 'B+';
    }
    else if (percentage >= 60) {
        return 'B';
    }
    else {
        return 'Below B';
    }
}
//for output
const percentage = 85;
const grade = getGrade(percentage);
console.log(`Marks%: ${percentage}, Grade: ${grade}`);
