// clémence (réponse)

// (1) solution1
// function divChange1(){
//     this.classList.toggle('cyan');
//     this.classList.toggle('yellow');
// }
// document.querySelector('div').addEventListener('click', divChange1);
// document.querySelector('div').addEventListener('click', divChange1);



// (2) solution2
function divChange2() {
    this.classList.toggle('cyan');
    this.classList.toggle('yellow');
}
document.querySelector('.cyan').addEventListener('click', divChange2);



// (3) solution3