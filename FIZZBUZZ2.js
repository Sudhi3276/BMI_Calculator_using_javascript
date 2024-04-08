// using the for loop
var arr = [];

function gennum() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FIZZBUZZ");
    } else if (i % 3 == 0) {
      arr.push("FIZZ");
    } else if (i % 5 == 0) {
      arr.push("BUZZ");
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
}

// Call the function to generate the array
gennum();
