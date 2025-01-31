let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = "none"; // Hide all slides
  });
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize slideshow
showSlides();
