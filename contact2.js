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
    const fields = document.querySelectorAll('.animate-field');
    const trigger = document.querySelector('#inquiry-trigger');

    const observerOptions = {
        threshold: 0.2
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Staggered reveal using JS
                fields.forEach((field, index) => {
                    setTimeout(() => {
                        field.style.opacity = "1";
                        field.style.transform = "translateY(0)";
                        field.style.transition = "all 0.6s ease-out";
                    }, index * 150); // 150ms delay between each field
                });
                revealObserver.unobserve(trigger);
            }
        });
    }, observerOptions);

    revealObserver.observe(trigger);
});










document.addEventListener('mousemove', (e) => {
    const magneticItems = document.querySelectorAll('.magnetic-item');

    magneticItems.forEach(item => {
        const strength = item.getAttribute('data-strength') || 30;
        const rect = item.getBoundingClientRect();
        
        // Calculate center of the element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Distance between mouse and center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // If mouse is close enough, move the element
        if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
            item.style.transform = `translate(${distanceX / strength * 15}px, ${distanceY / strength * 15}px)`;
            item.style.transition = 'transform 0.1s ease-out';
        } else {
            item.style.transform = 'translate(0, 0)';
            item.style.transition = 'transform 0.5s ease-out';
        }
    });
});