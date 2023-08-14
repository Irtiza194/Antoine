const btnToggle = document.getElementById("toggle");

btnToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p");
  elements.forEach((element) => {
    element.classList.toggle("dark-mode-heading");
  });
});
