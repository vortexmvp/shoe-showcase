document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Animations (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 2. Men / Women Toggle Logic
    const btnMen = document.getElementById('btn-men');
    const btnWomen = document.getElementById('btn-women');
    const itemsMen = document.querySelectorAll('.item-men');
    const itemsWomen = document.querySelectorAll('.item-women');

    if (btnMen && btnWomen) {
        btnMen.addEventListener('click', () => {
            btnMen.classList.add('active');
            btnWomen.classList.remove('active');
            
            itemsMen.forEach(item => {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('appear'), 50); // Re-trigger animation
            });
            itemsWomen.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('appear');
            });
        });

        btnWomen.addEventListener('click', () => {
            btnWomen.classList.add('active');
            btnMen.classList.remove('active');
            
            itemsWomen.forEach(item => {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('appear'), 50);
            });
            itemsMen.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('appear');
            });
        });
    }
});