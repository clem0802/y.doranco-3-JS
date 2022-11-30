// ------------------------------------------------------ (1) (object: LOOP-THROUGH)
let navette = {
    crew: {
        captin: {
            name: "Luke",
            degree: "Computer Engineering",
            cheerTeam(){
                console.log("You got this!")
            }
        },
        "chief officer": {
            name: "David",
            degree: "Aerospace Engineering",
            agree(){
                console.log("I agree, captian!")
            }
        },
        medic: {
            name: "Ashley",
            degree: "Physics",
            announce(){
                console.log("Healed!")
            }
        },
        translator: {
            name: "Clémence",
            degree: "Languages-Arts Conservatory",
            powerFuel(){
                console.log("The tank is full!")
            }
        }
    }
}

// -------------------
// '[crew member's role]: [crew member's name]'
// 'chief officer: Dan'

// for (let variableName in outerObject.innerObject) {
//     console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
// };

// -------------------
// FOR ... IN
for (let crewMember in navette.crew){
    console.log(`${crewMember}: ${navette.crew[crewMember].name}`);
}
// captin: Luke
// chief officer: David
// medic: Ashley
// translator: Clémence


// -------------------
// FOR ... IN
for (let crewMember in navette.crew){
    console.log(`${crewMember}: ${navette.crew[crewMember].name}, ${navette.crew[crewMember].degree}`);
}
// captin: Luke, Computer Engineering
// chief officer: David, Aerospace Engineering
// medic: Ashley, Physics
// translator: Clémence, Languages-Arts Conservatory