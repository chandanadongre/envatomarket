document.addEventListener('DOMContentLoaded', async () => {
    // Determine if we're in a subdirectory
    const isInSubdirectory = window.location.pathname.includes('/components/');
    const basePath = isInSubdirectory ? '../' : '';

    // Load header and footer
    try {
        const [headerResponse, footerResponse] = await Promise.all([
            fetch(`${basePath}components/header.html`),
            fetch(`${basePath}components/footer.html`)
        ]);

        if (!headerResponse.ok || !footerResponse.ok) {
            throw new Error('Failed to load components');
        }

        const [headerHtml, footerHtml] = await Promise.all([
            headerResponse.text(),
            footerResponse.text()
        ]);

        // Insert the components
        const headerElement = document.getElementById('header');
        const footerElement = document.getElementById('footer');

        if (headerElement) {
            // Process header HTML to fix paths when in subdirectory
            let processedHeaderHtml = headerHtml;
            if (isInSubdirectory) {
                processedHeaderHtml = headerHtml.replace(/src="img\//g, 'src="../img/')
                                              .replace(/href="components\//g, 'href="../components/')
                                              .replace(/href="index.html/g, 'href="../index.html');
            }
            headerElement.innerHTML = processedHeaderHtml;
        }

        if (footerElement) {
            // Process footer HTML to fix paths when in subdirectory
            let processedFooterHtml = footerHtml;
            if (isInSubdirectory) {
                processedFooterHtml = footerHtml.replace(/src="img\//g, 'src="../img/')
                                              .replace(/href="components\//g, 'href="../components/')
                                              .replace(/href="index.html/g, 'href="../index.html');
            }
            footerElement.innerHTML = processedFooterHtml;
        }

        // Initialize menu functionality after components are loaded
        initializeMenu();
    } catch (error) {
        console.error('Error loading components:', error);
    }
});

function initializeMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    const nonDropdownLinks = document.querySelectorAll('#mobile-menu > a:not(.mobile-dropdown-toggle)');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
    }

    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const content = toggle.nextElementSibling;
            const arrow = toggle.querySelector('span');
            
            // Close other dropdowns
            mobileDropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherContent = otherToggle.nextElementSibling;
                    const otherArrow = otherToggle.querySelector('span');
                    if (otherContent) otherContent.classList.add('hidden');
                    if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current dropdown
            if (content && arrow) {
                content.classList.toggle('hidden');
                arrow.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && menuBtn && !mobileMenu.contains(e.target) && e.target !== menuBtn) {
            mobileMenu.classList.add('hidden');
            mobileDropdownToggles.forEach(toggle => {
                const content = toggle.nextElementSibling;
                const arrow = toggle.querySelector('span');
                if (content) content.classList.add('hidden');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            });
        }
    });
}
// Handle form validation
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill out all required fields before submitting.');
        }
    });
}

//counter
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;
  
            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 30); // Adjust the speed here
            } else {
              counter.innerText = target;
            }
          };
        updateCount();
    });
});
    
