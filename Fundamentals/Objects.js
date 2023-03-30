// JS OBJECTS  (objects are also reference type)

// ---> Collection of properties(key-value pairs)
// ---> it is a data structure
// --->Unsorted

// const obj = {
//     firstName:'Radha',
//     secondName: 'Sharma',
//     age:19,
//     isAdult: true
// }

// console.log(obj);
// console.log(obj.firstName);
// console.log(obj['first'+'Name']);
// console.log(obj["firstName"]);
// we are giving in the form of string cuz behind the scene the keys gets converted into string

// console.log(""==0) ;  // empty string get typecaste to 0
// op = true

// console.log(""===0);
// op = false;

// similarly empty array gets typecaste to string and string gets typecaste to 0
// console.log([]=="");  // true
// console.log([]==0); // true

// const f = function fun() {
//   console.log("Inside fun");
// };
// console.log(f);
// f();

// Anonymous function as function expression
let x =50;
const f = function () {
  console.log("Inside fun");
};
console.log(x);
f();
