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






// services js

const tabs = document.querySelectorAll('.tab-btn');
const slider = document.querySelector('.tab-slider');

function updateSlider(element) {
     slider.style.width = `${element.offsetWidth}px`;
    slider.style.left = `${element.offsetLeft}px`;
}

 updateSlider(document.querySelector('.tab-btn.active'));

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
         tabs.forEach(t => t.classList.remove('active'));
        
         tab.classList.add('active');
        
         updateSlider(tab);

         const type = tab.getAttribute('data-type');
        console.log(`Navigating to: ${type} section`);
        
        
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