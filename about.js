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







//count stats js

const counters = document.querySelectorAll('.counter');

const animate = (counter) => {
    const target = +counter.getAttribute('data-target');
    const prefix = counter.getAttribute('data-prefix') || '';
    const suffix = counter.getAttribute('data-suffix') || '';
    
     const increment = target / 100; 

    const updateCount = () => {
        const currentText = counter.innerText.replace(/[^\d.]/g, '');
        const count = parseFloat(currentText) || 0;

        if (count < target) {
            const nextVal = count + increment;
            counter.innerText = prefix + (target % 1 !== 0 ? nextVal.toFixed(1) : Math.ceil(nextVal)) + suffix;
            setTimeout(updateCount, 20); 
        } else {
            counter.innerText = prefix + target + suffix;
        }
    };
    updateCount();
};

const observerOptions = {
    threshold: 0.2  
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
             animate(entry.target);
        } else {
             const prefix = entry.target.getAttribute('data-prefix') || '';
            const suffix = entry.target.getAttribute('data-suffix') || '';
            entry.target.innerText = prefix + "0" + suffix;
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));






// founder js 

document.addEventListener('DOMContentLoaded', () => {
    const signaturePath = document.querySelector('#signature-path');
    const founderSection = document.querySelector('#founder-section');
    const frame = document.querySelector('.frame-decoration');

     const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                signaturePath.style.transition = "stroke-dashoffset 2s ease-in-out";
                signaturePath.style.strokeDashoffset = "0";
            } else {
                signaturePath.style.strokeDashoffset = "1000";  
            }
        });
    }, { threshold: 0.5 });

    observer.observe(founderSection);

     founderSection.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        frame.style.transform = `translateX(${x}px) translateY(${y}px)`;
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