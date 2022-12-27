// "Getters" are methods that get and return 
// the internal properties of an object. 
// But they can do more than just retrieve the value of a property!
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName(){
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else{
            return "Missing a first name or a last name."
        }
    }
}
// to call the getter method
console.log(person.fullName); // John Doe

// ---------------------------------
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
        if(typeof this._energyLevel === "number"){
            return `My current energy level is ${this._energyLevel}`
        }
    }
}
console.log(robot.energyLevel); // My current energy level is 100