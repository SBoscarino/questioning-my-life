// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
var result = max(5,3);
console.log(result);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxof3(num1, num2, num3){
  if (num1 > num2 && num2 < num3){
    return num1;
  } else if (num2 > num1 && num1 > num3){
    return num2;
  } else {
    return num3;
  }
}

var result = maxof3(7,3,2);
console.log(result);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a') {
    return true;
  } else if (char === 'e') {
    return true;
  } else if (char === 'i') {
    return true;
  }  else if (char === 'o') {
    return true;
  }  else if (char === 'u') {
    return true;
  }  else {
    return false;
  }
}

var result = isVowel('a');
console.log(result);


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(par1, par2) {
  return par1 + par2;
}

var result = sum(3, 3);
console.log(result);


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(thing1, thing2, thing3) {
  return (thing1 + thing2 + thing3) / 3;
}

var result = avg(100, 96, 98);
console.log(result);

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
var anItem = "cat";

function getLength() {
  return anItem.length;
}
var result = getLength("cat");
console.log(getLength);


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(par1, par2) {
  if (par1 < par2) {
    return "true";
  } else {
    return "false";
  }
}

var result = greaterThan(3,5);
console.log(result);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name) {
  return ("Hello, " + name + ", you loser!")
}

var result = greet("Joey");
console.log(result);

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(noun, noun2, verb, adjective) {
  return ("The " + noun + " and the " + noun2 + " " + verb + " around the " + adjective + " house.");
}

var result = madlib("cat", "dog", "jump", "red");
console.log(result);
