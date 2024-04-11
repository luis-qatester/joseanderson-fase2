document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".hamburger");
  var navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navLinks.classList.toggle("active");

    // Update aria-expanded attribute based on whether the menu is expanded or not
    var isExpanded =
      hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !isExpanded);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const secondaryNavbar = document.querySelector(".navbar-secundaria");
  // Wait for 100ms before starting the animation to ensure the class is added after the element is rendered
  setTimeout(() => {
    secondaryNavbar.classList.add("visible");
  }, 100);
});

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
