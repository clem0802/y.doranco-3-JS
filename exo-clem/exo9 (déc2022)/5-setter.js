const person = {
    _age: 37,
    set age(newAge){
        if (typeof newAge === "number"){
            this._age = newAge;
        } else{
            console.log("You must assign a number to age")
        }
    }
}
person.age = 40;
console.log(person._age); // 40

person.age = "40";
console.log(person._age); 
// You must assign a number to age
// 37

// --------------------------
const robot = {
    _model: "1E78V2",
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === "number"){
            return this._numOfSensors;
        } else{
            return "Sensors are currently down."
        }
    },
    set numOfSensors(num){
        if(typeof num === "number" && num >= 0){
            this._numOfSensors = num;
        } else{
            return `Pass in a number that is greater than or equal to 0`
        }
    }
}

robot.numOfSensors = 100;
console.log(robot.numOfSensors); // 100