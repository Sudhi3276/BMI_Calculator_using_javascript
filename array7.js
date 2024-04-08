const prompt=require("prompt-sync")();
function whopays(names)
{
  var nameslen=names.length;
  var randnum=Math.floor(Math.random()*nameslen);
  personbills=names[randnum];
  return personbills + " will pay the bill..!"
}
var n=prompt("enter the number of people attened party ");
var names=[];
while(n--)
{
  var name=prompt("enter the names of  person ");
  names.push(name);
}
var ans=whopays(names);
console.log(ans);