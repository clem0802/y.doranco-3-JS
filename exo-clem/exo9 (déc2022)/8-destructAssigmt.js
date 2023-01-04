// if we want to extract only "residence" property
const spirit = {
    name: "Geist",
    residence: "Heaven",
    preferences: {
        day: "inspire humans",
        night: "intercede for humans"
    }
}

// 1st way of extraction:
const mansion = spirit.residence;
console.log(mansion); // Heaven

// 2nd way of extraction:
const { residence } = spirit;
console.log(residence); // Heaven

// 3rd example:
const { name } = spirit;
console.log(name); // Geist
const { day } = spirit.preferences;
console.log(day); // inspire humans
// -------------------------------------

const robot = {
    model: "IE78V2",
    energyLevel: 100,
    functionality: {
        beep(){
            console.log("Beep Boop");
        },
        fireLaser(){
            console.log("Pew Pew");
        }
    }
}
const { functionality } = robot;

// call the beep() method on functionality
functionality.beep(); // Beep Boop
console.log(functionality);