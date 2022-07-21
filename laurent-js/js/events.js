// -- (1) CLICK EVENT
// ------------------------------
// ici, notre but est de faire en sorte que l'orsqu'on click sur la première div, elle change de couleur

// 1ère étape: je SÉLECTIONNE l'élément HTML sur lequel l'action doit être réalisée
let divSelect = document.getElementById("divUne");
console.log(divSelect);

// 2ème étape: je crée mon EVENT
divSelect.addEventListener("click", function(){
    divSelect.style.backgroundColor = "aqua";
    divSelect.style.color = "black";
    console.log("Vous avez cliqué sur la div 1.");
});



// -- (2) DBLCLICK EVENT
// ------------------------------

// 1ère étape, je sélectionne ma divDeux
let divDeux = document.getElementsByClassName("divDeux");
console.log(divDeux); // HTMLCollection [div.divDeux]

// 2ème étape, je prévois  mon event
divDeux[0].addEventListener("dblclick", function(){
    // dans l'addEventListener, le dblclick est l'event enregistré sur l'élément HTML
    divDeux[0].style.backgroundColor = "#2ecc71"; // modifie le bg-color de mon élém divDeux[0]
    divDeux[0].style.color = "black";
    console.log("Vous avez cliqué sur la div 2.") // écrit un msg sur ma console
});



// -- (3) MOUSEOVER
// ------------------------------

// 1ère étape, je sélectionne l'élément HTML sur lequel je veux placer mon EVENT
let divTrois2 = document.getElementsByTagName("div")[2];
console.log(divTrois2); // <div>DIV-3</div>
let divTrois = document.getElementsByTagName("div");
console.log(divTrois); // HTMLCollection(3) [div#divUne, div.divDeux, div, divUne: div#divUne]

// 2ème étape, je construis mon EVENT
divTrois[2].addEventListener("mouseover", function(){
    divTrois[2].style.backgroundColor = "#9b59b6";
    console.log("Vous avez survolé la div 3.")
})



// -- (4) MOUSEOUT
// ------------------------------

// 1ère étape: je sélectionne mon élém HTML
let divQuatre = document.getElementById("divout");
console.log(divQuatre);

// 2ème étape: je construis mon EVENT 
divQuatre.addEventListener("mouseout", function(){
    divQuatre.style.backgroundColor = "#f1c40f";
    console.log("Vous avez quitté la div 4.");
})



// -- (5) FOCUS (entrer-INPUT)
// ------------------------------

// 1ère étape, je sélectionne l'input
let input1 = document.getElementsByTagName("input");
console.log(input1);

// 2ème étape: je construis mon addEventListener
input1[0].addEventListener("focus", function(){
    input1[0].style.backgroundColor = "#e74c3c";
    console.log("Vous avez cliqué sur un input => focus");
})
// le FOCUS est le fait de cliquer dans un input pour y placer son cursor, afin de rédiger du contenu. Attention à ne pas le confondre avec le CLICK qui s'applique aux autres éléms HTML



// -- (6) BLUR (sortir-INPUT)
// ------------------------------
// 1ère étape, je sélectionne le 2ème input 
let input2 = document.getElementsByTagName("input");
console.log(input2);

// 2ème étape, je construis mon addEventListener
input2[1].addEventListener("blur", function(){
    input2[1].style.backgroundColor = "#9b59b6";
    console.log("Vous avez quitté l'input2 (blur)");
})




// parenthesis ()
// square brackets []
// curly braces {}