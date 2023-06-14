// This keyword Binding  
//  1. Implicit  
//  2. Explicit
// 3. new keyword
//  4. Default   (by default window object se ho jati hai);
 // explicit binding

 function fun(name,age ){
    this.name=name;
    this.age=age;
    console.log(this); 
 }


 const obj={
    value:10,
    color:"Maroon",
}

//  fun("Radha",19 )

// now we want to bind this keyword with obj object so we use this call 
// fun.call(obj,"Radha",19);

const f=fun.bind(obj);
f('riya',20);