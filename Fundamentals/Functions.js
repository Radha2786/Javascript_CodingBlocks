// ----------Javascript Functions---------------

// function fun() {
//   console.log("heyyyaa");
// }

// fun();
  // STRONGLYY TYPED VS WEEKLY TYPED LANGUAGES

//   Javascript is a weekely typed language : ex- 
//   let a = 10;
//   a="Radha"
//   this can be done (means we can change the datatype)
// whereas C/C++/Java are strongly types
// let a = 10;
//   a="Radha"
// this is not allowed here (means we can not convert the data type)


// STATICALLY VS DYNAMICALLY TYPED LANGUAGES
// JS IS dynamically typed language that is during compile Time we don't know the datatype of variable


// Anonymous function as function expression
// let x =50;
// const f = function () {
//   console.log("Inside fun");
// };
// console.log(x);
// f();


// Hoisting in Javascript 
// console.log(a);

// function b() {
//   c();
//    var d = 9999;

//    function c (){
//     console.log(d)
//    }
// }

// b();
// var a = 100;

// o/p = undefined 
        //  undefined


// ----------------------------------SCOPES-----------------
// scope is directly related to lexical environment
// lexical environment = local memory + lexical environment of its parent



// ----------------Higher order function-----------
// a function which accepts another function as an argument or return another function is higher order function

// function fun(a,func){
//   console.log(a)
//   console.log("inside fun function")
//   func();
// }

// function Innerfun(){
//   console.log("inside inner fun");
// }

// fun(9,Innerfun)
// or we can do 
// fun(9, function (){
//   console.log("inside inner fun");
// })


function fun() {
  console.log('inside fun');

  function innerfun() {
    console.log("inside innerfun");
  }
  return innerfun ;
}
const f =fun();
// console.log(f);
f();


