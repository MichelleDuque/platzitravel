const htmlElement = document.querySelector("html");
const toggleButtons = document.querySelectorAll(".toggle");

// Check for saved user preference and apply it
if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
}

// Event listener for each toggle button
toggleButtons.forEach(toggleButton => {
  toggleButton.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    // Save the user's preference
    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
