// document.addEventListener("click", () => {
//     console.log("je clique sur la page");
// })

function onClick(){
    // sélectionne la balise body du mon HTML
    const body = document.querySelector("body");

    // je cherche une balise h1
    const h1 = document.createElement("h1");

    // je spécifie le text de la balise h1
    h1.innerHTML = "Coucou!";

    // j'ajoute ma balise h1 à ma balise body
    body.appendChild(h1);
}
document.addEventListener("click", onClick);