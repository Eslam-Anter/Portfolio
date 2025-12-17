// ============================================
// PREMIUM ARABIC PORTFOLIO - MAIN SCRIPT
// ============================================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
    
    initMenuToggle();
    smoothScroll();
    setupFormSubmission();
});

// ========== MOBILE MENU TOGGLE ==========
function initMenuToggle() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ========== SMOOTH SCROLL ==========
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ========== FORM SUBMISSION ==========
function setupFormSubmission() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            message: this.querySelector('textarea').value
        };
        
        // Show success message
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'تم إرسال الرسالة بنجاح ✓';
        submitBtn.style.background = '#10b981';
        
        // Reset form
        this.reset();
        
        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
        
        console.log('Message sent:', data);
    });
}

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 16px rgba(10, 26, 47, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(10, 26, 47, 0.05)';
    }
});

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', () => {
    const blobs = document.querySelectorAll('.gradient-blob');
    blobs.forEach((blob, index) => {
        const scrollY = window.scrollY;
        const offset = (scrollY * (0.1 + index * 0.05));
        blob.style.transform = `translate(0, ${offset}px)`;
    });
});

// ========== COUNTER ANIMATION ==========
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }
        element.textContent = Math.round(current) + (element.textContent.includes('+') ? '+' : '');
    }, 16);
}

// Trigger counter animation when stats become visible
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const number = parseInt(statNumber.textContent);
                animateCounter(statNumber, number);
                entry.target.classList.add('animated');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.featured-stats').forEach(stats => {
    observer.observe(stats);
});

// ========== UTILITY: Add mobile menu CSS dynamically ==========
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
                position: fixed;
                top: 60px;
                right: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                gap: 0;
                padding: 20px;
                box-shadow: 0 8px 32px rgba(10, 26, 47, 0.1);
                animation: slideDown 0.3s ease;
            }
            
            .nav-menu.active {
                display: flex;
            }
            
            .nav-menu li {
                padding: 12px 0;
                border-bottom: 1px solid #e6e6e6;
            }
            
            .nav-menu li:last-child {
                border-bottom: none;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(8px, 8px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(8px, -8px);
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    `;
    document.head.appendChild(style);
});
