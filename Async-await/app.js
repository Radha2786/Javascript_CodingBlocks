// async keyword wraps the function into a promise

/*

async function add(a,b,c){
    console.log(a+b+c);
}

add(1,2,3).then((data)=>{
console.log(data);
}).catch((err)=>{
    console.log(err);
})
*/

async function fun(){
    
    console.log('starting the fun function');

    console.log('starting to fetch the data');

    const res = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY');
    console.log('starting to parse the res');
    const data=await res.json();
    console.log(data);
    
    console.log('fun function completed');
    console.log('everything done');
}

console.log('start');

fun();

console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');


console.log('END');