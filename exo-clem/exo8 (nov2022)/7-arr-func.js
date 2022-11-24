// ------------------------------------------(arr)
const villes = ['noisy', 'paris', 'vincennes', 'châtelet'];
function changeArr(arr){
  arr[3] = 'CHÂTELET';
}
changeArr(villes);
console.log(villes); // [ 'noisy', 'paris', 'vincennes', 'CHÂTELET' ]

// ------------------------------------------(newArr)
function removeVilles(newArr){
    newArr.pop()
}
removeVilles(villes);
console.log(villes); // [ 'noisy', 'paris', 'vincennes' ]

// ------------------------------------------(nested arrays)
let numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];
console.log(target); // 6