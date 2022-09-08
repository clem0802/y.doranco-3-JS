// --------------------------------------------
// simple à comprendre, long à érire
// (1) fonction nommée
function additionner(x, y){
    return x + y;
}


// --------------------------------------------
// évident, + long à écrire
// (2) fonction anonyme
const ajouter1 = function (x, y){
    return x + y;
}


// --------------------------------------------
// concis
// (3) fonction (anonyme) fléchée
const ajouter2 = (x, y) => {
    return x + y;
}


// --------------------------------------------
// très très concis
// (4) fonction fléchée à 1 seule instruction
const ajouter3 = (x, y) => x + y;
console.log(additionner(2, 4)); // 6
console.log(ajouter1(2, 4)); // 6
console.log(ajouter2(2, 4)); // 6