const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());
// The stars over the Empire State Building in New York City
// logCitySkyline() function is able to access both variables without any problems


// ------------------------------------------(I - GLOBAL Scope)
const color = 'blue';
const returnSkyColor = () => {
    return color;
}
console.log(returnSkyColor()); // blue
// -------
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky()); // Night Sky: The Moon, North Star, and The Milky Way

// ------------------------------------------(II - BLOCK Scope)
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves); // Moonlight
}
console.log(logVisibleLightWaves()); // undefined


// ------------------------------------------(III - Scope Pollution)
// ------------------------------------------(BAD practice)
const sate = 'The Moon';
const galax = 'The Milky Way';
let etoiles = 'North Star';
const callYourNightSky = () => {
  etoiles = 'Sirius';
	return 'Night Sky: ' + sate + ', ' + etoiles + ', ' + galax;
};
console.log(callYourNightSky()); // Night Sky: The Moon, Sirius, The Milky Way
console.log(etoiles); // Sirius

// ------------------------------------------(IV - Good Scoping)
// ------------------------------------------(GOOD practice)
const logVisibleLightWaves1 = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if(region === 'The Arctic'){
      let lightWaves = "Northern Lights"
      console.log(lightWaves); // Northern Lights
    }
    console.log(lightWaves); // Moonlight
};
logVisibleLightWaves1();