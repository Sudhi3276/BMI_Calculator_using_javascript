const prompt = require("prompt-sync")();
var n = prompt("enter the value of n ");
var arr = [];
var ans=fibo(n);
console.log(ans);
function fibo(n) {
  if (n == 1) {
    arr = [0];
  } else if (n == 2) {
    arr = [0, 1];
  } else {
    arr = [0, 1];
    for (var i = 2; i < n; i++) {
      // arr.push->from 3rd index .length-2 i.e, 0th index and length-1 i.e, 1st index.
      arr.push(arr[arr.length-2] + arr[arr.length-1]); //[0,1,1]
    }
  }
  return arr;
}
