const headerNav = document.getElementById("header-nav");
const headerBtn = document.getElementById("header-btn");

headerBtn.addEventListener("click", () => {
  const isActive = headerNav.classList.toggle("active");
  headerBtn.setAttribute("aria-expanded", isActive);
});

document.querySelectorAll("#header-nav a").forEach(link => {
  link.addEventListener("click", () => {
    headerNav.classList.remove("active");
    headerBtn.setAttribute("aria-expanded", "false");
  });
});
