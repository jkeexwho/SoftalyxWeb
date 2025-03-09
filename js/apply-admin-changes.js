/**
 * Softalyx - Apply Admin Panel Changes
 * This script applies changes made in the admin panel to the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Apply Contact Information
    applyContactInfo();
    
    // Apply Social Links
    applySocialLinks();
    
    // Apply Work Hours
    applyWorkHours();
    
    // Apply Location
    applyLocation();
    
    // Apply Footer Settings
    applyFooterSettings();
    
    // Apply Logo Settings
    applyLogoSettings();
    
    // Apply FAQs
    applyFaqs();
    
    // Apply Client Logos
    applyClientLogos();
});

// Apply Contact Information
function applyContactInfo() {
    const contactInfo = JSON.parse(localStorage.getItem('contactInfo'));
    if (!contactInfo) return;
    
    // Update phone numbers
    const phoneElements = document.querySelectorAll('.footer-contact p:has(i.fa-phone), .contact-card p:contains("+")');
    phoneElements.forEach(element => {
        if (element.innerHTML.includes('fa-phone') || /\+\d/.test(element.textContent)) {
            // Keep the icon if it exists
            const hasIcon = element.querySelector('i.fa-phone');
            if (hasIcon) {
                element.innerHTML = `<i class="fas fa-phone"></i> ${contactInfo.phoneNumber}`;
            } else {
                element.textContent = contactInfo.phoneNumber;
            }
        }
    });
    
    // Update primary email
    const primaryEmailElements = document.querySelectorAll('a[href^="mailto:"], .footer-contact p:has(i.fa-envelope)');
    primaryEmailElements.forEach(element => {
        if (element.tagName === 'A') {
            element.href = `mailto:${contactInfo.primaryEmail}`;
            element.textContent = contactInfo.primaryEmail;
        } else if (element.innerHTML.includes('fa-envelope')) {
            element.innerHTML = `<i class="fas fa-envelope"></i> ${contactInfo.primaryEmail}`;
        }
    });
    
    // Update secondary email in contact cards
    const secondaryEmailElements = document.querySelectorAll('.contact-card p:contains("@"):not(:contains("+"))');
    secondaryEmailElements.forEach(element => {
        if (element.textContent.includes('@') && !element.textContent.includes(contactInfo.primaryEmail)) {
            element.textContent = contactInfo.secondaryEmail;
        }
    });
}

// Apply Social Links
function applySocialLinks() {
    const socialLinks = JSON.parse(localStorage.getItem('socialLinks'));
    if (!socialLinks) return;
    
    // Update LinkedIn links
    if (socialLinks.linkedin) {
        const linkedinLinks = document.querySelectorAll('a:has(i.fa-linkedin)');
        linkedinLinks.forEach(link => {
            link.href = socialLinks.linkedin;
        });
    }
    
    // Update Telegram links
    if (socialLinks.telegram) {
        const telegramLinks = document.querySelectorAll('a:has(i.fa-telegram)');
        telegramLinks.forEach(link => {
            link.href = socialLinks.telegram;
        });
    }
    
    // Update WhatsApp links
    if (socialLinks.whatsapp) {
        const whatsappLinks = document.querySelectorAll('a:has(i.fa-whatsapp)');
        whatsappLinks.forEach(link => {
            link.href = socialLinks.whatsapp;
        });
    }
}

// Apply Work Hours
function applyWorkHours() {
    const workHours = JSON.parse(localStorage.getItem('workHours'));
    if (!workHours) return;
    
    // Update work hours in contact cards
    const workHoursElements = document.querySelectorAll('.contact-card p:contains("am"), .contact-card p:contains("pm")');
    workHoursElements.forEach(element => {
        if (element.textContent.includes('am') || element.textContent.includes('pm')) {
            element.textContent = `${workHours.days}, ${workHours.hours}`;
        }
    });
}

// Apply Location
function applyLocation() {
    const location = JSON.parse(localStorage.getItem('location')) || {};
    const showLocation = localStorage.getItem('show-location') === 'true';
    console.log('Applying location with visibility:', showLocation);
    
    // Update address in contact cards if addresses exist
    if (location.mainAddress) {
        const mainAddressElement = document.querySelector('.contact-card:has(.fa-map-marker-alt) p:first-of-type');
        if (mainAddressElement) {
            mainAddressElement.textContent = location.mainAddress;
        }
    }
    
    if (location.secondaryAddress) {
        const secondaryAddressElement = document.querySelector('.contact-card:has(.fa-map-marker-alt) p:last-of-type');
        if (secondaryAddressElement) {
            secondaryAddressElement.textContent = location.secondaryAddress;
        }
    }
    
    // Show/hide location sections based on toggle state
    const locationCard = document.querySelector('.contact-card:has(.fa-map-marker-alt)');
    const mapSection = document.querySelector('.map-section');
    
    if (locationCard) {
        locationCard.style.display = showLocation ? 'block' : 'none';
        console.log('Set location card display to:', locationCard.style.display);
    }
    
    if (mapSection) {
        mapSection.style.display = showLocation ? 'block' : 'none';
        console.log('Set map section display to:', mapSection.style.display);
    }
}

// Apply Footer Settings
function applyFooterSettings() {
    const footerSettings = JSON.parse(localStorage.getItem('footerSettings'));
    if (!footerSettings) return;
    
    // Update copyright year
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    copyrightElements.forEach(element => {
        if (element.textContent.includes('©')) {
            element.textContent = element.textContent.replace(/\d{4}/, footerSettings.copyrightYear);
        }
    });
    
    // Update footer tagline
    const taglineElements = document.querySelectorAll('.footer-logo p');
    taglineElements.forEach(element => {
        element.textContent = footerSettings.footerTagline;
    });
}

// Apply Logo Settings
function applyLogoSettings() {
    const logoSettings = JSON.parse(localStorage.getItem('logoSettings'));
    if (!logoSettings) return;
    
    // Update header tagline
    if (logoSettings.headerTagline) {
        const logoTagline = document.querySelector('.logo-tagline');
        if (logoTagline) {
            logoTagline.textContent = logoSettings.headerTagline;
        } else {
            // Create tagline if it doesn't exist
            const logo = document.querySelector('.logo a');
            if (logo) {
                const tagline = document.createElement('span');
                tagline.classList.add('logo-tagline');
                tagline.textContent = logoSettings.headerTagline;
                logo.appendChild(tagline);
            }
        }
    }
    
    // Update logo image
    if (logoSettings.logoImage) {
        const logoImages = document.querySelectorAll('.logo img, .footer-logo img');
        logoImages.forEach(img => {
            img.src = logoSettings.logoImage;
        });
    }
}

// Apply FAQs
function applyFaqs() {
    const faqs = JSON.parse(localStorage.getItem('faqs'));
    if (!faqs) return;
    
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;
    
    // Clear existing FAQs
    faqContainer.innerHTML = '';
    
    // Add FAQs from admin panel
    faqs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        
        faqItem.innerHTML = `
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <span class="faq-toggle"><i class="fas fa-plus"></i></span>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;
        
        faqContainer.appendChild(faqItem);
        
        // Add click event
        const questionElement = faqItem.querySelector('.faq-question');
        questionElement.addEventListener('click', function() {
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

// Apply Client Logos
function applyClientLogos() {
    const clientLogos = [];
    let showClients = false;
    
    try {
        const storedLogos = localStorage.getItem('clientLogos');
        if (storedLogos) {
            const parsedLogos = JSON.parse(storedLogos);
            clientLogos.push(...parsedLogos);
        }
        
        showClients = localStorage.getItem('showClients') === 'true';
    } catch (error) {
        console.error('Error loading client logos:', error);
    }
    
    // Find or create the clients section
    let clientsSection = document.querySelector('.clients');
    
    // If we're hiding clients or have no logos to show, and the section exists, remove it
    if ((!showClients || clientLogos.length === 0) && clientsSection) {
        clientsSection.remove();
        return;
    }
    
    // Section doesn't exist but we want to show it
    // Removed section creation code to never show the Trusted By section
    
    // If section exists and we're showing it, update its content
    if (clientsSection && showClients && clientLogos.length > 0) {
        const logoContainer = clientsSection.querySelector('.client-logos');
        if (logoContainer) {
            // Clear existing logos
            logoContainer.innerHTML = '';
            
            // Add logos from admin panel
            clientLogos.forEach(logo => {
                const logoItem = document.createElement('div');
                logoItem.classList.add('client-logo');
                
                const img = document.createElement('img');
                img.src = logo;
                img.alt = 'Client Logo';
                
                logoItem.appendChild(img);
                logoContainer.appendChild(logoItem);
            });
        }
    }
} 