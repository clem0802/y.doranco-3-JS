// clémence (réponse)


// (IMG-DÉFILER) 
// (image en HAUT)
// ---------------------------------
let img1 = document.getElementsByTagName("img")[0];
console.log("img OK");
let btn = document.getElementById("changerImageTitre");
console.log("btn OK");

// 2ème étape: construire addEventListener
btn.addEventListener("click", function(){
    if(img1.src.match("c.jpg")){
        img1.src = "d.jpg";
        img1.setAttribute("title", "canoe at the shore"); 
    } else if(img1.src.match("d.jpg")){
        img1.src = "e.jpg";
        img1.setAttribute("title", "porch at the sea"); 
    } else if(img1.src.match("e.jpg")){
        img1.src = "a.jpg";
        img1.setAttribute("title", "red turtle"); 
    } else if(img1.src.match("a.jpg")){
        img1.src = "b.jpg";
        img1.setAttribute("title", "white cat resting"); 
    } else{
        img1.src = "c.jpg";
        img1.getAttribute("title"); 
    }
});


// (image en BAS)
// ---------------------------------
// 1ère étape: sélectionner l'élément où placer EVENT
let img2 = document.getElementById("caroussel");
console.log("img OK");

// 2ème étape: construire addEventListener
img2.addEventListener("click", function(){
    if(img2.src.match("a.jpg")){
        img2.src = "b.jpg";
    } else if(img2.src.match("b.jpg")){
        img2.src = "c.jpg";
    } else if(img2.src.match("c.jpg")){
        img2.src = "d.jpg";
    } else if(img2.src.match("d.jpg")){
        img2.src = "e.jpg";
    } else{
        img2.src = "a.jpg"
    }
});


// -----------------------------------------------(correction Laurent, prof)
// laurent.v.couret@gmail.com
// let btn = document.getElementById("changerImageTitre");
// console.log(btn);

// let image1 = document.getElementById("monImage2");
// console.log(image1)
