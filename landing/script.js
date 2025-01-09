function expandCategory(categoryId) {
    const categoryLinks = document.getElementById(categoryId);
    categoryLinks.style.display = 'block';
}

function collapseCategory(categoryId) {
    const categoryLinks = document.getElementById(categoryId);
    categoryLinks.style.display = 'none';
}
