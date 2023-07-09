// console.log("hello from NodeJS");

// PROCESS IS an object which conatines all the current ongoing processes and argv conatins 2 paths 1st one is where node is installed at the top level and 2nd  

// const arr1 = process.argv;
// console.log(arr1);

// A kind of way for giving input
// const arr = process.argv.slice(2);    // first two index in process.argv provides path
// console.log(arr);
// console.log(process.cwd());  

const person ={
    firstName:'Radha',
    lastName:'Sharma',
    age:22,
    Shoutfullname:function(){
        console.log(`hello from ${this.firstName} ${this.lastName}`);
    }
}

let Shouthalfname = function(){
    console.log('hi from half name');
}

// console.log(person.firstName);
// console.log(person.Shoutfullname());
console.log(Shouthalfname())