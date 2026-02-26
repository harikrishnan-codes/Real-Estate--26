// hamburger js

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});








// hero js

const slides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 5000);








// about stats js

const counters = document.querySelectorAll('.counter');
const statsSection = document.querySelector('#stats');

let started = false;

const startCounter = () => {

    counters.forEach(counter => {

        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000; // animation time
        const increment = target / (duration / 16);

        let count = 0;

        const updateCount = () => {
            count += increment;

            if (count < target) {
                counter.innerText = isDecimal
                    ? count.toFixed(2)
                    : Math.floor(count).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = isDecimal
                    ? target.toFixed(2)
                    : target.toLocaleString();
            }
        };

        updateCount();
    });

};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            startCounter();
            started = true;
        }
    });
}, {
    threshold: 0.5
});

observer.observe(statsSection);








const tabs = document.querySelectorAll('.tab-btn');
const slider = document.querySelector('.tab-slider');

function updateSlider(element) {
    // Move the dark background to the clicked button's position
    slider.style.width = `${element.offsetWidth}px`;
    slider.style.left = `${element.offsetLeft}px`;
}

// Set initial position
updateSlider(document.querySelector('.tab-btn.active'));

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Remove active class from others
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked
        tab.classList.add('active');
        
        // Move the visual slider
        updateSlider(tab);

        // LOGIC: Change form behavior based on type
        const type = tab.getAttribute('data-type');
        console.log(`Navigating to: ${type} section`);
        
        // You can add logic here to change price ranges 
        // (e.g., lower ranges for Rent, higher for Buy)
    });
});