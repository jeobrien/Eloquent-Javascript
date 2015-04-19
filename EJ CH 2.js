// Chapter 2 Exercise 1 - Looping a Triangle

var start = "";
for (var i = 1; i < 8; i++) {
  console.log(start += "#");
}

// Chapter 2 Exercise 2 - FizzBuzz

// a) Prints Fizz for numbers divisible by three and Buzz for numbers divisible by 
// five but NOT three
function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      console.log(i+". Fizz");
    }
    else if ((i % 5 === 0) && (i % 3 !== 0)) {
      console.log(i+". Buzz");
    }
  }
}

// b) Prints "FizzBuzz" for numbers that are divisible by both 3 and 5 
// (and still prints "Fizz" or "Buzz" for numbers divisible by only one of those)

function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(i+". FizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log(i+". Fizz");
    }
    else if (i % 5 === 0) {
      console.log(i+". Buzz");
    }
  }
}
console.log(fizzBuzz());

// Chapter 2 Exercise 3 - Chess Board
