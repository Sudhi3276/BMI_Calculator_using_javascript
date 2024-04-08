// push and pop operation
const prompt=require("prompt-sync")();
var n=parseFloat(prompt("enter the size of the array: "));
var arr=[];
while(n--)
{
  var ask=prompt("1 for push 0 for pop 3 for display: ");
  if(ask==1)
  {
    itadd=prompt("enter element to add to array: ");
    arr.push(itadd);
  }
  else if(ask==0)
  {
    itdel=prompt("enter element to delete which is present in array: ");
    arr.pop(itdel);
  }
  else if(ask==3)
  {
    console.log(arr);
  }
  else
  {
    console.log("Invalid choice: ");
  }
  
}
