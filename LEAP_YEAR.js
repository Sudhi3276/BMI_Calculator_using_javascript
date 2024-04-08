const prompt = require("prompt-sync")();

function yearCheck(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "It is a leap year";
    } else {
        return "Not a leap year";
    }
}

var year = parseFloat(prompt("Enter the year: "));
var ans = yearCheck(year);
console.log(ans);
