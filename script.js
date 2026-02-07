document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hover effect for links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });

    // Fade-in Animation on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Star Generation
    const starsContainer = document.getElementById('stars-container');
    const starCount = 15; // Reduced from 50

    if (starsContainer) {
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            // Random positioning
            const x = Math.random() * 100;
            const y = Math.random() * 100;

            // Random size (Bigger for hand drawn feel: 25px to 50px)
            const size = Math.random() * 25 + 25;

            // Random rotation
            const rotation = Math.random() * 360;

            // Random duration
            const duration = Math.random() * 3 + 2; // 2s to 5s

            // Random Variant (1, 2, or 3)
            const variant = Math.floor(Math.random() * 3) + 1;
            star.classList.add(`star-v${variant}`);

            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.transform = `rotate(${rotation}deg)`; // Initial rotation
            star.style.setProperty('--duration', `${duration}s`);

            starsContainer.appendChild(star);
        }
    }
});
