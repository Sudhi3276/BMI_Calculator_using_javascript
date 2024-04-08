const prompt=require("prompt-sync")();
// Convert input strings to numbers

var num1=parseFloat(prompt("enter the number1 "));
var num2=parseFloat(prompt("enter number2: "));
var res=compare(num1,num2);
console.log(res);
function compare(num1,num2)
{
  if(num1==num2)
  {
    return "The entered number are equal ";
  }
  else if(num1 > num2)
  {
    return "num1 is greater";
  }
  else if(num2> num1){
    return "num2 is greater";
  }
}