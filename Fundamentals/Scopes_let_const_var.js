// Let Var and Const scopes in java

//-------------let has block scope-------------------

// let a =20;
// let b=100;

// if(a>5){
//     let b =99;
//     console.log(b);
// }
// console.log(b);

//------------VAR HAS FUNCTIONAL SCOPE--------------

// var a = 20;
// var b = 100;

// if (a > 5) {
//   var b = 99;
//   console.log(b);
// }
// console.log(b);


// functional scope

// var a =99;
// function b() {
//   var a =100;
//   console.log(a);
// }

// b();
// console.log(a);

// if (a > 5) {
//   var b = 99;
//   console.log(b);
// }
// console.log(b);


//------------Dead temporal zone (let)--------------
// whenever we declare a variable using let and const they are in dead temporal zone until they are not initialized with some value hence we can not access it

// --------------------creation using let-----------------------

// console.log(a);
// function b() {
//   console.log("inside b");
// }
// b();
// let a =10;

// op = Cannot access 'a' before initialization


// ---------------creation by var-----------------



// console.log(a);

// function b() {
//   console.log("inside b");
// }
// b();
// var a =10;

// op = undefined
// inside b


// ------------------------functional expression----------------------------------
// a();
// var a = function b() {
//   console.log('inside b')
// }

// error (a is not a function)

// -------------------------------functional expression------------------------------
a();
let a = function b() {
  console.log('inside b')
}