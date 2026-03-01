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
    const cards = document.querySelectorAll('.reveal-card');
    const trigger = document.querySelector('#amenity-trigger');

    const observerOptions = {
        threshold: 0.2
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stagger logic
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, index * 200); // 200ms delay between cards
                });
                revealObserver.unobserve(trigger);
            }
        });
    }, observerOptions);

    revealObserver.observe(trigger);
});










window.addEventListener('scroll', () => {
    const trigger = document.querySelector('#parallax-trigger');
    const img = document.querySelector('#parallax-img');
    const text = document.querySelector('#parallax-text');
    
    // Calculate how much of the section is visible
    const sectionTop = trigger.offsetTop;
    const scrollPos = window.pageYOffset;
    const distance = scrollPos - sectionTop;

    // Check if the section is in the viewport
    if (scrollPos > sectionTop - window.innerHeight && scrollPos < sectionTop + trigger.offsetHeight) {
        
        // Move image slowly downwards (Parallax)
        img.style.transform = `translateY(${distance * 0.15}px)`;
        
        // Move text slightly upwards for a "floating" feel
        text.style.transform = `translateY(${distance * -0.05}px)`;
    }
});











document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('#viewing-trigger');
    const cLeft = document.querySelector('.curtain-left');
    const cRight = document.querySelector('.curtain-right');
    const content = document.querySelector('.viewing-content');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Open curtains
                cLeft.style.transform = "translateX(-100%)";
                cRight.style.transform = "translateX(100%)";
                
                // Fade in content
                content.style.opacity = "1";
                content.style.transform = "scale(1)";
                
                revealObserver.unobserve(trigger);
            }
        });
    }, { threshold: 0.4 });

    revealObserver.observe(trigger);
});