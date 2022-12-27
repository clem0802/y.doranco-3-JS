// Objects are collections of related data and functionality. 
// We store that functionality in methods on our objects:

const goat = {
    dietType: "herbivore",
    makeSound(){
        console.log("baaa");
    },
    diet(){
        console.log(this.dietType);
    }
}
goat.makeSound(); // baaa
goat.diet(); // herbivore

// --------------------------------
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo())
// I am 1E78V2 and my current energy level is 100.