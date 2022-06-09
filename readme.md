<!-- Ex. 0
Modernize the JavaScript file found in ~/students/Lab/modern-js.js.  Replace the legacy functions with arrow functions and replace var with either let or const.  There's a function signature that isn't right. Can you find it and fix it?
When you are finished, place this file in your student directory and submit a PR. -->

Ex. 1
Create an arrow function called countNumbers that takes an array and
returns the number of numbers that only contain decimal points.
When you are finished submit a PR.
Usage:

const array = [1, '2', 3, 'test', 1.2];
console.log(countNumbers(array));


Output:

1



Ex. 2
Create an arrow function called minNumber that takes an array of numbers and
returns the lowest number.  The function must use a for loop and must ignore data types that are of type string or boolean.
When you are finished submit a PR.
Usage #1:

const array = [12, 55, "2", 22, 11, true];
console.log(minNumber(array));


Output:

11



Ex. 3
Create an arrow function named: shortestString that returns the shortest string from an array of strings:
When you are finished submit a PR.
Usage:

array = ['this', 'is', 'a', 'test', 'happy'];
console.log(shortestString(array));


Output:

a



Ex. 4
Create an arrow function named: countLetters that counts the number of letters from an array of words:
When you are finished submit a PR.
Usage:

let array = ["this", "is", "a", "test"];
console.log(countLetters(array));


Output:

11



Ex. 5
Create an arrow function named: countIt that counts the number of integer numbers, decimal numbers and strings from an array.  The countIt function returns nothing and writes output to the terminal.
This arrow function calls the following arrow functions:

countIntegerNumbers
countStrings
countDecimalNumbers

When you are finished submit a PR.
Usage:

let array = ["this", "is", 1, 3, 2.1, "a", "test"];
countIt(array));


Output:

Number of Integers: 4
Number of Decimal Numbers: 2
Number of Strings: 4 


Ex. 6
Create an arrow function named: countItems that counts the number of integer numbers, decimal numbers and strings stored in an array.  The countItems function returns the following object:

{
    numIntegers: <number>,
    numDecimals: <number>, 
    numStrings: <number>
}


This arrow function calls the following arrow functions:

countStrings
countIntegerNumbers
countDecimalNumbers

When you are finished submit a PR.
Usage:

let array = ["this", "is", 1, 3, 2.1, "a", "test"];
let result = countItems(array);
console.log("Number of Integers: " + result.numIntegers)
console.log("Number of Decimal Numbers: " + result.numDecimals)
console.log("Number of Strings: " + result.numStrings)


Output:

Number of Integers: 2
Number of Decimal Numbers: 1
Number of Strings: 4 



Ex. 7
Consider the following person JavaScript objects:

let person1 = { name: "Alice", age: 22 }
let person2 = { name: "Bob", age: 21 }
let person3 = { name: "Charlie", age: 23 }


Add these person objects to an array using the push() method and sort the array based on age (ascending).  Write the following to the console using console.table().
Output:

┌─────────┬───────────┬─────┐
│ (index) │   name    │ age │
├─────────┼───────────┼─────┤
│    0    │   'Bob'   │ 21  │
│    1    │  'Alice'  │ 22  │
│    2    │ 'Charlie' │ 23  │
└─────────┴───────────┴─────┘


When you are finished submit a PR.

Ex. 8
Given the following code:

let p1 = createPerson("Alice", 11)
let p2 = createPerson("Bob", 22)
let p3 = createPerson("Charlie", 33)

let personArray = [];
personArray.push(p1)
personArray.push(p2)
personArray.push(p3)

console.log(countOver20(personArray))


Create a function called createPerson that creates the following JavaScript object:

{
  fullName: <string>,
  age: <number>
}


Create a function called countOver20 that returns the number of people that are over 20 years old.
Output:

2



Ex. 9
Given the following JavaScript objects:

let item1 = { quantity: 1, cost: 1.00 }
let item2 = { quantity: 2, cost: 2.00 }
let item3 = { quantity: 3, cost: 3.00 }


Create array of items using the push method and pass this array into a function called: calculateTotal.  This function calculates the total of all the items.
Output:

14



Ex. 10
Given the following code:

let usageData = [
    { userId: 1111, minutes: 10.0 },
    { userId: 2222, minutes: 20.0 },
    { userId: 3333, minutes: 30.0 }
]

let person = { userId: 3333, fullName: "Charlie" }
let result = calcCellBillForPerson(usageData, person)
console.log(result)


Create a function called calcCellBillForPerson that accepts usage data for many people and accepts one person JavaScript object.  This function returns the following JavaScript object:
Output:

{
  userId: 3333,
  fullName: 'Charlie',
  minutes: 30,
  perMinuteCharge: 0.1,
  charges: '$3.00'
}


This function determines the charges for a person based on their minutes at $.10 a minute."# Javascript-Practice" 
