document.addEventListener("DOMContentLoaded", () => {
    // Slideshow control logic
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        if(slides.length === 0) return;
        
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide, loop back to start if at the end
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 6 seconds to allow for smooth 1.5s fade and zooming interactions
    if(slides.length > 1) {
        setInterval(nextSlide, 6000);
    }
});
