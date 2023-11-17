const d = document;
const pacman = d.getElementById("pac-man");
const star = d.getElementById("star");

pacman.addEventListener("click", (e) => {
    let pacmanBody = d.querySelector(".pacman-container");
    pacmanBody.classList.toggle("hidden")
    d.querySelector(".star").classList.add("hidden");

})

// Suponiendo que d representa el documento o el elemento contenedor adecuado
star.addEventListener("click", (e) => {
    let starBody = d.querySelector(".star");
    starBody.classList.toggle("hidden");
    d.querySelector(".pacman-container").classList.add("hidden");
});



const btnAside = d.getElementById("aside");

btnAside.addEventListener("click", (e) => {
    let aside = d.querySelector("aside");
    btnAside.style.transform = (!aside.classList.contains("show")) ?
    "translateX(110px)"
    :"translateX(0px)";
    aside.classList.toggle("show");
})