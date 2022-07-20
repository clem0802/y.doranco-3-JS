// Lorsque je passe mon curseur SUR le rectangle, il obtient une background color et on augmente sa largeur
// Lorsque mon curseur QUITTE le rectangle, il redeviens blanc et reprend sa largeur initiale


let mouseover = document.getElementById("mouseover");
mouseover.addEventListener("mouseover", function(){
    mouseover.style.backgroundColor = "aqua";
    mouseover.style.width = "800px";
    mouseover.style.height = "300px";
    console.log("Vous avez mis le curseur sur la div-1");
});

let mouseout = document.getElementsByClassName("mouseout");
mouseout[0].addEventListener("mouseout", function(){
    mouseout[0].style.backgroundColor = "white";
    mouseout[0].style.width = "400px";
    console.log("Votre curseur a quitté la div-1");
});

