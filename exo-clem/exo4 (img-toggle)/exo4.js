// clémence (réponse)


// (TOGGLE-IMG)
// 1ère étaped: sélectionner l'élément où placer EVENT
let img = document.getElementById("monImage");
console.log("img OK");
let btn = document.getElementById("changerImage");
console.log("btn OK");

// 2ème étape: construire addEventListener
btn.addEventListener("click", (event)=>{
    if(img.src.match("img1.jpg")){
        img.src = "img2.jpg";
    } else{
        img.src = "img1.jpg";
    }
});

// btn.addEventListener("click", function(){
//     if(img.src.match("img1.jpg")){
//         img.src = "img2.jpg";
//     } else{
//         img.src = "img1.jpg";
//     }
// });


// -----------------------------------------
// réponse de Laurent (prof)
// btn.addEventListener("click", function(){
//     image.src = "img2.jpg";
// });


// -----------------------------------------
// Consignes : lorsque je click sur le bouton "Changer d'image", l'image affiché à l'écran change. 
// INDICES
// - Penser à sélectionner le bon élément pour l'addEventListener : se poser la question "Sur quoi je dois cliquer pour déclencher l'action"

// - Penser à bien sélectionner l'image, car c'est elle qui doit changer et non le bouton ! Donc dans la fonction, on doit retrouver la variable qui sélectionne l'image

// - Ici, il faut changer d'image. Qu'est ce qui différencie deux images en HTML ? Est-ce qu'il existe en JS un petit fonction comme .width ou .backgroundColor qui me permettrait d'aller agir sur la src de mon image ? 






// Correction prof EXO Border-Input https://sharemycode.fr/ila 
// HTML EXO 3 avec les rectangles jaunes  https://sharemycode.fr/5xw
// CSS EXO3 rectangles jaunes https://sharemycode.fr/rau
// HTML EXO 4 https://sharemycode.fr/yaj
// CSS EXO4 https://sharemycode.fr/vul
// HTML EXO4 avec INDICES https://sharemycode.fr/4k7

