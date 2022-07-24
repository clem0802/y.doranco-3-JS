console.log("Multidimentional Arrays"); // 3:35

// France 66.99
// Morocco 36.03
// Spain 46.94
// Panama 4.177

let multiArray = [
    ["France", "Morocco", "Spain", "Panama"], 
    [66.99, 36.03, 46.94, 4.177], 
    ["Europe", "Africa", "Europe", "America"]
];
console.log(multiArray); // (3) [Array(4), Array(4), Array(4)]
console.log(multiArray[0][1]); // récupérer 1er array, index1 => Morocco
console.log(multiArray[1][1]); // 36.03

function addLiUL(country, population){

    // ul selection
    var list = document.querySelector("ul");

    // li creation
    var li = document.createElement("li");

    // add some text to li
    li.appendChild(document.createTextNode(country + ": " + population));

    // add boostrap class
    // li.classList.add("list-group-item");

    // append li to ul
    list.appendChild(li);
}
// addLiUL("France", 66.99);
// addLiUL("Utopia", 10.02);
// addLiUL("Morroco", 36.03);

addLiUL("Utopia", 10.02);
// Utopia", 10.02

for(var i=0; i<multiArray[0].length; i++){
    console.log(i);
    // 0
    // 1
    // 2
    // 3
    addLiUL(multiArray[0][i], multiArray[1][i]);
}
// France 66.99
// Morocco 36.03
// Spain 46.94
// Panama 4.177