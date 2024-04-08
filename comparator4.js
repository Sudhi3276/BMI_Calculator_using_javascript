const prompt = require("prompt-sync")();
// gcd of the two numbers using consective integer method..
var num1 = parseFloat(prompt("enter the number1 : "));
var num2 = parseFloat(prompt("enter the number2 : "));
var res = GCD(num1, num2);
console.log(res);
function GCD(num1, num2) {
  var t = Math.min(num1, num2);
  while (t > 0) {
    if (num1 % t == 0 && num2 % t == 0) {
      break;
    }
    
  t--;
  }

  return t;
}
