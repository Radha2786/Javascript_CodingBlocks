let str = "Hello world";
// let str2=str.substring(5)
// console.log(str2);   // ADHA

//        when first argument is higher than 2nd argument than it gets swaped
let str3 = str.substring(7, 2); // (2,7)
console.log(str3); // op = llo w

// negative index is treated as 0

console.log(str.substring(-10, 5)); // op = Hello
console.log(str.substring(-10, -2)); // empty string
// ------------------------------------------
// indexOf method

console.log(str.indexOf("l"));

console.log(str.indexOf("l", 5)); // 5th index ke baad jo l aa rha h uski index dega
console.log(str.indexOf("l", str.indexOf("l") + 1));
// --------------------------------------------
// replace() method  and replaceAll()

console.log(str.replace("l", "x")); // replace first occurance of l

console.log(str.replaceAll("l", "x"));

// ---------------------------
// repeat()
console.log(str.repeat(3));

// ---------------------------->
//  to print warning
console.warn("this is warning");
// to print error
console.error("this is my bgrand new error")
