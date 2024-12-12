const zoomedDiv = document.getElementById("zoomed-img-container");
const zoomedImg = document.getElementById("zoomed-img");

// affecte l'event listener à toutes les images de la gallerie
document.querySelectorAll(".gallery-img").forEach((img) => {
    img.addEventListener("click", (event) => {
        zoomedImg.src = event.target.src;

        zoomedDiv.classList.remove("hidden");
        zoomedDiv.classList.add("active");
    });
});

// le div caché couvre toute la zone de l'écran,
// donc l'event listener suivant est attentif à un clic n'importe où sur l'écran
zoomedDiv.addEventListener("click", () => {
    zoomedImg.src = "";

    zoomedDiv.classList.add("hidden");
    zoomedDiv.classList.remove("active");
});