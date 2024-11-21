function filterLinks() {
    const input = document.getElementById('search-box').value.toLowerCase();
    const items = document.querySelectorAll('.focus-item');
    let found = false;
  
    items.forEach((item) => {
      const text = item.textContent || item.innerText;
      if (text.toLowerCase().includes(input)) {
        item.style.display = '';
        found = true;
      } else {
        item.style.display = 'none';
      }
    });
  
    // Show "No results" message if nothing matches
    document.getElementById('no-results').style.display = found ? 'none' : 'block';
  }
  


  document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");

        // Hide all images
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 } // Reset to the first image
        slides[slideIndex - 1].style.display = "block";  // Show the current image

        // Change image every 2 seconds
        setTimeout(showSlides, 1500);
    }

    // Initialize the slideshow
    showSlides();
});









let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');

    // Reset all slides and dots
    slides.forEach(slide => (slide.style.display = 'none'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the current slide and mark the corresponding dot
    slideIndex = (index + slides.length) % slides.length;
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlides(slideIndex + direction);
}

function currentSlide(index) {
    showSlides(index - 1);
}

// Auto-sliding
setInterval(() => {
    changeSlide(1);
}, 3000);