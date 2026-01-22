document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("style-toggle");

  if (!button) return;

  button.addEventListener("click", () => {
    document.body.classList.toggle("minimal-styles");

    button.textContent = document.body.classList.contains("minimal-styles")
      ? "Enable styles"
      : "Disable styles";
  });
});


