const prompt=require("prompt-sync")();
var name1=prompt("enter the boy name: ");
var name2=prompt("enter the girl name: ");
var n=Math.random();
n=n*100;
n=Math.floor(n);
console.log("Relationship Status: "+ n + "% percentage");