const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});






// page indicator js

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 80;
const mouse = { x: null, y: null, radius: 150 };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;

         if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
        if (p.y > canvas.height || p.y < 0) p.speedY *= -1;

         ctx.fillStyle = 'rgba(212, 163, 115, 0.5)';  
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

         for (let j = index; j < particles.length; j++) {
            const dx = p.x - particles[j].x;
            const dy = p.y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance/100})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();









document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#filmstrip-section');
    const track = document.querySelector('#filmstrip-track');

    section.addEventListener('mousemove', (e) => {
        // Calculate mouse position as a percentage of window width
        const mouseX = e.clientX;
        const windowWidth = window.innerWidth;
        const movePercent = mouseX / windowWidth;

        // Calculate total scrollable width
        const trackWidth = track.scrollWidth;
        const viewWidth = section.offsetWidth;
        const maxMove = trackWidth - viewWidth + 200; // Adds some padding

        // Apply smooth transform
        const finalMove = movePercent * -maxMove;
        
        track.style.transform = `translateX(${finalMove}px)`;
        track.style.transition = "transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)";
    });
});










function updateFocus(element) {
    // Update active class
    document.querySelectorAll('.thumb-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const mainImg = document.getElementById('main-focus-img');
    const title = document.getElementById('focus-title');
    const desc = document.getElementById('focus-desc');

    // Trigger Shutter Animation
    mainImg.style.opacity = '0';
    mainImg.style.transform = 'scale(1.05)';

    setTimeout(() => {
        mainImg.src = element.getAttribute('data-img') + "?auto=format&fit=crop&w=1200&q=80";
        title.innerText = element.getAttribute('data-title');
        desc.innerText = element.getAttribute('data-desc');
        
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
    }, 400);
}










const images = [
    "https://images.unsplash.com/photo-1600607687940-c52fb046599c",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
];

function openLightbox(index) {
    const lightbox = document.getElementById("luxe-lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = images[index] + "?auto=format&fit=crop&w=1600&q=80";
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("luxe-lightbox").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.masonry-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
                }, index * 150); // Staggered entry
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});