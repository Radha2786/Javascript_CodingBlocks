//------------- 1. map (it's an array method , works on array only)--------------------------
// map function accepts Callback

// let arr =[1,2,3,4,5,6,7,8,9];
//  let arr2=arr.map(function (num,index){
//     console.log(index);
//     return num*num;
// })
// console.log(arr2); 

//------- OR -----------


// function sqrt (num){
//     return Math.sqrt(num);
// }
// let arr2=arr.map(sqrt);
// console.log(arr2);



// ---------2. Filter method----------------------------

// function Iseven (num){
//     return num%2==0;
// }
// const evenNums=arr.filter(Iseven);
// console.log(evenNums);


//------------------- 3. Sort Method (does sorting in lexicographical order)-----------------

// const arr = [1,99,11,12,89,22,34,20,100,8,0];

// arr.sort();
// console.log(arr);
// arr.sort(function (a,b){
//     return a-b;  // to sort in ascending order
// })
// console.log(arr);



const names =['Radha','Dolly','Harshita','Tanishq']
let names2= names.map(function(name){ 
    console.log(name+' Hi');
})
names2;


