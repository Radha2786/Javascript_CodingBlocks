const fs = require('fs');


fs.readFile(inp1.txt,(err,data)=>{
  if(err) throw err;
  console.log(data.toString());
})

fs.readFile(inp2.txt,(err,data)=>{
  if(err) throw err;
  console.log(data.toString());
})