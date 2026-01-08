// Scroll suave al hacer clic en los links del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Toggle del menú en mobile
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function scrollFlyers(direction) {
  const track = document.getElementById('flyerTrack');
  const scrollAmount = 320; // ancho imagen + margen
  track.scrollLeft += direction * scrollAmount;
}


function scrollGallery(trackId, direction) {
  const track = document.getElementById(trackId);
  const scrollAmount = 340; // ajustable según tamaño
  track.scrollLeft += direction * scrollAmount;
}

// Botón "Volver arriba"
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Mostrar/ocultar el botón según el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

