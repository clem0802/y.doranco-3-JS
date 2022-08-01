console.log("Objects");

let myPbject1 = {};
let myPbject2 = new Object();

// on a créé un objet, et on lui a ajouté des propriétés
// var car = {};
// car.brand = "Toyota";
// car.model = "Auris";
// car.year = "2013";
// car.color = "silver";
// car.ethanol = true;
// car.doors = 4;
// car.options = ["ABS", "ESP", "AC", "GPS"]; // an array
// car.features = { // an object inside the "car" object
//     power: "75",
//     plateNumber: "AA-230-TR"
// };

// -------------------------------
// pour SIMPLIFIER l'objet
var car = {

    brand : "Toyota",
    model : "Auris",
    year : "2013",
    color : "silver",
    ethanol : true,
    doors : 4,
    options : ["ABS", "ESP", "AC", "GPS"], // an array
    features : { // an object inside the "car" object
        power: "75",
        plateNumber: "AA-230-TR"
    },

    drive: function(){
        console.log("vroom vroom");
    },
    fueil: function(){
        console.log("glou glou");
    }
};

console.log(car.model); // Auris
car.drive(); // vroom vroom

// -------------------------------
var samih = {
    firstName: "Samih",
    familyName: "Habbani",
    age: 29,
    sex: "m",
    hobbies: ["motorcycle", "crossfit", "boxing", "web development"],
    weight: 76,
    foods: [
        ["pokebowl", "sushi", "tacos"], 
        [0.5, 0.4, 1]
    ],
    talk: function(){
        console.log("Hi, my name is Samih Habbani, and I am 29"); 
        console.log("Hi, my name is " + this.firstName + " " + this.familyName +  ", and I am " + this.age); 
    },
    eat: function(food){
        var indexOfFooD = this.foods[0].indexOf(food);
        if(indexOfFooD >= 0){
            this.gainWeight(this.foods[1][indexOfFooD]);
        }
    },
    gainWeight: function(kilos){
        this.weight += kilos;
    },
    getOlder: function(){
        this.age += 1;
    }
}
// CALL for METHODS
samih.talk(); // Hi, my name is Samih Habbani, and I am 29
console.log("age: " + samih.age); // age: 29
samih.getOlder();
console.log("age: " + samih.age); // age: 30

console.log("weight: " + samih.weight); // weight: 76
samih.eat(samih.foods[0][0]); // I eat a pokebowl
console.log("weight: " + samih.weight); // weight: 76.5
