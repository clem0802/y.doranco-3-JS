const robot = {
    model: "SAL-1000",
    mobile: true,
    sentient: false,
    armor: "Steel-plated",
    energyLevel: 75
}

// (1) What is missing in the following method call?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const robotKeys = Object.keys(robot);
console.log(robotKeys);
// [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// (2) Declare robotEntries below this line:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const robotEntries = Object.entries(robot);
console.log(robotEntries); // output as following:
[
    [ 'model', 'SAL-1000' ],
    [ 'mobile', true ],
    [ 'sentient', false ],
    [ 'armor', 'Steel-plated' ],
    [ 'energyLevel', 75 ]
]

// (3) Declare newRobot below this line:
// Now we want another new object that has the properties of robot 
// but with a few additional properties
// Object.assign() sounds like a great method to use !!

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const newRobot = Object.assign(target, source);
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot); 
// {
//     laserBlaster: true,
//     voiceRecognition: true,
//     model: 'SAL-1000',
//     mobile: true,
//     sentient: false,
//     armor: 'Steel-plated',
//     energyLevel: 75
// }


