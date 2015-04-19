// Chapter 5 Exercise 1 - Flattening
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(sub1, sub2) {
  return sub1.concat(sub2);
}));
// → [1, 2, 3, 4, 5, 6]


// Chapter 5 Exercise 2 - Mother/Child Age Difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var hasKnownMother = ancestry.filter(function (person) {
  return byName[person.mother] != null;
});
var ageDiffs = hasKnownMother.map(function (person) {
  return person.born - byName[person.mother].born;
});
console.log(average(ageDiffs));
// → 31.2


// Chapter 5 Exercise 3 - Historical Life Expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var byCent = {};
ancestry.forEach (function (person) {
  var century = Math.ceil(person.died/100);
  if (!(century in byCent)) {
    byCent[century] = [];
  }
  byCent[century].push(person.died-person.born);
});
for (century in byCent) {
  console.log(century+": "+average(byCent[century]));
}
// 16: 43.5
// 17: 51.2
// 18: 52.78947368421053
// 19: 54.833333333333336
// 20: 84.66666666666667
// 21: 94

// Chapter 5 Exercise 4 - Every and then Some
function every(array, predicate) {
  var result = true;
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      result = false;
  }
  return result;
}
function some(array, predicate) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      result = true;
  }
  return result;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false