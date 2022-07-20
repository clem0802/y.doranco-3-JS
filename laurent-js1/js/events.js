// -- CLICK EVENT
// ------------------------------
// ici, notre but est de faire en sorte que l'orsqu'on click sur la première div, elle change de couleur

// 1ère étape: je SÉLECTIONNE l'élément HTML sur lequel l'action doit être réalisée
let divSelect = document.getElementById("madiv");
console.log(divSelect);

// 2ème étape: je crée mon EVENT
divSelect.addEventListener("click", function(){
    divSelect.style.backgroundColor = "aqua";
    console.log("Vous avez cliqué sur la div 1.");
});