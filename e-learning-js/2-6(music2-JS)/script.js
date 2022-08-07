// CLICK
let listButtons = document.getElementsByTagName("button");

for (let i=0; i<listButtons.length; i++) {
    listButtons[i].addEventListener("click", function(){
        // console.log("clicked")
        let buttonText = this.innerHTML;
        makeSound(buttonText);
    })
}

// KEYPRESS
document.addEventListener("keypress", function(e){
    console.log("key pressed");
    let keyPressed = e.key;
    makeSound(keyPressed);
})

// -----------------------------------------------
function  makeSound(letterClickedOrPressed){
    switch (letterClickedOrPressed) {
        case "c":
            let tom1 = new Audio("sounds/c.mp3");
            tom1.play();
            break;
        
        case "l":
            let tom2 = new Audio("sounds/l.mp3");
            tom2.play();
            break;

        case "e":
            let tom3 = new Audio("sounds/e.mp3");
            tom3.play();
            break;

        case "m":
            let tom4 = new Audio("sounds/m.mp3");
            tom4.play();
            break;

        case "e":
            let tom5 = new Audio("sounds/w.mp3");
            tom5.play();
            break;

        case "n":
            let tom6 = new Audio("sounds/n.mp3");
            tom6.play();
            break;

        case "c":
            let tom7 = new Audio("sounds/k.mp3");
            tom7.play();
            break;

        case "e":
            let tom8 = new Audio("sounds/j.mp3");
            tom8.play();
            break;
    }
    buttonAnimation(letterClickedOrPressed);
}

function buttonAnimation(letterClickedOrPressed){
    let button = document.getElementsByClassName(letterClickedOrPressed)[0];
    button.classList.add("pressed");

    setTimeout(function (){
        button.classList.remove("pressed");
    }, 200);
    // exécuter après 200ms
}