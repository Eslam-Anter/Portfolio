/* ========================================
   CHEMIST PORTFOLIO - JAVASCRIPT
   Language Toggle, Theme Toggle, Animations & Interactions
   ======================================== */

// ========== LANGUAGE MANAGEMENT ==========
const DEFAULT_LANGUAGE = 'en';
let currentLanguage = localStorage.getItem('language') || DEFAULT_LANGUAGE;

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeTheme();
    setupEventListeners();
    observeElementsForAnimation();
});

// Set initial language
function initializeLanguage() {
    setLanguage(currentLanguage);
}

// Change language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all text elements
    updateLanguageContent(lang);
    updatePlaceholders(lang);
    updateLanguageToggleButton();
}

// Update all content based on language
function updateLanguageContent(lang) {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const content = element.getAttribute(`data-${lang}`);
        if (content) {
            element.textContent = content;
        }
    });
}

// Update form placeholders
function updatePlaceholders(lang) {
    const inputs = document.querySelectorAll('[data-en-placeholder][data-ar-placeholder]');
    inputs.forEach(input => {
        const placeholderAttr = lang === 'ar' ? 'data-ar-placeholder' : 'data-en-placeholder';
        const placeholder = input.getAttribute(placeholderAttr);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
}

// Update language toggle button text
function updateLanguageToggleButton() {
    const langButtons = document.querySelectorAll('.lang-toggle, #langToggle, #footerLangToggle');
    langButtons.forEach(btn => {
        const newLang = currentLanguage === 'en' ? 'ar' : 'en';
        const newLabel = currentLanguage === 'en' ? 'AR' : 'EN';
        btn.textContent = newLabel;
        btn.setAttribute('aria-label', `Switch to ${newLang === 'ar' ? 'Arabic' : 'English'}`);
    });
}

// ========== THEME MANAGEMENT ==========
const THEME_KEY = 'theme-mode';
const DARK_MODE_CLASS = 'dark-mode';
const SYSTEM_PREFERENCE = window.matchMedia('(prefers-color-scheme: dark)');

// Initialize theme
function initializeTheme() {
    let theme = localStorage.getItem(THEME_KEY);
    
    // If no saved preference, use system preference
    if (!theme) {
        theme = SYSTEM_PREFERENCE.matches ? 'dark' : 'light';
    }
    
    applyTheme(theme);
    updateThemeToggleIcon();
}

// Apply theme
function applyTheme(theme) {
    const isDark = theme === 'dark';
    const html = document.documentElement;
    
    if (isDark) {
        html.classList.add(DARK_MODE_CLASS);
        document.body.classList.add(DARK_MODE_CLASS);
    } else {
        html.classList.remove(DARK_MODE_CLASS);
        document.body.classList.remove(DARK_MODE_CLASS);
    }
    
    localStorage.setItem(THEME_KEY, theme);
}

// Toggle theme
function toggleTheme() {
    const isDark = document.body.classList.contains(DARK_MODE_CLASS);
    applyTheme(isDark ? 'light' : 'dark');
    updateThemeToggleIcon();
}

// Update theme toggle icon
function updateThemeToggleIcon() {
    const themeToggles = document.querySelectorAll('.theme-toggle, #themeToggle, #footerThemeToggle');
    const isDark = document.body.classList.contains(DARK_MODE_CLASS);
    
    themeToggles.forEach(toggle => {
        const icon = toggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    });
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Language toggle buttons
    const langToggles = document.querySelectorAll('#langToggle, .lang-toggle, #footerLangToggle');
    langToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    });
    
    // Theme toggle buttons
    const themeToggles = document.querySelectorAll('#themeToggle, .theme-toggle, #footerThemeToggle');
    themeToggles.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
    
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
            }
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Listen for system theme preference changes
    SYSTEM_PREFERENCE.addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
            updateThemeToggleIcon();
        }
    });
}

// ========== FORM HANDLING ==========
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formFeedback = document.getElementById('formFeedback');
    
    // Get form data
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(form)) {
        showFeedback(formFeedback, 'error', currentLanguage === 'ar' 
            ? 'الرجاء ملء جميع الحقول بشكل صحيح' 
            : 'Please fill in all fields correctly');
        return;
    }
    
    // Show success message (front-end only)
    showFeedback(formFeedback, 'success', currentLanguage === 'ar'
        ? 'تم استقبال رسالتك! شكراً للتواصل معنا'
        : 'Message received! Thank you for contacting us');
    
    // Reset form
    form.reset();
    
    // Clear feedback after 5 seconds
    setTimeout(() => {
        formFeedback.textContent = '';
        formFeedback.className = 'form-feedback';
    }, 5000);
}

