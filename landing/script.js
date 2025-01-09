// Get all category buttons within each category-line
const categoryLines = document.querySelectorAll('.category-line');

// Add click event listener to each category button
categoryLines.forEach(line => {
    line.addEventListener('click', function(e) {
        // Check if the clicked element is a category button
        if (e.target.classList.contains('category-btn')) {
            // Get the category line
            const line = e.target.closest('.category-line');
            
            // Toggle the "open" class on the category line to show/hide the links in all categories in that line
            line.classList.toggle('open');
        }
    });
});
