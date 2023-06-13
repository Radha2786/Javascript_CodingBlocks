// instead of creating functions we create class which is a newer javascript concept.
//  benefit : we don't need to separately create function in its prototype, js automatically handles it.

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     sayhello(name){
//         return  this.name
//     }
// }

// const p1 = new Person("Tanishq",19);
// console.log(p1.age);
// console.log(p1.sayhello())

// ----------------------------------------------------------

// Getter and Setter methods -- getter and setter methods behave as properties  

class Car {
    constructor(name,price){
        this.name=name;
        this.price = price;
    }

    Carname(name){
        return this.name;
    }

    set setname(newname){
        this.name= newname;
    }

    get getPrice(){
        return this.price;
    }
}

const c1 = new Car("BMW",2000000);
console.log(c1)

class RacingCar extends Car{
    constructor(name,price,maxspeed,color){
        super(name,price);   // calling the parent class constructor 
        this.maxspeed=maxspeed;
        this.color=color;
    }

   

    set Setcolor(newcolor){
        this.color=this.color;
    }
    get Getcolor(){
        return this.color;
    }
}

let obj = new RacingCar("Audi",3000000,180,"black");
