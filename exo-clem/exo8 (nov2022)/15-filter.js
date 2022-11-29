// ------------------------------------------(iterate) - (FILTER-1)
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
const shortWords1 = words.filter(word => {
    return word.length < 5;
})
console.log(shortWords1); // [ 'pen', 'door' ]

for (let i=0; i<words.length; i++){
    if(words[i].length < 5){
        console.log(words[i]); // pen door
    }
}

console.log(words); // ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords1); // ['pen', 'door']


// ------------------------------------------(iterate) - (FILTER-2)
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const shortNumbers = randomNumbers.filter(number => {
    return number < 250;
})
console.log(shortNumbers); // [ 200, 3.14, 7, 13 ]


// ------------------------------------------(iterate) - (FILTER-3)
const vocabs = ['joy', 'love', 'calmness', 'quietness', 'softness'];
const moreThanSevenCharacters = vocabs.filter(word => {
    return word.length > 7;
})
console.log(moreThanSevenCharacters); // [ 'calmness', 'quietness', 'softness' ]