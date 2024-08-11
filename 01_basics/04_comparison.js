// console.log(2>1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1) // true
// console.log("02" > 1) // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// in JavaScript, == operator (or equality check) and comparison operators > < >= <= work differently. 
// Comapaeisons convert null to a number, treating it as 0.
// That's why null>=0 is true and null>0 is false.

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// avoid these above comparisons (not preferred/not a good practice/ confusing)

// === (strict check) : compares data as well as their data type...

console.log(2 === 2) // true
console.log("2" === 2) // false