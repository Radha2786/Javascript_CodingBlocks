// Session 14: Arrow functions

// function square(num){
//     console.log( num*num);
// }

// square(4);



//  functional expression 
// const square= function(num){
//     // console.log(num*num);
//     return num*num;
// }
// console.log(square(5));


// Arrow functions


const add = (a,b)=>{
    return a+b;
}

console.log(add(2,2));

// const squareroot = (num)=>{
//     return Math.sqrt(num);
// }

// if there is single argument the we can also write like this
// implicit return  
// const squareroot = num=> Math.sqrt(num);

// console.log(squareroot(16));


// NOTE: "DON'T USE THIS KEYWORD WITH ARROW FUNCTION IT BEHAVES DIIFFERENT AND BIND THIS KEYWORD WITH WINDOW OBJECT" 
