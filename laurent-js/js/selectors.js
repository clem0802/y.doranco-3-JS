
// SELECTION PAR ID
// ------------------------
let monId = document.getElementById("masection");
console.log(monId);
console.log(monId.innerHTML);


// SELECTION NATURELLE
// ------------------------
let monId2 = masection;
// cette méthode permet de sélectionner un élément HTML oar son nom ID en plaçant son ID dans une variable. Comme l'ID est unique, la machine est capable de comprendre que je veux sélectionner l'élément HTML ayant l'ID "masection"
console.log(monId2); 
// section#masection
// on retrouve "masection" dans la console


// SELECTION PAR TAGNAME (par nom de balise)
// ------------------------
let maBalise = document.getElementsByTagName("span");
// attention ici on est en getElements avec un S, ce qui signifie que la machine s'attend à ce que potentioellement il y ait plusieurs éléments à sélectionner sur ma page. La machine va donc créer un tableau pour stocker ces éléments même si je n'en ai qu'un sur ma page web
console.log(maBalise); 
// HTMLCollection(3) [span, span, span]
// HTMLCollection qui est en fait un tableau (array)
console.log(maBalise[0].innerHTML); // Span 1
console.log(maBalise[1].innerHTML); // Span 2
console.log(maBalise[2].innerHTML); // Span 3


// SELECTION PAR CLASSNAME
// ------------------------
let mesClass = document.getElementsByClassName("avion");
console.log(mesClass);
// HTMLCollection(3) [div.avion, div.avion, div.avion]
console.log(mesClass[0].innerHTML);
console.log(mesClass[1].innerHTML);
console.log(mesClass[2].innerHTML);
mesClass[1].style.backgroundColor = "aqua";


// SELECTION  PAR querySelector  =>(INDEX n°, NO)
// ------------------------
// il s'arrête dès qu'il a trouvé un 1er élément satisfaisant: 1ère balise <p> récupérée
let p = document.querySelector("p")
console.log(p); // <p>paragraph 0</p>
console.log(p.innerHTML);
// ici pas besoin d'INDEX, car SEULE la 1ère balise <p> est sélectionnée

let mesClass2 = document.querySelectorAll("avion");
for(let z=0; z<mesClass2.length; z++){
    mesClass2[z].style.fontWeight = "bold";
}
// Airbus 1
// Airbus 2
// Airbus 3


// SELECTION PAR querySelectorAll (INDEX n°, YES)
// ------------------------
let lesP = document.querySelectorAll("p");
console.log(lesP); // NodeList(5) [p, p, p, p, p]

for(let y=0; y<lesP.length; y++){
    console.log(lesP[y].innerHTML);
}
// paragraph 0
// paragraph 1
// paragraph 2
// paragraph 3
// paragraph 4
// paragraph 5
// paragraph 6
// ci-dessus, on associe le numéro d'index de nos éléments HTML avec la variable "i" de la boucle, pour que cette derni_ère écrive le numéro d'indice à notre place
// de cette manière, c'est la boucle qui vient compter à notre place le nombre de balises <p> sur ma page, donc si ja rajoute des <p> ou que j'en enlève, la boucle va les comtper automatiquement sans que j'aie besoin de modifier mon JavaScript

for(let x=0; x<lesP.length; x++){
    lesP[x].style.fontWeight = "bold";
}

