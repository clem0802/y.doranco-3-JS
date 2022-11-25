// ------------------------------------------(while - LOOP)
// FOR loop 
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne); // 1 2 3
  }
   
// WHILE loop 
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo); // 1 2 3
    counterTwo++;
}

// ------------------------------------------(while - LOOP)
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];
while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() *4)];
  console.log(currentCard); // réponse très aléatoire, car "random"
}