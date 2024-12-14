// Gallery initialization and control
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const pageButtons = document.querySelectorAll('.page-btn');

    function showPage(pageNumber) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.add('hidden');
        });
        
        // Remove active class from all buttons
        pageButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected page and activate button
        const selectedPage = document.querySelector(`[data-page="${pageNumber}"]`);
        const selectedButton = document.querySelector(`.page-btn[data-page="${pageNumber}"]`);
        
        if (selectedPage && selectedButton) {
            selectedPage.classList.remove('hidden');
            selectedButton.classList.add('active');
        }
    }

    // Add click event listeners to page buttons
    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageNumber = button.getAttribute('data-page');
            showPage(pageNumber);
        });
    });

    // Initialize first page
    showPage('1');
});