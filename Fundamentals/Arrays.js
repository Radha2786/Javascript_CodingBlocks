// Arrays : Ordered collection of values
//  it is a data structure

// const values =[1,2,3,4,5];
// console.log(values[0]);
// console.log(values[3]);
// console.log(values.length);

// in javascript arrays are heterogeneous (it can contain all data types)

// const arr = [
//   "Radha",
//   "Harshita",
//   1,
//   2,
//   8.9,
//   ["fruits", "vegetables"],
//   ["red", "yellow"],
//   "Anshu",
// ];


// console.log(arr);


// ----------------------------------->
// Destructive method (changes are done in original array)
//---Basic Methods (push ,pop,shift and unshift);
// arr.push("Dolly", "Rahul", "Yash");
// console.log(arr);
// console.log(arr.pop());       // to remove from the end
// op=Yash
// console.log(arr);

// shift = to remove from the start
// unshift = to add items in the start

// ARRAYS ARE REFERENCE TYPE IN JAVASCRIPT
// FOR EXAMPLE:
// const arrCopy = arr;
// arrCopy.push(100, 99, 98);
// console.log(arrCopy);

// console.log(arr); // both the arrays will have the same content as arrCopy will going to have the same reference as arr 
// console.log(arr==arrCopy);




// ----------------------------------OTHER ARRAY METHODS--------------------------
//1. SLICE (Non destructive)=====================

// const colors=['blue','green','white','yellow','red','purple'];
// console.log(colors.slice(1,4));

 
// 2. SPLICE (Desctructive : changes the original array)===============

// console.log(colors.splice(1,2,'Radha','Neha','Yash','Tushar'));    
  // it accepts index , no. of arguments to be deleted from that index and arguments that r gonna be inserted
// console.log(colors);


// ---------------------------FUNCTION CHAINING EXAMPLE--------------
const url ='https://youtube.com/coding-block/myvideo.mp4';
// console.log(url.split('/')) 
// to split the array with forward slash

//--- what if we want to get the file name that is (myvideo.mp4)
// console.log(url.split('/').pop());    // op = myvideo.mp4

// accessing element through indexes---

// const arr =[1,2,3,['true','false',['Kartik','Mathur'],99,20],999];
// console.log(arr[3][2][0]);      // we will get Kartik

// 3.JOIN METHOD================
const arr=[1,2,3,4,5];
const arr2 = ['Radhaa','Tanishq','Shubh']
// console.log(arr.join('->'));
// op=1->2->3->4->5

// 4. CONCAT METHOD (to concat 2 or more arrays)
const ans =arr.concat(arr2);
console.log(ans)

// 5 INCLUDES===========
//  6 INDEX OF===========
// 7 REVERSE()=========== 
