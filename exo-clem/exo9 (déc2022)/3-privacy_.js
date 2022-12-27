// One common convention is to place an underscore _ 
// before the name of a property to mean that 
// the property should not be altered. 
// Here’s an example of using _ to prepend a property.
// "prepend": to add something to the beginning of
const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
    }
}
robot.recharge(); // Recharged! Energy is currently at 130%.


robot._energyLevel = 'high'; // reassign the _energyLevel property to 'high'.
robot.recharge(); // Recharged! Energy is currently at high30%.