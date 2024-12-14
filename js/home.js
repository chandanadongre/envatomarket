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

//services scroll bar
const scrollLeftButton = document.getElementById("scrollLeft");
const scrollRightButton = document.getElementById("scrollRight");
const serviceContainer = document.getElementById("serviceContainer");
    
    scrollLeftButton.addEventListener("click", () => {
      serviceContainer.scrollBy({
        left: -serviceContainer.clientWidth,
        behavior: "smooth"
      });
    });
    
    scrollRightButton.addEventListener("click", () => {
      serviceContainer.scrollBy({
        left: serviceContainer.clientWidth,
        behavior: "smooth"
    });
});


//dynamic review section
const reviews = [
    {
        id: 1,
        content: "This is definitely one of the best companies out there, and I would recommend it to anyone who is looking for fast quality services at affordable cost. Thanks for the amazing technical support and quality design!",
        author: "MICHAEL MOORE",
        location: "LOS ANGELES, CA",
    },
    {
        id: 2,
        content: "Amazing service and exceptional attention to detail. The staff was extremely friendly and knowledgeable. Highly recommended!",
        author: "SARAH SMITH",
        location: "NEW YORK, NY",
    },
    {
        id: 3,
        content: "Professional and efficient team with incredible results. I am very satisfied with the work. Excellent quality!",
        author: "DAVID JONES",
        location: "CHICAGO, IL",
    },
    {
        id: 4,
        content: "This is definitely one of the best companies out there, and I would recommend it to anyone who is looking for fast quality services at affordable cost. Thanks for the amazing technical support and quality design!",
        author: "MICHAEL MOORE",
        location: "LOS ANGELES, CA",
    },
    {
        id: 5,
        content: "Amazing service and exceptional attention to detail. The staff was extremely friendly and knowledgeable. Highly recommended!",
        author: "SARAH SMITH",
        location: "NEW YORK, NY",
    },
    {
        id: 6,
        content: "Professional and efficient team with incredible results. I am very satisfied with the work. Excellent quality!",
        author: "DAVID JONES",
        location: "CHICAGO, IL",
    },
];

let currentReviewIndex = 0;

function showNextReview() {
    const reviewContainer = document.getElementById("reviewContainer");
    
    // Fade out current review
    reviewContainer.classList.add("opacity-0"); 
    
    // After fading out, change the review content
    setTimeout(() => {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;  // Loop through the reviews array
        const review = reviews[currentReviewIndex];
        
        // Update review container with new review content
        reviewContainer.innerHTML = `
            <p class="text-2xl italic mb-4">"${review.content}"</p>
            <h4 class="text-lg font-semibold">${review.author}, <span class="text-gray-500">${review.location}</span></h4>
        `;
        
        // Fade in the new review
        reviewContainer.classList.remove("opacity-0"); 
    }, 500); // Fade duration
}

// Automatically slide reviews every 3 seconds
setInterval(showNextReview, 3000);

// Initialize with the first review
showNextReview();

//FAQ SCRIPT
function toggleFAQ(id) {
    const faq = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    if (faq.classList.contains('hidden')) {
      faq.classList.remove('hidden');
      icon.textContent = '-';
      faq.previousElementSibling.classList.replace('bg-gray-200', 'bg-green-400');
      faq.previousElementSibling.classList.replace('text-gray-700', 'text-white');
    } else {
      faq.classList.add('hidden');
      icon.textContent = '+';
      faq.previousElementSibling.classList.replace('bg-green-400', 'bg-gray-200');
      faq.previousElementSibling.classList.replace('text-white', 'text-gray-700');
    }
}

//why choose us counting values
const counters = document.querySelectorAll('.count');
        const speed = 50; // Adjust speed for counter

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;

            function updateCount() {
                if (count < target) {
                    count += Math.ceil(target / speed);
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });