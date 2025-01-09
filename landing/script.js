function toggleNav() {
    const navList = document.getElementById('navList');
    navList.classList.toggle('open');
}

function redirectToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

