// Synchronous meaning= javascript will execute the code from top to bottom phle ek ko phir aage wale ko..it's not like beech m jump kar jayega.


// javascript has only one call stack in the browser and it can execute only 1 statement at a time

// -----------------------------DELAY---------------------------------------------

// function delay(n){
//     for(let i=1;i<=n;i++){

    
//     let x = new Date().getTime();
//     while(new Date().getTime()<x+1000){

//     }
// }
//     fun();
// }

// function fun(){
//     console.log("hello from fun");
// }

// console.log("start")
// delay(5);
// console.log("end");

// is delay ke dauraan ap koi bhi kaam kar rhe ho to vo freeze ho ja rha h so we use SetTimeout();

// ---------------------------------------------------------------------------

// setTimeout and setInterval

// console.log("start")
// setTimeout( function cb(){
//     console.log("inside callback function");
    
// }, 5000);

// console.log("end");

const id=setInterval(function(){
    console.log("inside set interval");
},2000)
// it executes inside set interval after every 2s

setTimeout(function(){
    clearInterval(id);
},5000)
// after 5s bd execution ruk jayega set interval ka




