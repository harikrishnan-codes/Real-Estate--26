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







document.querySelectorAll('.city-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Update Buttons
        document.querySelector('.city-btn.active').classList.remove('active');
        button.classList.add('active');

        const bg = document.getElementById('city-bg');
        const cityTitle = document.getElementById('office-city');
        const address = document.getElementById('office-address');
        const time = document.getElementById('office-time');
        const lang = document.getElementById('office-lang');

        // Animation Sequence
        bg.style.opacity = "0";
        bg.style.transform = "scale(1.1)";

        setTimeout(() => {
            // Update Data from attributes
            bg.style.backgroundImage = `url('${button.dataset.img}')`;
            cityTitle.innerText = button.dataset.city;
            address.innerText = button.dataset.address;
            time.innerText = button.dataset.time;
            lang.innerText = button.dataset.lang;

            // Fade Back In
            bg.style.opacity = "1";
            bg.style.transform = "scale(1)";
        }, 400);
    });
});










document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        
        // Close other items
        document.querySelectorAll('.acc-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});