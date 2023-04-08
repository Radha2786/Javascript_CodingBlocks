// Constructor function = constructor function is a special type of function

function Person(name, age) {
  this.name = name;
  this.age = age;

//   this.sayhello = function() {
//     console.log(`Hello from ${this.name}`);
//   }
}
Person.prototype.sayhello=function(){
    console.log(`Hello from ${this.name}`); 
}

const p1 = new Person("Radha", 19);
// console.log(p1);
const ob2 = new Person("Harshita", 20);
// console.log(ob2.age);
// console.log(ob2);
console.log(ob2.sayhello())

// agar hum new keyword nhi use karenge to window object m name =radha and age = 19 ho jayegi(window object m binding ho jayegi) but after using new keyword this.name=p1.name
