//Array con i percorsi delle Immagini
let slideImages = [
    "../assets/img/01.webp",
    "../assets/img/02.webp",
    "../assets/img/03.webp",
    "../assets/img/04.webp",
    "../assets/img/05.webp",
]

//Creo le IMG nell'HTML e collego slideImages
let img = document.createElement("img");
img.src = [slideImages[0]];

//Inserisco le IMG nel DIV Container
let div = document.getElementById("imgContainer");
div.appendChild(img);

img.setAttribute("id", "imgCarousel")
document.getElementById("imgCarousel").classList.add('imgCarousel');

//Collego pulsante
let arrowButton = document.getElementById("arrowButton");

arrowButton.onclick = function() {
    document.getElementById("imgCarousel").classList.add('active');
}
