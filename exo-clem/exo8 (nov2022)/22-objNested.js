// ------------------------------------------------------ (object: NESTED)
// ---------------------------
let spaceship1 = {
    telescope: {
       yearBuilt: 2018,
       model: '91031-XLT',
       focalLength: 2032 
    },
   crew: {
       captain: { 
           name: 'Sandra', 
           degree: 'Computer Engineering', 
           encourageTeam() { console.log('We got this!') } 
        }
   },
   engine: {
       model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
           terabytes: 100,
           monitors: 'HD'
        },
       'back-up': {
          battery: 'Lithium',
          terabytes: 50
        }
   }
}; 

// ---------------------------
let spaceship2 = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
}; 
let capFave = spaceship2.crew.captain['favorite foods'][0];

// reassign "passengers" property, at lease one key-value PAIR
spaceship2.passengers = [{ 
    name: "spaceCat", // PAIR-1
    species: 'spaceGender' // PAIR-2
}]

// assign the first passenger as the new variable's value
// the element in the 0th index of the spaceship.passengers array you just made 
let firstPassenger = spaceship2.passengers[0];
console.log(firstPassenger); // { name: 'spaceCat', species: 'spaceGender' }