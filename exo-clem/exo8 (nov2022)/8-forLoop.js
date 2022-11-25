// ------------------------------------------(for - LOOP forwards)
// Below is a program that loops from 5 to 10 and logs each number to the console.
for (let counter = 5; counter <= 10; counter++){
    console.log(counter);
}
// 5
// 6
// 7
// 8
// 9
// 10

// ------------------------------------------(for -LOOP backwards)
// Below is a program that loops from 5 to 10 and logs each number to the console.
for (let counter = 6; counter >= 0; counter--){
    console.log(counter);
}
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// ------------------------------------------(for -iterate)
const fruits = ['apple', 'orange', 'waxapple'];
for (let i=0; i<fruits.length; i++){
    console.log('I would love to eat ' + fruits[i]);
}
// I would love to eat apple
// I would love to eat orange
// I would love to eat waxapple


// ------------------------------------------(for- nested loops)
const arr1 = [6, 19, 20];
const arr2 = [19, 81, 2];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      console.log('Both arrays have the number: ' + arr2[j]);
    }
  }
}
// Both arrays have the number: 19


// ------------------------------------------(for - push into 3rd array)
let bobsFollowers = ['John', 'Tom', 'James', 'David'];
let tinasFollowers = ['James', 'Mary', 'David'];
let mutualFollowers = [];

for (let i=0; i<bobsFollowers.length; i++){
  for (let j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      console.log(mutualFollowers.push(bobsFollowers[i] && tinasFollowers[j]));
    }
  }
}
console.log(mutualFollowers); // [ 'James', 'David' ]