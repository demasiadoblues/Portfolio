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

