// hamburger js

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




// dropdown js

const dropdown = document.querySelector(".dropdown");
const arrow = document.querySelector(".mobile-arrow");

arrow.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();   // Prevent link click
    dropdown.classList.toggle("active");
});





// expertise js

const cards = document.querySelectorAll('.mag-card');
const section = document.querySelector('.magnetic-services');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;

        section.style.backgroundColor = card.getAttribute('data-bg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `translate(0px, 0px)`;
        section.style.backgroundColor = '#ffffff';
    });
});









// concept 1 js

window.addEventListener('scroll', () => {
    const pinSection = document.getElementById('horizontal-pin');
    const track = document.getElementById('scroll-track');

    const sectionTop = pinSection.offsetTop;
    const sectionHeight = pinSection.offsetHeight;
    const scrollPos = window.pageYOffset;

    if (scrollPos >= sectionTop && scrollPos <= (sectionTop + sectionHeight - window.innerHeight)) {
        const scrollFraction = (scrollPos - sectionTop) / (sectionHeight - window.innerHeight);
        const maxMove = track.scrollWidth - window.innerWidth;

        track.style.transform = `translateX(${-scrollFraction * maxMove}px)`;
    }
});








// direct access js

function revealPartner(element) {
    document.querySelectorAll('.partner-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');

    const photo = document.getElementById('partner-photo');
    const newImg = element.getAttribute('data-img');

    photo.style.opacity = '0';
    photo.style.transform = 'scale(1.1)';

    setTimeout(() => {
        photo.src = newImg + "?auto=format&fit=crop&w=800&q=80";
        photo.style.opacity = '1';
        photo.style.transform = 'scale(1)';
    }, 400);
}








// FAQ js

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const answer = button.nextElementSibling;

        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});