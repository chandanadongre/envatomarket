function initializeHeaderEvents() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    const nonDropdownLinks = document.querySelectorAll('#mobile-menu > a:not(.mobile-dropdown-toggle)');

    if (menuBtn && mobileMenu) {
        // Toggle mobile menu
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (mobileDropdownToggles.length > 0) {
        // Handle mobile dropdown toggles
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('mouseenter', (e) => {
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
    }

    if (nonDropdownLinks.length > 0) {
        // Close all dropdowns when hovering over non-dropdown links (like HOME, ABOUT US, CONTACT)
        nonDropdownLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                mobileDropdownToggles.forEach(toggle => {
                    const content = toggle.nextElementSibling;
                    const arrow = toggle.querySelector('span');
                    if (content) content.classList.add('hidden');
                    if (arrow) arrow.style.transform = 'rotate(0deg)';
                });
            });
        });
    }

    // Close menu and dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && menuBtn && !mobileMenu.contains(e.target) && e.target !== menuBtn) {
            mobileMenu.classList.add('hidden');
            // Reset all mobile dropdowns
            mobileDropdownToggles.forEach(toggle => {
                const content = toggle.nextElementSibling;
                const arrow = toggle.querySelector('span');
                if (content) content.classList.add('hidden');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            });
        }
    });
}

// Load header, footer and other content
Promise.all([
    fetch('header.html').then(response => response.text()),
    fetch('footer.html').then(response => response.text()),
]).then(([headerData, footerData, blogsData]) => {
    // Insert the content
    document.getElementById('header-placeholder').innerHTML = headerData;
    document.getElementById('footer-placeholder').innerHTML = footerData;
    
    initializeHeaderEvents();
    initializeEventListeners();
}).catch(error => {
    console.error('Error loading content:', error);
});
