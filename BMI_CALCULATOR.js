// calculating the BMI Using the function in the Javascript
const prompt=require("prompt-sync")();
function BMI(weight,height)
{
    var ans=(weight/(height*height));
    return ans;
}
var weight=prompt("enter you weigth : ");
var height=prompt("enter the height in cm ");
var res=BMI(weight,height);
console.log(res);