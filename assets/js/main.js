//Array con i percorsi delle Immagini
let slideImages = [
    "../assets/img/01.webp",
    "../assets/img/02.webp",
    "../assets/img/03.webp",
    "../assets/img/04.webp",
    "../assets/img/05.webp",
]
let activeImage = 1

//Ciclo selezione Immagini
for (let i = 0; i < slideImages.length; i++) {
    imgContainer.innerHTML +=
    `<div class="imgContainer">
        <img class="imgCarousel" src="${slideImages[i]}">
    </div>`
}

document.getElementsByClassName('imgContainer')[activeImg].classList.add('active');

//Collego bottone prossima immagine
let next = document.getElementById("arrowButton");

    next.addEventListener('click', function () {
    
    document.querySelector('.imgContainer.active').classList.remove('active');

    document.getElementsByClassName('imgContainer')[activeImg].classList.add('active');

    if (activeImg === slideImages.length - 1) {
        activeImg = 0;
    } else {
        activeImg++;
    }

}
)