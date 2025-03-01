/**
 * Softalyx - Atlassian Solutions Partner
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Chat Widget Toggle
    const chatToggle = document.querySelector('.chat-toggle');
    const chatPopup = document.querySelector('.chat-popup');
    const chatClose = document.querySelector('.chat-close');
    
    if (chatToggle && chatPopup && chatClose) {
        chatToggle.addEventListener('click', function() {
            chatPopup.style.display = 'block';
        });
        
        chatClose.addEventListener('click', function() {
            chatPopup.style.display = 'none';
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                faqItem.classList.toggle('active');
                
                // Close other open FAQs
                const allFaqItems = document.querySelectorAll('.faq-item');
                allFaqItems.forEach(item => {
                    if (item !== faqItem && item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });
            });
        });
    }

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    const projectForm = document.getElementById('project-form');
    
    function validateForm(form) {
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    let errorMessage = field.nextElementSibling;
                    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                        errorMessage = document.createElement('div');
                        errorMessage.classList.add('error-message');
                        errorMessage.textContent = 'This field is required';
                        field.parentNode.insertBefore(errorMessage, field.nextSibling);
                    }
                } else {
                    field.classList.remove('error');
                    
                    // Remove error message if it exists
                    const errorMessage = field.nextElementSibling;
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.remove();
                    }
                    
                    // Email validation
                    if (field.type === 'email' && !isValidEmail(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                        
                        let errorMessage = field.nextElementSibling;
                        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                            errorMessage = document.createElement('div');
                            errorMessage.classList.add('error-message');
                            errorMessage.textContent = 'Please enter a valid email address';
                            field.parentNode.insertBefore(errorMessage, field.nextSibling);
                        }
                    }
                }
            });
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.textContent = 'Your message has been sent successfully. We will get back to you soon!';
                
                form.appendChild(successMessage);
                
                // Reset form
                form.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
        
        // Remove error styling on input
        const formInputs = form.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
                
                // Remove error message if it exists
                const errorMessage = this.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.remove();
                }
            });
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    validateForm(contactForm);
    validateForm(projectForm);

    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-card, .service-card, .contact-card, .feature');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .benefit-card, .service-card, .contact-card, .feature {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .benefit-card.animate, .service-card.animate, .contact-card.animate, .feature.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .error {
            border-color: var(--danger) !important;
        }
        
        .error-message {
            color: var(--danger);
            font-size: 14px;
            margin-top: 5px;
        }
        
        .success-message {
            background-color: var(--success);
            color: white;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
    
    // Run on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 