// Navbar active otomatis
const links = document.querySelectorAll(".nav-link");
const current = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

// Smooth scroll (kalau pakai anchor)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

// Animasi sederhana saat scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (pos < screen - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// initial state
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.5s";
});