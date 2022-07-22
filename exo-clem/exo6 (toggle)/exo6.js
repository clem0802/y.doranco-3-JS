// clémence (réponse)

// (1) solution1
// function divChange1(){
//     this.classList.toggle('cyan');
//     this.classList.toggle('yellow');
// }
// document.querySelector('div').addEventListener('click', divChange1);
// document.querySelector('div').addEventListener('click', divChange1);


// ----------------------------------
// (2) solution2
// function divChange2() {
//     this.classList.toggle('cyan');
//     this.classList.toggle('yellow');
// }
// document.querySelector('.cyan').addEventListener('click', divChange2);


// ----------------------------------
// (3) solution3
let divChange3 = document.querySelector("div");
console.log("div OK");

// 2ème étape: construire addEventListener
divChange3.addEventListener("click", function(){
    if(divChange3.className == "cyan"){
        divChange3.setAttribute("class", "yellow");
    } else{
        divChange3.setAttribute("class", "cyan");
    }
});


