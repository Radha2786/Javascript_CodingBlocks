function fizzBuzz(num){
    if(num%3==0){
        if(num%5==0){
            return "fizzbuzz"
        }else{
            return "fizz";
        }
    }else if(num%5==0){
        return "buzz";
    } else{
        return `${num}`;
    }

}
const num=15;
for(let i=1;i<=num;i++){
    console.log(fizzBuzz(i));
}
// console.log(fizzBuzz(15));

// Modulus operator is very costly (cuz at the machine level microprocessor have to operate loops and all in order to operate modulo operation)