// Validate form
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '';
        }
        
        // Email validation
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#dc3545';
            }
        }
    });
    
    return isValid;
}

// Show form feedback
function showFeedback(element, type, message) {
    element.textContent = message;
    element.className = `form-feedback ${type}`;
}

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
function observeElementsForAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 
                        (entry.target.classList.contains('fade-in-left') ? 'fade-in-left' : 'fade-in-right') 
                        + ' 0.8s ease-out forwards';
                }
                
                // Trigger animation for other elements
                if (entry.target.classList.contains('fade-in-left') || 
                    entry.target.classList.contains('fade-in-right') ||
                    entry.target.classList.contains('fade-in-up') ||
                    entry.target.classList.contains('skill-card') ||
                    entry.target.classList.contains('service-card') ||
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('certificate-card') ||
                    entry.target.classList.contains('testimonial-card')) {
                    
                    entry.target.style.opacity = '1';
                    const animationName = entry.target.classList.contains('fade-in-left') ? 'fade-in-left' :
                                         entry.target.classList.contains('fade-in-right') ? 'fade-in-right' :
                                         'fade-in-up';
                    entry.target.style.animation = `${animationName} 0.8s ease-out forwards`;
                }
                
                // Animate skill progress bars
                if (entry.target.classList.contains('skill-progress')) {
                    entry.target.style.animation = 'progress-animation 1.5s ease-out forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements with animations
    const animatedElements = document.querySelectorAll(
        '.fade-in-left, .fade-in-right, .fade-in-up, .skill-card, .service-card, ' +
        '.project-card, .certificate-card, .testimonial-card, .skill-progress, .timeline-item'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== NAVBAR TRANSPARENCY ON SCROLL ==========
const navbar = document.querySelector('.navbar');
let lastScrollPos = 0;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    if (scrollPos > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 102, 204, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Hide navbar when scrolling down, show when scrolling up
    if (scrollPos > lastScrollPos && scrollPos > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollPos = scrollPos <= 0 ? 0 : scrollPos;
});

// Add transition to navbar transform
navbar.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';

// ========== ACTIVE NAV LINK ON SCROLL ==========
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'inherit';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--secondary-color)';
            link.style.fontWeight = '700';
        }
    });
});

// ========== PARALLAX EFFECT ON HERO ==========
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        const blobs = document.querySelectorAll('.gradient-blob');
        blobs.forEach((blob, index) => {
            const speed = 0.5 + (index * 0.1);
            blob.style.transform = `translateY(${scrollPos * speed}px)`;
        });
    });
}

// ========== PARTICLE ANIMATION BACKGROUND ==========
function createParticles() {
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 2
        });
    }
    
    return particles;
}

// ========== TYPING EFFECT FOR HERO TITLE ==========
function typeWriterEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// ========== COUNTER ANIMATION ==========
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const range = target - start;
    const increment = target / (duration / 16);
    let current = start;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========== UTILITY FUNCTIONS ==========

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get current language
function getLanguage() {
    return currentLanguage;
}

// Get current theme
function getTheme() {
    return document.body.classList.contains('dark-mode') ? 'dark' : 'light';
}

// Convert text direction
function getCurrentDirection() {
    return document.documentElement.dir;
}

// ========== ACCESSIBILITY ENHANCEMENTS ==========

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Skip to main content (Alt + 1)
    if (e.altKey && e.key === '1') {
        document.querySelector('section').focus();
    }
    
    // Toggle dark mode (Alt + D)
    if (e.altKey && e.key === 'd') {
        toggleTheme();
    }
    
    // Toggle language (Alt + L)
    if (e.altKey && e.key === 'l') {
        const newLang = currentLanguage === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    }
});

// Announce dynamic content changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// ========== PAGE VISIBILITY API ==========
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause animations if needed
        document.body.style.opacity = '0.5';
    } else {
        // Page is visible
        document.body.style.opacity = '1';
    }
});

// ========== PRELOAD IMAGES ==========
function preloadImages() {
    const imagesToPreload = [
        // Add your image paths here when you add images
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload images on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

// ========== PERFORMANCE OPTIMIZATION ==========

// Lazy load images when available
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.src) {
                entry.target.src = entry.target.dataset.src;
                entry.target.removeAttribute('data-src');
                imageObserver.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== EXPORT FUNCTIONS FOR EXTERNAL USE ==========
window.portfolioApp = {
    setLanguage,
    toggleTheme,
    getLanguage,
    getTheme,
    getCurrentDirection,
    announceToScreenReader
};

console.log('Portfolio initialized successfully! 🧪');
console.log('Use window.portfolioApp to access public functions');
