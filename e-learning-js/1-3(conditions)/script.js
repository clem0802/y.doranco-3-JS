console.log("conditions");

// ------------------------------------
let favoriteColor = prompt("What's your favorite color?");
console.log("favoriteColor: " + favoriteColor);

if(favoriteColor == "purple"){
    console.log("my favorite color is purple");
} else{
    console.log("you got it wrong about my favorite color");
}

// ------------------------------------
let comparison = favoriteColor == "purple";
console.log("comparison: " + comparison); // boolean value (true or false)
console.log(typeof favoriteColor); // string
console.log(typeof comparison); // boolean