//Creo Array con i percorsi delle 5 immagini
let slideImages = [
    "../assets/img/01.webp",
    "../assets/img/02.webp",
    "../assets/img/03.webp",
    "../assets/img/04.webp",
    "../assets/img/05.webp",
]

//Genero nell'HTML le IMG ed assegno loro ID e CLASSE
let img = document.createElement("img");
img.src = slideImages;

let div = document.getElementById("imgContainer");
div.appendChild(img);

img.setAttribute("id", "imgCarousel")
document.getElementById("imgCarousel").classList.add('imgCarousel');
document.getElementById("imgCarousel").classList.add('active');

//Collego pulsante
let arrowButton = document.getElementById("arrowButton");

arrowButton.onclick = function() {
    alert("ciao!")
}