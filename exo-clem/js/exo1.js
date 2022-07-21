// Lorsque je passe mon curseur SUR le rectangle, il obtient une background color et on augmente sa largeur
// Lorsque mon curseur QUITTE le rectangle, il redeviens blanc et reprend sa largeur initiale

// clémence (réponse)
// let mouseover = document.getElementById("mouseover");
// mouseover.addEventListener("mouseover", function(){
//     mouseover.style.backgroundColor = "aqua";
//     mouseover.style.width = "800px";
//     console.log("Vous avez mis le curseur sur la div-1");
// });

// let mouseout = document.getElementsByClassName("mouseout");
// mouseout[0].addEventListener("mouseout", function(){
//     mouseout[0].style.backgroundColor = "white";
//     mouseout[0].style.width = "400px";
//     console.log("Votre curseur a quitté la div-1");
// });




// Laurent (prof) (réponse)
// 1ère étape: sélectionner l'élement sur lequel placer addEventListener
let main = document.getElementsByTagName("main")[0];
console.log(main);
// 2ème étape: construire addEventListener
main.addEventListener("mouseover", function(){
    main.style.backgroundColor = "turquoise";
    main.style.width = "600px";
    console.log("Votre curseur est sur main");
})

main.addEventListener("mouseout", function(){
    main.style.backgroundColor = "white";
    main.style.width = "400px";
    console.log("Votre curseur a quitté main")
})

