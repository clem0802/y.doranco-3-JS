// ------------------------------------------------------ (1) (object: Pass-By-Reference)
const spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
};

// -------------------
let paintIt = obj => {
    obj.color = 'glorious gold'
};
paintIt(spaceship);
console.log(spaceship.color); // glorious gold

// -------------------
let tryReassign = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj)
}


// ------------------------------------------------------ (2) (object: Pass-By-Reference)
let spaceShuttle = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

// -------------------("modifier")
// Write a FUNCTION greenEnergy() 
// that has an object as a parameter 
// and sets that object’s 'Fuel Type' property to 'avocado oil'.
let greenEnergy = objParam => {
    objParam['Fuel Type'] = 'avocado oil'
}
greenEnergy(spaceShuttle);
console.log(spaceShuttle['Fuel Type']); // avocado oil

// -------------------("ajouter")
// Write a FUNCTION remotelyDisable() 
// that has an object as a parameter 
// and sets (or reassigns) that object’s disabled property to true
let remotelyDisable = obj => {
    obj.disabled = true
}
remotelyDisable(spaceShuttle);
console.log(spaceShuttle); 
// { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }