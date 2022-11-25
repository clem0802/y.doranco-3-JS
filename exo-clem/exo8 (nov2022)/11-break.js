// ------------------------------------------(BREAK)
for (let i=0; i<8; i++){
    if (i>4){
        break;
    }
    console.log('banana');
}
console.log('We step out of the loop.');
// banana
// banana
// banana
// banana
// banana
// We step out of the loop.


// ------------------------------------------(BREAK (ex))
let list = ['coin', 'key', 'pen', 'euronote', 'bottle', 'candy', 'map', 'book']
for (let i=0; i<8; i++){
    if (list[i] === 'map'){
        break;
    }
    console.log('not found');
}
console.log('We finally found ' + 'map');
// not found
// not found
// not found
// not found
// not found
// not found
// We finally found map


// ------------------------------------------(BREAK (ex))
const countryArray = ["Japan", "USA", "Taiwan", "France"];
for (let i=0; i<countryArray.length; i++){
    console.log(countryArray[i]);
  if(countryArray[i] === 'Taiwan'){
    break;
  }
}
// Japan
// USA
// Taiwan
