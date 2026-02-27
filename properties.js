// hamburger js

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    document.body.classList.toggle("menu-open");
});










// hero js

const slides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 5000);







// curated js

const panels = document.querySelectorAll('.acc-panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}







const links = document.querySelectorAll('.tab-link');
const cards = document.querySelectorAll('.gallery-card');

function filterGallery(category) {
    // 1. Update Active Link UI
    links.forEach(l => l.classList.remove('active'));
    const activeLink = Array.from(links).find(l => l.dataset.category === category);
    if(activeLink) activeLink.classList.add('active');

    // 2. Filter Cards
    cards.forEach(card => {
        card.classList.remove('show'); // Start fade out
        
        // Short timeout for smooth transition effect
        setTimeout(() => {
            if (category === 'all' || card.classList.contains(category)) {
                card.classList.add('show');
            }
        }, 50);
    });
}

// Add Event Listeners for both Hover and Click
links.forEach(link => {
    const category = link.getAttribute('data-category');
    
    // Hover Trigger
    link.addEventListener('mouseenter', () => filterGallery(category));
    
    // Click Trigger (for mobile or intentional selection)
    link.addEventListener('click', (e) => {
        e.preventDefault();
        filterGallery(category);
    });
});








// testimonial js

const thumbs = document.querySelectorAll(".user-thumbs img");
const contents = document.querySelectorAll(".testimonial-content");

thumbs.forEach((img, index) => {

    img.addEventListener("mouseenter", () => {

        thumbs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        img.classList.add("active");
        contents[index].classList.add("active");
    });

});