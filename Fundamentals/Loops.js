//---------------jS LOOPS-------------------------
//  while() 
//  do while()
//  for
//  for-of
//  for-in

// 1.for loop

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// 2. while loop

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// Break and Continue Statements in loops

// for(let i=0;i<10 ; i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

// for(let i=0;i<=5;i++){
//     for(let j=0;j<=5;j++){
//         if(i==j){
//             break;
//         }
//         console.log(i,j);
//     }
// }

// --------------------------For of loop (it operates on iterable object such as arrays and strings)-------------------------------
// let colors =['red','green','blue'];
// for(let color of colors){
//     console.log(color);
// }


// --------------------For in loop (to iterate over objects)---------------

let obj ={
    subject: 'DSA',
    name:'Radha',
    marks: 25
}

for(let i in obj){
    console.log(i);
}

for(let i in obj){
    console.log(`${i} ----> ${obj[i]}`);
}