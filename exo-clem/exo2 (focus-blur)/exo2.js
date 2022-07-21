// clémence (réponse)


// PSEUDO:
// 1ère étape: sélectionner l'élement sur lequel placer addEventListener
let pseudo = document.getElementById("pseudo");
console.log(pseudo);
// 2ème étape: construire addEventListener
pseudo.addEventListener("focus", function(){
    pseudo.style.border = "5px solid aqua";
    console.log("Le border de pseudo-input a changé.");
});
pseudo.addEventListener("blur", function(){
    pseudo.style.border = ""; // un string vide, pour RÉTABLIR le CSS initial
    console.log("Le border de pseudo-input s'est rétabli.");
});
// -----------------------------------------
// MDP:
// 1ère étape: sélectionner l'élement sur lequel placer addEventListener
let mdp = document.getElementById("mdp");
console.log(mdp);
// 2ème étape: construire addEventListener
mdp.addEventListener("focus", function(){
    mdp.style.border = "5px solid aqua";
    console.log("Le border de mdp-input a changé.")
});
mdp.addEventListener("blur", function(){
    mdp.style.border = ""; // un string vide, pour RÉTABLIR le CSS initial
    console.log("Le border de mdp-input s'est rétabli.")
});



// ********************************************
// Le but de l'exercice est de faire en sorte que les input change de style lorsque je fais un focus dedans. Lorsque je BLUR (lorsque je quitte l'input) il reprend son style initial

// 1 - prenser à ce que je dois sélectionner, à savoir mes input.

// 2 - maintenant qu'ils sont sélectionné, je dois prévoir deux addEventListener pour mes input, un addEventListener qui prévoit le changement de style, et un qui au BLUR provoque le rétablissement du style

// Au total, il y'aura 4 addEventListener : 2 pour le premier, 2 pour le second


// ********************************************
// Fatiha, ce qu'elle a découvert:

// let main= document.getElementById("main");
// console.log(main);

// main.addEventListener("click", function(){
// main.style.borderBlockStyle;
// console.log("vous avez cliqué sur la case")
// }); 


// ******************************************** (PROF, correction)
// https://sharemycode.fr/ila correction prof EXO Border-Input