const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 100;
                
                const updateCounter = () => {
                    const current = +counter.innerText;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                
                updateCounter();
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
    formMessage.className = 'form-message success';
    
    contactForm.reset();
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});
