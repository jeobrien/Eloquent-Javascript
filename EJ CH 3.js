// Chapter 3 Exercise 1 - Minimum

function min(num1, num2) {
  if (num1 < num2)
    return num1;
  else
    return num2;
}

// Chapter 3 Exercise 2 - Recursion

function isEven(num) {
  if (num === 0) {
    return true;
  }
  else if (num === 1) {
    return false;
  }
  else {
    return isEven(Math.abs(num-2));
  }
}

// Chapter 3 Exercise 3 - Bean Counting

// a) Function countBs takes a string as its only argument and returns a number
//  that indicates how many uppercase “B” characters are in the string.
function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
      count++;
    }
  }
  return count;
}
// b) Function called countChar that behaves like countBs, except it takes a second
// argument that indicates the character that is to be counted.
function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}
// c) Rewrite countBs to include the new function
function countBs(str) {
  return countChar(str, 'B');
}
