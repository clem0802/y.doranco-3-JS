const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
      // Energy is currently at 100%.
    }
}
robot.checkEnergy();

// ------------------------
const goat = {
    name: "Gotta",
    color: "beige",
    giveDetails: function(){
        return `${this.name} is a ${this.color} goat.`
    }
}
console.log(goat.giveDetails());
// Gotta is a beige goat.