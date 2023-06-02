const fs = require("fs");

var path = require('path');

// const data = "hello from file system folder";

const data = "hello from newly created xyz file";

// const F2 = path.join(__dirname, 'files','wxyz.txt');

const f1 = path.join(__dirname,'files','xyz.txt');


fs.writeFile(
  f1,
  data,
  {
    encoding: "utf-8",
    flag: "w",
  },
  (err) => {
    if (err) throw err;
    console.log("file has been created successfully");
  }
);

// fs.readFile(F2,(err,data)=>{
//   if(err) throw err;
//   console.log(data.toString());
// })

// -----------------------------------------------------------------------------------------------------------------------

// console.log(__dirname);     // this  will print directory path where the file(in this case : index.js is present); 
// it will always be constant
// op =C:\Users\Rajesh Sharma\Javascript_CodingBlocks\NodeJSintro\FileSystem


// console.log(process.cwd());   // this will give current working directory
// op=C:\Users\Rajesh Sharma\Javascript_CodingBlocks\NodeJSintro



