const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



 


const dropdown = document.querySelector(".dropdown");
const arrow = document.querySelector(".mobile-arrow");

arrow.addEventListener("click", (e) => {
    e.preventDefault();   // stop page jump
    dropdown.classList.toggle("active");
});







const cards = document.querySelectorAll('.mag-card');
const section = document.querySelector('.magnetic-services');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Pull the card 15% toward the mouse
        card.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        
        // Change section background to card's data-bg
        section.style.backgroundColor = card.getAttribute('data-bg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `translate(0px, 0px)`;
        section.style.backgroundColor = '#ffffff';
    });
});











window.addEventListener('scroll', () => {
    const pinSection = document.getElementById('horizontal-pin');
    const track = document.getElementById('scroll-track');
    
    const sectionTop = pinSection.offsetTop;
    const sectionHeight = pinSection.offsetHeight;
    const scrollPos = window.pageYOffset;

    // Check if user is within the sticky section
    if (scrollPos >= sectionTop && scrollPos <= (sectionTop + sectionHeight - window.innerHeight)) {
        const scrollFraction = (scrollPos - sectionTop) / (sectionHeight - window.innerHeight);
        const maxMove = track.scrollWidth - window.innerWidth;
        
        // Move track horizontally
        track.style.transform = `translateX(${-scrollFraction * maxMove}px)`;
    }
});










function revealPartner(element) {
    // 1. Update Accordion Classes
    document.querySelectorAll('.partner-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');

    // 2. Animate Image Swap
    const photo = document.getElementById('partner-photo');
    const newImg = element.getAttribute('data-img');

    // Shutter effect
    photo.style.opacity = '0';
    photo.style.transform = 'scale(1.1)';

    setTimeout(() => {
        photo.src = newImg + "?auto=format&fit=crop&w=800&q=80";
        photo.style.opacity = '1';
        photo.style.transform = 'scale(1)';
    }, 400);
}










document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const answer = button.nextElementSibling;
        
        // Toggle Active
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});