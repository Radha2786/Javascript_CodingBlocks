console.log("hey there");
let firstName = "Radha";
let LastName = "Sharma";
let fullName = `${LastName},${firstName}`;
console.log(fullName);

// MATH FUNCTIONS

console.log(Math.abs(100)); // 100
console.log(Math.abs(-100)); // 100
// Math.abs is a one way function
// (we can not predict the output by just watching the input)

console.log(Math.round(3.4445)); // op=3
console.log(Math.ceil(5.0)); // op =5
console.log(Math.floor(5.0)); // op =5
console.log(Math.floor(6.3)); // op=6
console.log(Math.ceil(6.3)); // op=7

// we have to generate numbers between 22 to 25

// console.log(Math.floor(Math.random()*4)+22);

// 4---> kitne numbers generate karne hai then add 22
// for ex: 0---> 0+22=22
// 1---> 1+22=23
// 2--->2+22=24
// 3--->3+22 =25
// ----------------------------------->
// generating random number between 87 to 90
console.log(Math.floor(Math.random()*4)+87);

