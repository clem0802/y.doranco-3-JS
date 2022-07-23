console.log("Logical Operators"); //  

// -------------------------------------------------  && ||
let favoriteColor = prompt("What is your favorite color?");
let age = prompt("How old are you?");

if(favoriteColor === "pink" && age == 29){
    console.log("This is the right person!")
} else{
    console.log("This person is not right, keep searching.")
}


if(favoriteColor === "pink" || age == 29){
    console.log("This person is Ok")
} else{
    console.log("We really have to find a better person")
}

// ------------------------------------------------- (SWITCH)
let favoriteColor1 = prompt("What is your favorite color?");

switch(favoriteColor1){
    case "pink": 
        console.log("Your favorite color is pink");
        break;
    case "yellow": 
        console.log("Your favorite color is yellow");
        break;
    case "blue":
        console.log("Your favorite color is blue");
        break;
    case "green":
        console.log("Your favorite color is green");
        break;
    case "red":
        console.log("Your favorite color is red");
        break;
    case "orange":
        console.log("Your favorite color is orange");
        break;
    case "brown":
        console.log("Your favorite color is brown");
        break;
    case "gray":
        console.log("Your favorite color is gray");
        break;
    default: // default permet de sortir du SWITCH
        console.log("We don't know about your favorite color");
}