/* ===== TESTIMONIALS SLIDER FUNCTIONALITY ===== */
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    let currentIndex = 0;
    const totalCards = testimonialCards.length;
    
    // Function to show specific testimonial
    function showTestimonial(index) {
        // Remove active class from all cards
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current card and dot
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = totalCards - 1;
            }
            showTestimonial(newIndex);
        });
    }
    
    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            let newIndex = currentIndex + 1;
            if (newIndex >= totalCards) {
                newIndex = 0;
            }
            showTestimonial(newIndex);
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    // Auto-advance testimonials every 5 seconds
    setInterval(function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= totalCards) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    }, 5000);
});
