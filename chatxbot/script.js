// Currency and location handling
async function handleCurrencyAndLocation() {
    try {
        // Try to get country from IP
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const isChile = data.country_code === 'CL';
        
        // Get stored language preference or set based on location
        const storedLang = localStorage.getItem('preferred-language');
        if (storedLang) {
            changeLanguage(storedLang);
        } else if (isChile) {
            changeLanguage('es');
        } else {
            changeLanguage('en');
        }
        
        // Update prices based on location
        const priceElements = document.querySelectorAll('.price[data-usd]');
        priceElements.forEach(element => {
            const usdPrice = element.dataset.usd;
            const clpPrice = element.dataset.clp;
            
            if (isChile || document.documentElement.lang === 'es') {
                element.querySelector('.currency').textContent = '$';
                element.querySelector('.amount').textContent = clpPrice;
                element.querySelector('.period').textContent = '/mes';
            } else {
                element.querySelector('.currency').textContent = '$';
                element.querySelector('.amount').textContent = usdPrice;
                element.querySelector('.period').textContent = '/month';
            }
        });
    } catch (error) {
        console.error('Error detecting location:', error);
        // Fallback to English and USD
        changeLanguage('en');
    }
}

// Language handling
function changeLanguage(lang) {
    // Update all elements with data-en and data-es attributes
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update payment button URLs
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.onclick = () => {
            window.open(btn.getAttribute('data-url-' + lang), '_blank');
        };
    });
    
    // Update prices based on language
    const priceElements = document.querySelectorAll('.price[data-usd]');
    priceElements.forEach(element => {
        const usdPrice = element.dataset.usd;
        const clpPrice = element.dataset.clp;
        
        if (lang === 'es') {
            element.querySelector('.currency').textContent = '$';
            element.querySelector('.amount').textContent = clpPrice;
            element.querySelector('.period').textContent = '/mes';
        } else {
            element.querySelector('.currency').textContent = '$';
            element.querySelector('.amount').textContent = usdPrice;
            element.querySelector('.period').textContent = '/month';
        }
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize payment buttons
function initializePaymentButtons() {
    const currentLang = document.documentElement.lang || 'en';
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.onclick = () => {
            window.open(btn.getAttribute('data-url-' + currentLang), '_blank');
        };
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('p');
    
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('p').style.maxHeight = null;
        });
        
        // Toggle current FAQ item
        if (!isOpen) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Form validation for CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your form handling or redirect logic here
        console.log('CTA button clicked');
    });
});

// Mobile menu functionality
const createMobileMenu = () => {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('.nav-container');
    nav.insertBefore(mobileMenuButton, nav.firstChild);
    
    mobileMenuButton.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
};

// Initialize mobile menu if screen width is below 768px
if (window.innerWidth < 768) {
    createMobileMenu();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    handleCurrencyAndLocation();
    initializePaymentButtons();
    
    // Add fade-in animation to metrics
    document.querySelectorAll('.metric').forEach((metric, index) => {
        metric.style.animationDelay = `${index * 0.2}s`;
        metric.classList.add('fade-in');
    });
    
    // Add hover effects to cards
    document.querySelectorAll('.problem-card, .solution-card, .benefit-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
});
