// function fizzBuzz(num){
//     if(num%3==0){
//         if(num%5==0){
//             return "fizzbuzz"
//         }else{
//             return "fizz";
//         }
//     }else if(num%5==0){
//         return "buzz";
//     } else{
//         return `${num}`;
//     }

// }
// const num=15;
// for(let i=1;i<=num;i++){
//     console.log(fizzBuzz(i));
// }
// console.log(fizzBuzz(15));

// Modulus operator is very costly (cuz at the machine level microprocessor have to operate loops and all in order to operate modulo operation)



function fizzBuzz(num){
let counter3=0;
let counter5=0;
for(let i=1;i<=num;i++){
    let str="";
    counter3++;
    counter5++;
    if(counter3==3){
        str+="fizz";
        counter3=0;

    }
    if(counter5==5){
        str+="buzz";
        counter5=0;
    }
    if(str==""){
        str+=i;
    }
    console.log(str);
   
}



}
fizzBuzz(15);