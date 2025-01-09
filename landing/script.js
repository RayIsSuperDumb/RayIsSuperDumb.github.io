// Get the dropdown button and the dropdown content
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle dropdown menu visibility when the button is clicked
dropdownBtn.addEventListener('click', function() {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

// Close the dropdown menu if clicked outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-content a')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
});
