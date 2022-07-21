// clémence (réponse)


// div1: (MOUSEDOWN-MOUSEUP)
// let jaune1 = document.getElementsByClassName("jaune");
let btn = document.querySelector("#btn");
console.log("btn OK");
// 2ème étape: construire addEventListener
btn.addEventListener("mousedown", function(){
    document.getElementsByClassName("jaune")[0].style.width = "80px";
    console.log("La largeur de div1 s'est rétrécie à 80px");
})
btn.addEventListener("mouseup", function(){
    document.getElementsByClassName("jaune")[0].style.width = "300px";
    console.log("La largeur de div1 s'est rétablie à 300px");
})

// -----------------------------------------
// div2:
// 1ère étape: sélectionner l'élement sur lequel placer addEventListener
let jaune2 = document.getElementsByClassName("jaune");
console.log("2ème div jaune affectée");
// 2ème étape: construire addEventListener
jaune2[1].addEventListener("dblclick", function(){
    jaune2[1].style.backgroundColor = "purple";
    console.log("La couleur de la div2 changée en purple")
});
jaune2[1].addEventListener("mouseout", function(){
    jaune2[1].style.backgroundColor = "yellow";
    console.log("La couleur de la div2 s'est rétablie")
});




// Correction prof EXO Border-Input https://sharemycode.fr/ila 
// HTML EXO 3 avec les rectangles jaunes  https://sharemycode.fr/5xw
// CSS EXO3 rectangles jaunes https://sharemycode.fr/rau

