// -----------------------------------------------(correction Laurent, prof)
// laurent.v.couret@gmail.com


// (1) img en HAUT (ICI A REVOIR !!!)
// 1ère étape: je sélectionne mes éléments HTML
let btn = document.getElementById("changerImageTitre");
console.log(btn);

let image1 = document.getElementById("monImage2");
console.log(image1);

// 2ème étape, je construis mon addEventListener
btn.addEventListener("click", function(){
    if(image1.src = "c.jpg"){
        image1.src = "d.jpg";
        image1.title = "plage avec un bateau";
    } else if(image1.src = "d.jpg"){
        image1.src = "e.jpg";
        image1.title = "préau en pleine mer";
    } else if(image1.src = "e.jpg"){
        image1.src = "a.jpg";
        image1.title = "tortue rouge";
    } else if(image1.src = "a.jpg"){
        image1.src = "b.jpg";
        image1.title = "chat blanc en repos";
    } else{
        image1.src = "c.jpg";
    }
})



// (2) CAROUSSEL: img en BAS
// 1ère étape, je sélectionne mon élément HTML
let image2 = document.getElementById("caroussel");
console.log(image2);

// 2ème étape: je créé ma fonction avant de l'appeler dans mon addEventListener (autre manière de présenter son code)
function caroussel(){
    // idi, ma fonction doi trécupérer la SRC de mon image, la logique de switch sera: "si je vois la SRC de l'image A, alors je passe à l'image B. Lorsque je reclick, si je vois la SRC de l'image B, alors je passe à l'image C. etc etc"
    let srcImage = image2.getAttribute("src");
    console.log(srcImage);

    switch(srcImage){
        // si tu vois la SRC de a.jpg, tu passes à b.jpg
        case "a.jpg": image2.src = "b.jpg";
        break;

        case "b.jpg": image2.src = "c.jpg";
        break;

        case "c.jpg": image2.src = "d.jpg";
        break;

        case "d.jpg": image2.src = "e.jpg";
        break;

        case "e.jpg": image2.src = "a.jpg";
        break;

        default: console.log("oups");
        break;
    }
};

image2.addEventListener("click", caroussel)