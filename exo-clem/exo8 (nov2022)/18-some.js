// ----------------------------------------------------------- words.some()
// return a BOOLEAN value
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word)=>{
    return word.length < 6;
})) 
// true

const interestingWords = words.filter(word => {
    return word.length > 5;
})
console.log(interestingWords); 
// [ 'unique', 'uncanny', 'oxymoron' ]
console.log(interestingWords.every((word) => {
    return word.length > 5;
} )); 
// true