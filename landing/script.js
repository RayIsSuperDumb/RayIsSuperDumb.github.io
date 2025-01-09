// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const link = category.querySelector('.category-link');
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior

            // Close all other categories in the same line
            const line = category.closest('.line');
            const allCategories = line.querySelectorAll('.category');
            allCategories.forEach(cat => {
                if (cat !== category) {
                    cat.classList.remove('expanded');
                }
            });

            // Toggle the expanded state of the clicked category
            category.classList.toggle('expanded');
        });
    });
});
