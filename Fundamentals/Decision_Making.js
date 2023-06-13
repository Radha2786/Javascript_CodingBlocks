console.log(1 == "1"); // here implicit typecasting is being done hence string 6 is converted to 6
// op = true

// --->Strict equality operator
console.log(1 === "1");
// op = false

let age = parseInt(prompt("enter age"));
if (age < 18) {
  //   console.log("can not enter as well as can not drink ");
  alert("can not enter as well as can not drink");
} else if (age >= 18 && age <= 25) {
  alert("can enter but can not drink");
} else {
  alert("can do both");
}
