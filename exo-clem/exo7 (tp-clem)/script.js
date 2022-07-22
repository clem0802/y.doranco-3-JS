let burger = document.getElementsByClassName("burger")[0];
let containerLinks = document.getElementsByClassName("container-links")[0];
let close = document.getElementsByClassName('close')[0];


burger.addEventListener('click', () => {
    close.classList.toggle('show');
    containerLinks.classList.toggle('hide');
    burger.classList.toggle('hide');
})

close.addEventListener('click', () => {
    close.classList.toggle('show');
    containerLinks.classList.toggle('hide');
    burger.classList.toggle('hide');
})


