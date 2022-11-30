// -----------------------------------------------------------
// There are only seven fundamental data types in JavaScript, 
// and six of those are the primitive data types: 
// string, number, boolean, null, undefined, and symbol.
// when a property name has a space, it will need quotation marks
// two ways to access the properties;

// (1) DOT OPERATOR
// -----------------------------------------------------------
let spaceship1 = {
  homePlanet: 'Earth',
  color: 'silver'
};
console.log(spaceship1.homePlanet); // Earth
console.log(spaceship1.color); // silver

// ----------------------
let spaceship2 = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
let crewCount = spaceship2.numCrew;
let planetArray = spaceship2.flightPath;
console.log(crewCount); // 5
console.log(spaceship2.flightPath); // [ 'Venus', 'Mars', 'Saturn' ]


// (2) SQUARE BRACKETS NOTATION
// -----------------------------------------------------------
spaceship2['Active Duty']; // true
spaceship2['Fuel Type']; // 'Turbo Fuel'
spaceship2['numCrew']; // 5
spaceship2['!!!!!!!!!!!!!!!']; // undefined

// ----------------------
let returnAnyPro = (objectName, propName) => 
objectName[propName];
returnAnyPro(spaceship2, 'homePlanet');
console.log(returnAnyPro(spaceship2, 'homePlanet')); // Earth
console.log(spaceship2['color']); // silver


// (3) ADD or DELETE
// -----------------------------------------------------------
let spaceship3 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};

//  obj    property  assignmt   value 
spaceship3['Fuel Type'] = 'vegetable oil';
spaceship3.color = 'gold';
spaceship3.type = 'alien'; //change the value of the type property
spaceship3.speed = 'Mach 5'; // ADD a new property 'speed' with a value of 'Mach 5'
console.log(spaceship3);
// {
//     'Fuel Type': 'vegetable oil',
//     homePlanet: 'Earth',
//     color: 'gold',
//     'Secret Mission': 'Discover life outside of Earth.',
//     type: 'alien',
//     speed: 'Mach 5'
// }
// ----------------------
delete objectName['Property Name'];
delete objectName.propName;