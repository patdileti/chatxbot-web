// Add fade-in animation to elements as they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// FAQ Accordion
const faqs = [
    {
        question: "What types of AI assistants do you offer?",
        answer: "We offer a wide range of AI assistants, including customer service bots, sales assistants, scheduling assistants, and custom solutions tailored to your specific business needs."
    },
    {
        question: "How long does implementation typically take?",
        answer: "Implementation time varies based on the complexity of your needs. Simple chatbots can be deployed within a week, while more complex automation solutions may take 4-6 weeks."
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support packages that include 24/7 monitoring, regular updates, and continuous optimization of your AI solutions."
    },
    {
        question: "What makes Chatxbot different from other AI companies?",
        answer: "We combine cutting-edge AI technology with deep business expertise to create solutions that deliver real ROI. Our focus is on practical, results-driven implementations rather than just theoretical capabilities."
    },
    {
        question: "How do you ensure data security and privacy?",
        answer: "We implement enterprise-grade security measures, including end-to-end encryption, regular security audits, and compliance with GDPR, CCPA, and other relevant data protection regulations."
    }
];

// Populate FAQ section
const faqGrid = document.querySelector('.faq-grid');
faqs.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    faqItem.innerHTML = `
        <div class="faq-question" onclick="toggleFaq(${index})">
            <h3>${faq.question}</h3>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="faq-answer">
            <p>${faq.answer}</p>
        </div>
    `;
    faqGrid.appendChild(faqItem);
});

// FAQ toggle function
window.toggleFaq = (index) => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems[index].classList.toggle('active');
};

// Testimonials data
const testimonials = [
    {
        name: "Sarah Johnson",
        company: "TechCorp Solutions",
        text: "Chatxbot transformed our customer service operations. We've seen a 60% reduction in response times and significantly improved customer satisfaction.",
        image: "images/testimonial1.jpg"
    },
    {
        name: "Michael Chen",
        company: "Global Innovations",
        text: "The AI assistants have streamlined our internal processes beyond our expectations. What used to take hours now happens in minutes.",
        image: "images/testimonial2.jpg"
    },
    {
        name: "Emily Rodriguez",
        company: "StartUp Ventures",
        text: "As a startup, we needed a cost-effective way to provide 24/7 support. Chatxbot delivered exactly what we needed and more.",
        image: "images/testimonial3.jpg"
    }
];

// Populate testimonials
const testimonialGrid = document.querySelector('.testimonial-grid');
testimonials.forEach(testimonial => {
    const testimonialItem = document.createElement('div');
    testimonialItem.classList.add('testimonial-card');
    testimonialItem.innerHTML = `
        <div class="testimonial-content">
            <div class="stars">
                ${'<i class="fas fa-star"></i>'.repeat(5)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.company}</p>
                </div>
            </div>
        </div>
    `;
    testimonialGrid.appendChild(testimonialItem);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add additional styles for FAQ items
const style = document.createElement('style');
style.textContent = `
    .faq-item {
        background: white;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .faq-question {
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .faq-question h3 {
        margin: 0;
        font-size: 1.1rem;
    }

    .faq-answer {
        padding: 0 1.5rem;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease, padding 0.3s ease;
    }

    .faq-item.active .faq-answer {
        padding: 0 1.5rem 1.5rem;
        max-height: 1000px;
    }

    .faq-question i {
        transition: transform 0.3s ease;
    }

    .faq-item.active .faq-question i {
        transform: rotate(180deg);
    }

    .testimonial-card {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .stars {
        color: #fbbf24;
        margin-bottom: 1rem;
    }

    .testimonial-text {
        font-style: italic;
        margin-bottom: 1.5rem;
    }

    .testimonial-author {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .testimonial-author img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .author-info h4 {
        margin: 0;
        font-size: 1.1rem;
    }

    .author-info p {
        margin: 0;
        color: var(--light-text);
        font-size: 0.9rem;
    }
`;

document.head.appendChild(style);
