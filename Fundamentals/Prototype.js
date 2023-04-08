// Prototype---> Mechanism through which we can implement inheritance in js

/* [__proto__] = Dunder Proto
conatins the reference of the parent object
*/

const person = {
    name: 'Radha',
    age : 18,
    isFemale: true
};
const p1 = Object.create(person);  // p1 will get the blueprint of person
const p2 = Object.create(p1);
console.log(p1);
console.log(p1.name);
console.log(p2);
console.log(p2.age);
console.log(p1.__proto__=== person);  // true
console.log(p2.__proto__=== p1); 
console.log(p1.hasOwnProperty('name')) // false
