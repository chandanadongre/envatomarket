// Image slider configuration
const sliderImages = [
    'img/bg1.png',
    'img/bg12.jpeg',
    'img/bg2.jpeg',
    'img/bg3.jpeg',
    'img/bg4.jpg',
    'img/bg5.jpeg'
];

let currentImageIndex = 0;
let sliderInterval;

function initializeSlider() {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    // Start automatic sliding
    startSliderInterval();

    // Add event listeners for arrow navigation
    document.getElementById('prev-slide').addEventListener('click', () => {
        clearInterval(sliderInterval);
        changeSlide(-1);
        startSliderInterval();
    });

    document.getElementById('next-slide').addEventListener('click', () => {
        clearInterval(sliderInterval);
        changeSlide(1);
        startSliderInterval();
    });
}

function startSliderInterval() {
    sliderInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

function changeSlide(direction) {
    currentImageIndex = (currentImageIndex + direction + sliderImages.length) % sliderImages.length;
    updateSliderImage();
}

function updateSliderImage() {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    // Create new image element
    const newImage = new Image();
    newImage.src = sliderImages[currentImageIndex];
    
    // Update background with fade effect
    sliderContainer.style.backgroundImage = `url('${sliderImages[currentImageIndex]}')`;
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSlider);