// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formMessage = document.getElementById('form-message');
        const formData = new FormData(contactForm);

        // Get form values
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const projectType = formData.get('project-type');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !phone || !message) {
            formMessage.textContent = 'אנא מלא את כל השדות החובה';
            formMessage.className = 'form-message error';
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = 'אנא הזן כתובת אימייל תקינה';
            formMessage.className = 'form-message error';
            return;
        }

        // Simulate form submission (in production, this would send to a server)
        // For GitHub Pages, you can integrate with services like Formspree, Netlify Forms, or EmailJS

        // Success message
        formMessage.textContent = 'תודה רבה! ההודעה נשלחה בהצלחה. ניצור איתך קשר בקרוב.';
        formMessage.className = 'form-message success';

        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);

        // In production, integrate with a form service:
        // Example with Formspree:
        /*
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                formMessage.textContent = 'תודה רבה! ההודעה נשלחה בהצלחה.';
                formMessage.className = 'form-message success';
                contactForm.reset();
            } else {
                formMessage.textContent = 'אירעה שגיאה. אנא נסה שוב מאוחר יותר.';
                formMessage.className = 'form-message error';
            }
        })
        .catch(error => {
            formMessage.textContent = 'אירעה שגיאה. אנא נסה שוב מאוחר יותר.';
            formMessage.className = 'form-message error';
        });
        */
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.project-card, .innovation-card, .value-card, .team-card, .faq-item, .contact-info-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
