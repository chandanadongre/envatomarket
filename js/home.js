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


// Dynamic review section
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

    // Fade out current reviews
    reviewContainer.classList.add("opacity-0");

    // After fading out, change the review content
    setTimeout(() => {
        currentReviewIndex = (currentReviewIndex + 2) % reviews.length; // Loop through reviews array two at a time

        const review1 = reviews[currentReviewIndex];
        const review2 = reviews[(currentReviewIndex + 1) % reviews.length];

        // Update review container with two reviews
        reviewContainer.innerHTML = `
            <div class="relative  p-6  flex flex-col items-center justify-center h-[300px] bg-cover bg-center" style="background-image: url('img/customer.png');">
                <div class="absolute inset-0 bg-black opacity-70 "></div>
                <p class="relative text-white text-lg italic mb-4 z-10">"${review1.content}"</p>
                <h4 class="relative text-white font-semibold z-10">${review1.author}, <span class="text-gray-200">${review1.location}</span></h4>
                <div class="flex justify-center mt-2 z-10">
                    <span class="text-yellow-400">★★★★★</span>
                </div>
            </div>
            <div class="relative  p-6  flex flex-col items-center justify-center h-[300px] bg-cover bg-center" style="background-image: url('img/customer2.jpeg');">
                <div class="absolute inset-0 bg-black opacity-70 "></div>
                <p class="relative text-white text-lg italic mb-4 z-10">"${review2.content}"</p>
                <h4 class="relative text-white font-semibold z-10">${review2.author}, <span class="text-gray-200">${review2.location}</span></h4>
                <div class="flex justify-center mt-2 z-10">
                    <span class="text-yellow-400">★★★★★</span>
                </div>
            </div>
        `;

        // Fade in new reviews
        reviewContainer.classList.remove("opacity-0");
    }, 500);
}

// Automatically slide reviews every 6 seconds (2 reviews)
setInterval(showNextReview, 3000);

// Initialize with the first two reviews
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