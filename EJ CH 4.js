// Chapter 4 Exercise 1 - The Sum of a Range

function range(start, end, step) {
  var arr = [];
  if (arguments.length<3) {
    if (start > end) {
      for (var i = start; i >= end; i--) {
        arr.push(i);
      }
    }
    else {
      for (var i = start; i <= end; i++) {
        arr.push(i);
      }
    }
  }
  else {
    if (start > end) {
      for (var i = start; i >= end; i += step) {
        arr.push(i);
      }
    }
    else {
      for (var i = start; i <= end; i++) {
        arr.push(i);
      }
    }
  }
  return arr;
}
function sum (arr) {
  var sum = 0;
  arr.forEach(function (element) { sum += element;});
  return sum;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// Chapter 4 Exercise 2 - Reversing an Array

function reverseArray(arr) {
  var reversed = [];
  for (var i = arr.length-1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
function reverseArrayInPlace(arr) {
  var temp = [];
  for (var i = arr.length-1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  for (var i = 0; i < arr.length; i ++) {
    arr[i] = temp[i];
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// Chapter 4 Exercise 3 - A List

function arrayToList(arr) {
  var list = {value: arr[arr.length-1], rest: null};
  for (var i = arr.length-2; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(element, list) {
  var newList = {value: element, rest: list};
  return newList;
}
function nth (list, number) {
  if (number == 0) {
    return list.value;
  }
  else {
    return nth(list.rest, number-1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Chapter 4 Exercise 4 - Deep Comparison

function deepEqual(x, y) {
  if ((typeof x=="object" && x!=null) && (typeof y=="object" && y!=null)) {
    if (Object.keys(x).length != Object.keys(y).length) {
      return false;
    }
    else {
      for (var key in x) {
        if (!y.hasOwnProperty(key)) {
          return false;
        }
        else {
          if (!deepEqual(x[key], y[key])) {
            return false;
          }
        }
      }
    }
    return true;
  }
  else if (x !== y) {
    return false;
  }
  else {
    return true;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true