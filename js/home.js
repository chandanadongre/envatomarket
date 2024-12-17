// Image slider configuration
const sliderImages = [
    'img/umbrella-chair.jpg',
    'img/swimming-pool-tropical-resort-with-garden.jpg',
    'img/bg2.jpeg',
    'img/bg1.png',
    'img/bg2.jpeg',
    'img/sea-view-swimming-pool-with-sunbed.jpg'
];

let currentImageIndex = 0;
let sliderInterval;

function initializeSlider() {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    // Start automatic sliding
    startSliderInterval();

    // Add event listeners for arrow navigation
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            clearInterval(sliderInterval);
            changeSlide(-1);
            startSliderInterval();
        });

        nextButton.addEventListener('click', () => {
            clearInterval(sliderInterval);
            changeSlide(1);
            startSliderInterval();
        });
    }
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

    // Apply fade-out effect
    sliderContainer.classList.remove('fade-in');
    void sliderContainer.offsetWidth; // Trigger reflow
    sliderContainer.style.backgroundImage = `url('${sliderImages[currentImageIndex]}')`;
    sliderContainer.classList.add('fade-in');
}

// Initialize slider on page load
document.addEventListener('DOMContentLoaded', initializeSlider);


const reviews = [
    {
        id: 1,
        content: "This is definitely one of the best companies out there, and I would recommend it to anyone who is looking for fast quality service at an affordable cost. Thanks for the amazing technical support and quality design!",
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
        content: "Outstanding customer service, reliable and trustworthy. Would not hesitate to recommend them to others.",
        author: "EMILY CLARK",
        location: "SAN FRANCISCO, CA",
    },
];

let currentReviewIndex = 0;

function showNextReview() {
    const reviewContainer = document.getElementById("reviewContainer");

    // Fade out
    reviewContainer.classList.add("opacity-0");

    // Change content after fade-out
    setTimeout(() => {
        currentReviewIndex = (currentReviewIndex + 2) % reviews.length;

        const review1 = reviews[currentReviewIndex];
        const review2 = reviews[(currentReviewIndex + 1) % reviews.length];

        reviewContainer.innerHTML = `
            <div class="relative flex flex-col justify-between bg-cover bg-center p-6 w-full md:w-1/2 h-[300px] shadow-lg" style="background-image: url('img/customer.png');">
                <div class="absolute inset-0 bg-black opacity-70"></div>
                <div class="relative flex flex-col z-10 h-full">
                    <p class="text-white text-lg italic mb-4 min-h-[100px] flex items-center">"${review1.content}"</p>
                    <div class="mt-auto flex justify-between items-center text-white">
                        <h4 class="font-semibold">${review1.author}</h4>
                        <span class="text-gray-300 text-sm">${review1.location}</span>
                    </div>
                    <div class="flex justify-center mt-2">
                        <span class="text-yellow-400">★★★★★</span>
                    </div>
                </div>
            </div>

            <div class="relative flex flex-col justify-between bg-cover bg-center p-6 w-full md:w-1/2 h-[300px] shadow-lg" style="background-image: url('img/customer2.jpeg');">
                <div class="absolute inset-0 bg-black opacity-70"></div>
                <div class="relative flex flex-col z-10 h-full">
                    <p class="text-white text-lg italic mb-2 min-h-[100px] flex items-center">"${review2.content}"</p>
                    <div class="mt-auto flex justify-between items-center text-white">
                        <h4 class="font-semibold">${review2.author}</h4>
                        <span class="text-gray-300 text-sm">${review2.location}</span>
                    </div>
                    <div class="flex justify-center mt-2">
                        <span class="text-yellow-400">★★★★★</span>
                    </div>
                </div>
            </div>
        `;

        // Fade-in
        reviewContainer.classList.remove("opacity-0");
    }, 500);
}

setInterval(showNextReview, 3000);
showNextReview();




//FAQ SCRIPT
function toggleFAQ(id) {
    const faq = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    if (faq.classList.contains('hidden')) {
      faq.classList.remove('hidden');
      icon.innerHTML = '&#8897;';
      faq.previousElementSibling.classList.replace('bg-white', 'bg-white');
      faq.previousElementSibling.classList.replace('text-black', 'text-black');
    } else {
      faq.classList.add('hidden');
      icon.innerHTML = '&#8896;';
      faq.previousElementSibling.classList.replace('bg-white', 'bg-white');
      faq.previousElementSibling.classList.replace('text-black', 'text-black');
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
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });

        const container = document.getElementById("serviceContainer");
        const leftArrow = document.getElementById("leftArrow");
        const rightArrow = document.getElementById("rightArrow");
    
        let scrollAmount = 0;
        const cardWidth = 300; // Approximate width of one card
        const scrollInterval = 3000; // Scroll every 3 seconds
        let autoScroll;
    
        // Scroll right function
        function scrollRight() {
            if (scrollAmount < container.scrollWidth - container.clientWidth) {
                scrollAmount += cardWidth;
            } else {
                scrollAmount = 0; // Reset to the start
            }
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    
        // Scroll left function
        function scrollLeft() {
            if (scrollAmount > 0) {
                scrollAmount -= cardWidth;
            } else {
                scrollAmount = container.scrollWidth - container.clientWidth; // Go to end
            }
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    
        // Add event listeners for manual scroll
        leftArrow.addEventListener("click", scrollLeft);
        rightArrow.addEventListener("click", scrollRight);
    
        // Auto-scroll every 3 seconds
        function startAutoScroll() {
            autoScroll = setInterval(scrollRight, scrollInterval);
        }
    
        // Stop auto-scroll on hover and restart on mouse leave
        container.addEventListener("mouseenter", () => clearInterval(autoScroll));
        container.addEventListener("mouseleave", startAutoScroll);
    
        // Start the automatic scrolling on load
        startAutoScroll();