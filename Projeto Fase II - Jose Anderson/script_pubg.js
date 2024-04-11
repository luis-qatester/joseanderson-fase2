let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".carousel-images img");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Optional: add auto-slide feature
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 3000); // Change image every 3 seconds
