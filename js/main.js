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
            this.classList.toggle('active');
        });
    }

    // Chat Widget Toggle
    const chatToggle = document.querySelector('.chat-toggle');
    const chatPopup = document.querySelector('.chat-popup');
    const chatClose = document.querySelector('.chat-close');
    
    if (chatToggle && chatPopup && chatClose) {
        chatToggle.addEventListener('click', function() {
            chatPopup.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        chatClose.addEventListener('click', function() {
            chatPopup.classList.remove('active');
            chatToggle.classList.remove('active');
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
    
    // Initial check for animations
    animateOnScroll();
    
    // Check for animations on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Clean URL handling
    handleCleanUrls();
});

// Function to handle clean URLs
function handleCleanUrls() {
    // Get current URL path
    const path = window.location.pathname;
    const isHtmlPage = path.endsWith('.html');
    
    // Check if we're in a development environment
    const isDevelopment = window.location.hostname === 'localhost' || 
                         window.location.hostname.includes('127.0.0.1') ||
                         window.location.hostname.includes('.test') ||
                         window.location.hostname.includes('.local') ||
                         window.location.protocol === 'file:';
    
    // For local development, always use .html extensions
    if (isDevelopment) {
        // Update all internal links to use .html explicitly
        const internalLinks = document.querySelectorAll('a[href]');
        internalLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Skip external links, anchor links, and links that already have .html
            if (!href || href.startsWith('http') || href.startsWith('#') || href.includes('.html')) {
                return;
            }
            
            // Skip links to files with other extensions (images, css, js, etc.)
            if (href.match(/\.(jpg|jpeg|png|gif|svg|css|js|pdf|zip|doc|xls)$/i)) {
                return;
            }
            
            // Handle root path
            if (href === '/') {
                link.setAttribute('href', 'index.html');
                return;
            }
            
            // Add .html to internal links
            if (href.startsWith('/')) {
                // Remove the leading slash and add .html
                const cleanUrl = href.substring(1) + '.html';
                link.setAttribute('href', cleanUrl);
            } else if (!href.endsWith('/')) {
                // Add .html to relative links
                link.setAttribute('href', href + '.html');
            }
        });
    } else {
        // In production, use clean URLs
        // Update all internal links to use clean URLs (no .html)
        const internalLinks = document.querySelectorAll('a[href$=".html"]');
        internalLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Skip admin links
            if (href.includes('admin')) {
                return;
            }
            
            // Remove .html extension for clean URLs
            const cleanUrl = href.replace('.html', '');
            link.setAttribute('href', cleanUrl);
        });
        
        // If we're on an .html page in production, redirect to the clean URL
        if (isHtmlPage && !path.includes('admin')) {
            const cleanUrl = path.replace('.html', '');
            // Use history.replaceState to change the URL without reloading
            history.replaceState(null, document.title, cleanUrl);
        }
    }
} 