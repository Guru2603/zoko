// script.js
console.log("Why Choose Us section loaded.");

// You could add animations on scroll, hover effects, etc. here if desired.
// For example, a simple hover effect on feature items (can also be done with CSS :hover):
/*
const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // item.style.transform = 'translateY(-5px)';
        // item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    item.addEventListener('mouseleave', () => {
        // item.style.transform = 'translateY(0)';
        // item.style.boxShadow = 'none';
    });
});
*/

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.next-button');
    const progressBarFilled = document.querySelector('.progress-bar-filled');
    const galleryItems = document.querySelectorAll('.image-gallery .gallery-item');
    const totalImages = 18; // Total images in the conceptual slider
    let currentStartIndex = 1; // Represents the number of the first image currently shown (e.g., 01)
    
    // For demo, cycle progress bar through a few representative states.
    // The initial 33% is set in CSS.
    const progressStates = [33, 66, 100]; 
    let currentProgressStateIndex = 0; // Start at the first state (33%)

    if (nextButton && progressBarFilled && galleryItems.length === 3) {
        nextButton.addEventListener('click', () => {
            currentStartIndex++;
            
            // Determine the maximum starting index for a set of 3 images
            // e.g., if totalImages = 18, max start index is 16 (to display 16, 17, 18)
            const maxStartIndex = totalImages - (galleryItems.length - 1);

            if (currentStartIndex > maxStartIndex) {
                currentStartIndex = 1; // Loop back to the beginning
                currentProgressStateIndex = 0; // Reset progress state index
            } else {
                // Advance progress state, loop if necessary (though 3 states match 18/3=6 pages of 3)
                // This is a simplified progress for demo. A real one would be (currentStartIndex / maxStartIndex) * 100
                currentProgressStateIndex = Math.min(currentProgressStateIndex + 1, progressStates.length - 1);
                if (currentStartIndex === 1) currentProgressStateIndex = 0; // Ensure reset
            }

            // Update image counters
            galleryItems.forEach((item, i) => {
                const imageNumber = currentStartIndex + i;
                const counterElement = item.querySelector('.image-counter');
                if (counterElement) {
                    const numberPart = String(imageNumber).padStart(2, '0');
                    counterElement.innerHTML = `${numberPart}<span class="total-count">/${totalImages}</span>`;
                }
                // In a real slider, you'd update item.querySelector('img').src here
            });

            // Update progress bar based on demo states
            progressBarFilled.style.width = `${progressStates[currentProgressStateIndex]}%`;
            
            // console.log(`Next clicked. Displaying images starting from: ${currentStartIndex}. Progress: ${progressStates[currentProgressStateIndex]}%`);
        });
    }
});