// using the while loop
var count=1;
var arr=[];
function gennum()
{
  while(count<=100)
  {
    if(count%3==0 && count%5==0)
    {
      arr.push("FIZZBUZZ");
    }
    else if(count%3==0)
    {
      arr.push("FIZZ");
    }
    else if(count%5==0)
    {
      arr.push("BUZZ");
    }
    else
    {
      arr.push(count)
    }
    count++;
  }
console.log(arr);
}
gennum();