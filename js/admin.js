/**
 * Softalyx - Admin Panel Functionality
 */

// Initialize admin panel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin.js: DOM fully loaded, initializing admin panel');
    initAdminPanel();
});

/**
 * Initialize Admin Panel
 */
function initAdminPanel() {
    // Ensure admin interface is in English only
    if (window.translations && window.setLanguage) {
        // Store the original setLanguage function
        const originalSetLanguage = window.setLanguage;
        
        // Override the setLanguage function for admin panel
        window.setLanguage = function(lang, shouldReload) {
            // Check if we're in the admin panel
            if (window.location.href.includes('admin-dashboard.html') || 
                window.location.href.includes('admin-login.html')) {
                console.log('Admin.js: Forcing English language in admin panel');
                document.documentElement.setAttribute('lang', 'en');
                return false; // Prevent language change in admin panel
            } else {
                // For non-admin pages, use the original function
                return originalSetLanguage(lang, shouldReload);
            }
        };
        
        // Force English in admin panel
        document.documentElement.setAttribute('lang', 'en');
    }
    
    console.log('Admin.js: Initializing admin panel');
    
    try {
        // Get all menu links
        const menuLinks = document.querySelectorAll('.admin-sidebar-menu a');
        console.log(`Admin.js: Found ${menuLinks.length} menu links`);
        
        // Get all sections
        const sections = document.querySelectorAll('.admin-section');
        console.log(`Admin.js: Found ${sections.length} admin sections`);
        
        // Debug the sections found
        sections.forEach(section => {
            console.log(`Admin.js: Found section with ID: ${section.id}`);
        });
        
        // Add click event to each menu link
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('data-section');
                console.log(`Admin.js: Menu link clicked for section: ${targetId}`);
                
                // Hide all sections - IMPORTANT: Use the active class for CSS transitions
                sections.forEach(section => {
                    section.classList.remove('active');
                    console.log(`Admin.js: Hiding section: ${section.id}`);
                });
                
                // Show target section - IMPORTANT: Add the active class instead of setting display directly
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                    console.log(`Admin.js: Showing section: ${targetId}, now has active class`);
                    
                    // If this is the contact submissions section, load the submissions
                    if (targetId === 'contact-submissions') {
                        loadContactSubmissions();
                        console.log('Admin.js: Loaded contact submissions for the contact submissions section');
                    }
                } else {
                    console.error(`Admin.js: Section with ID ${targetId} not found`);
                    // Log all available section IDs for debugging
                    console.log('Admin.js: Available sections:', Array.from(sections).map(s => s.id).join(', '));
                }
                
                // Update active class
                menuLinks.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
        
        // Show first section by default if no section is active
        if (sections.length > 0 && !document.querySelector('.admin-sidebar-menu a.active')) {
            console.log('Admin.js: No active section found, showing first section by default');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            sections[0].classList.add('active');
            console.log(`Admin.js: Set first section (${sections[0].id}) as active`);
            
            if (menuLinks.length > 0) {
                menuLinks[0].classList.add('active');
                console.log('Admin.js: Set first menu link as active');
            }
        }
        
        // Manually trigger the active tab or first tab if none is active
        const activeTab = document.querySelector('.admin-sidebar-menu a.active');
        if (activeTab) {
            console.log('Admin.js: Found active tab, triggering click');
            activeTab.click();
        } else if (menuLinks.length > 0) {
            console.log('Admin.js: No active tab found, clicking first tab');
            menuLinks[0].click();
        }
        
        // Initialize toggle switches
        initToggleSwitches();
        
        // Load saved data
        loadSavedData();
        
        // Initialize form submissions
        initFormSubmissions();
        
        // Initialize language settings
        initLanguageSettings();
        
        // Load contact submissions
        loadContactSubmissions();
        
        console.log('Admin.js: Admin panel initialization complete');
    } catch (error) {
        console.error('Admin.js: Error initializing admin panel:', error);
    }
}

/**
 * Initialize Toggle Switches
 */
function initToggleSwitches() {
    console.log('Admin.js: Toggle functionality moved to toggle-controls.js');
}

/**
 * Apply Toggle State
 */
function applyToggleState(id, isChecked) {
    console.log('Admin.js: Toggle functionality moved to toggle-controls.js');
}

/**
 * Apply All Toggle States
 */
function applyToggleStates() {
    console.log('Admin.js: Applying all toggle states');
    
    // Apply show-clients toggle
    const showClients = localStorage.getItem('show-clients') === 'true';
    const showClientsToggle = document.getElementById('show-clients');
    if (showClientsToggle) {
        showClientsToggle.checked = showClients;
        applyToggleState('show-clients', showClients);
    }
    
    // Apply show-location toggle
    const showLocation = localStorage.getItem('show-location') === 'true';
    const showLocationToggle = document.getElementById('show-location');
    if (showLocationToggle) {
        showLocationToggle.checked = showLocation;
        applyToggleState('show-location', showLocation);
    }
    
    console.log('Admin.js: All toggle states applied');
}

/**
 * Initialize Form Submissions
 */
function initFormSubmissions() {
    // Contact Info Form
    const contactInfoForm = document.getElementById('contact-info-form');
    if (contactInfoForm) {
        contactInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const contactInfo = {
                phoneNumber: document.getElementById('phone-number').value,
                primaryEmail: document.getElementById('primary-email').value,
                secondaryEmail: document.getElementById('secondary-email').value
            };
            
            localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Social Links Form
    const socialLinksForm = document.getElementById('social-links-form');
    if (socialLinksForm) {
        socialLinksForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const socialLinks = {
                linkedin: document.getElementById('linkedin-url').value,
                telegram: document.getElementById('telegram-url').value,
                whatsapp: document.getElementById('whatsapp-url').value
            };
            
            localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Work Hours Form
    const workHoursForm = document.getElementById('work-hours-form');
    if (workHoursForm) {
        workHoursForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const workHours = {
                days: document.getElementById('work-days').value,
                hours: document.getElementById('work-hours').value
            };
            
            localStorage.setItem('workHours', JSON.stringify(workHours));
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Location Form
    const locationForm = document.getElementById('location-form');
    if (locationForm) {
        locationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Save addresses only, visibility is handled by toggle-controls.js
            const location = { 
                mainAddress: document.getElementById('main-address').value,
                secondaryAddress: document.getElementById('secondary-address').value
            };
            localStorage.setItem('location', JSON.stringify(location));
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Footer Settings Form
    const footerSettingsForm = document.getElementById('footer-settings-form');
    if (footerSettingsForm) {
        footerSettingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const footerSettings = {
                copyrightYear: document.getElementById('copyright-year').value,
                footerTagline: document.getElementById('footer-tagline').value
            };
            
            localStorage.setItem('footerSettings', JSON.stringify(footerSettings));
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Logo Settings Form
    const logoSettingsForm = document.getElementById('logo-settings-form');
    if (logoSettingsForm) {
        logoSettingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const logoSettings = JSON.parse(localStorage.getItem('logoSettings')) || {};
            logoSettings.headerTagline = document.getElementById('header-tagline').value;
            
            localStorage.setItem('logoSettings', JSON.stringify(logoSettings));
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Client Logos Show/Hide Toggle
    const showClientsToggle = document.getElementById('show-clients');
    if (showClientsToggle) {
        showClientsToggle.addEventListener('change', function() {
            const isChecked = this.checked;
            localStorage.setItem('show-clients', isChecked.toString());
            console.log('Admin.js: show-clients toggle changed to', isChecked);
            
            // Apply the change immediately
            applyToggleState('show-clients', isChecked);
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Location Show/Hide Toggle
    const showLocationToggle = document.getElementById('show-location');
    if (showLocationToggle) {
        showLocationToggle.addEventListener('change', function() {
            const isChecked = this.checked;
            localStorage.setItem('show-location', isChecked.toString());
            console.log('Admin.js: show-location toggle changed to', isChecked);
            
            // Apply the change immediately
            applyToggleState('show-location', isChecked);
            
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Apply saved toggle states to the UI
    applyToggleStates();
}

/**
 * Show Success Message
 */
function showSuccessMessage(container) {
    // Check if success message already exists
    let successMessage = container.querySelector('.admin-alert-success');
    
    if (!successMessage) {
        // Create success message
        successMessage = document.createElement('div');
        successMessage.classList.add('admin-alert', 'admin-alert-success');
        successMessage.style.marginTop = '20px';
        successMessage.innerHTML = '<p><strong>Success!</strong> Your changes have been saved.</p>';
        
        // Add to container
        container.appendChild(successMessage);
    }
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (successMessage.parentNode) {
            successMessage.parentNode.removeChild(successMessage);
        }
    }, 3000);
}

/**
 * Load Saved Data
 */
function loadSavedData() {
    console.log('Admin.js: Loading saved data from localStorage');
    
    // Load contact information
    const contactInfo = JSON.parse(localStorage.getItem('contactInfo') || '{}');
    if (contactInfo.email) document.getElementById('contact-email').value = contactInfo.email;
    if (contactInfo.phone) document.getElementById('contact-phone').value = contactInfo.phone;
    
    // Load social links
    const socialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
    if (socialLinks.facebook) document.getElementById('facebook-url').value = socialLinks.facebook;
    if (socialLinks.twitter) document.getElementById('twitter-url').value = socialLinks.twitter;
    if (socialLinks.linkedin) document.getElementById('linkedin-url').value = socialLinks.linkedin;
    
    // Load work hours
    const workHours = JSON.parse(localStorage.getItem('workHours') || '{}');
    if (workHours.weekdays) document.getElementById('weekday-hours').value = workHours.weekdays;
    if (workHours.weekend) document.getElementById('weekend-hours').value = workHours.weekend;
    
    // Load location
    const location = JSON.parse(localStorage.getItem('location') || '{}');
    if (location.mainAddress) document.getElementById('main-address').value = location.mainAddress;
    if (location.secondaryAddress) document.getElementById('secondary-address').value = location.secondaryAddress;
    
    // Load footer settings
    const footerSettings = JSON.parse(localStorage.getItem('footerSettings') || '{}');
    if (footerSettings.copyright) document.getElementById('copyright-text').value = footerSettings.copyright;
    
    // Load logo settings
    const logoSettings = JSON.parse(localStorage.getItem('logoSettings') || '{}');
    if (logoSettings.mainLogo) document.getElementById('main-logo-url').value = logoSettings.mainLogo;
    if (logoSettings.footerLogo) document.getElementById('footer-logo-url').value = logoSettings.footerLogo;
    
    // Load client logos visibility
    const showClients = localStorage.getItem('show-clients') === 'true';
    console.log(`Admin.js: Loaded showClients value: ${localStorage.getItem('show-clients')}, interpreted as: ${showClients}`);
    
    // Apply toggle states
    applyToggleStates();
    
    console.log('Admin.js: Saved data loaded successfully');
}

/**
 * Load FAQs
 */
function loadFaqs() {
    const faqContainer = document.getElementById('faq-items-container');
    if (!faqContainer) return;
    
    // Clear container
    faqContainer.innerHTML = '';
    
    // Get saved FAQs
    const faqs = JSON.parse(localStorage.getItem('faqs')) || [];
    
    // If no FAQs, add a default one
    if (faqs.length === 0) {
        addFaqItem();
    } else {
        // Add each FAQ
        faqs.forEach(faq => {
            addFaqItem(faq.question, faq.answer);
        });
    }
}

/**
 * Add FAQ Item
 */
function addFaqItem(question = '', answer = '') {
    const faqContainer = document.getElementById('faq-items-container');
    if (!faqContainer) return;
    
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-editor-item');
    
    faqItem.innerHTML = `
        <div class="faq-editor-header">
            <div class="faq-editor-title">FAQ Item</div>
            <div class="faq-editor-actions">
                <button type="button" class="btn-text faq-move-up"><i class="fas fa-arrow-up"></i></button>
                <button type="button" class="btn-text faq-move-down"><i class="fas fa-arrow-down"></i></button>
                <button type="button" class="btn-text faq-delete"><i class="fas fa-trash"></i></button>
            </div>
        </div>
        <div class="faq-editor-content">
            <div class="admin-form-group">
                <label>Question</label>
                <input type="text" class="faq-question-input" value="${question}" placeholder="Enter FAQ question">
            </div>
            <div class="admin-form-group">
                <label>Answer</label>
                <textarea class="faq-answer-input" rows="4" placeholder="Enter FAQ answer">${answer}</textarea>
            </div>
        </div>
    `;
    
    faqContainer.appendChild(faqItem);
    
    // Add event listeners
    const deleteButton = faqItem.querySelector('.faq-delete');
    const moveUpButton = faqItem.querySelector('.faq-move-up');
    const moveDownButton = faqItem.querySelector('.faq-move-down');
    
    deleteButton.addEventListener('click', function() {
        faqItem.remove();
    });
    
    moveUpButton.addEventListener('click', function() {
        const prev = faqItem.previousElementSibling;
        if (prev) {
            faqContainer.insertBefore(faqItem, prev);
        }
    });
    
    moveDownButton.addEventListener('click', function() {
        const next = faqItem.nextElementSibling;
        if (next) {
            faqContainer.insertBefore(next, faqItem);
        }
    });
}

/**
 * Save FAQs
 */
function saveFaqs() {
    const faqItems = document.querySelectorAll('.faq-editor-item');
    const faqs = [];
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-input').value;
        const answer = item.querySelector('.faq-answer-input').value;
        
        if (question && answer) {
            faqs.push({
                question,
                answer
            });
        }
    });
    
    localStorage.setItem('faqs', JSON.stringify(faqs));
    
    showSuccessMessage(document.querySelector('#faq-editor .admin-card'));
}

/**
 * Load Client Logos
 */
function loadClientLogos() {
    const logoContainer = document.getElementById('client-logos-container');
    if (!logoContainer) return;
    
    // Clear container
    logoContainer.innerHTML = '';
    
    // Get saved logos
    const logos = JSON.parse(localStorage.getItem('clientLogos')) || [];
    
    // Add each logo
    logos.forEach(logo => {
        addClientLogo(logo);
    });
}

/**
 * Add Client Logo
 */
function addClientLogo(logoSrc) {
    const logoContainer = document.getElementById('client-logos-container');
    if (!logoContainer) return;
    
    const logoItem = document.createElement('div');
    logoItem.classList.add('client-logo-item');
    
    logoItem.innerHTML = `
        <img src="${logoSrc}" alt="Client Logo">
        <button type="button" class="client-logo-remove"><i class="fas fa-times"></i></button>
    `;
    
    logoContainer.appendChild(logoItem);
    
    // Add event listener for remove button
    const removeButton = logoItem.querySelector('.client-logo-remove');
    removeButton.addEventListener('click', function() {
        logoItem.remove();
    });
}

/**
 * Save Client Logos
 */
function saveClientLogos() {
    const logoItems = document.querySelectorAll('.client-logo-item img');
    const logos = [];
    
    logoItems.forEach(item => {
        logos.push(item.src);
    });
    
    localStorage.setItem('clientLogos', JSON.stringify(logos));
    
    showSuccessMessage(document.querySelector('#client-logos .admin-card'));
}

/**
 * Initialize Language Settings
 */
function initLanguageSettings() {
    console.log('Admin.js: Initializing language settings');
    
    // Handle language tab switching
    const languageTabs = document.querySelectorAll('.language-tab');
    const languageContents = document.querySelectorAll('.language-content');
    
    console.log('Admin.js: Found', languageTabs.length, 'language tabs');
    console.log('Admin.js: Found', languageContents.length, 'language content sections');
    
    // First, ensure all content containers exist
    const languages = ['en', 'ua', 'ru'];
    languages.forEach(lang => {
        // Check if content container exists
        let contentContainer = document.getElementById(`lang-${lang}`);
        
        // If it doesn't exist, create it
        if (!contentContainer) {
            console.log(`Admin.js: Creating missing language content container for ${lang}`);
            contentContainer = document.createElement('div');
            contentContainer.id = `lang-${lang}`;
            contentContainer.className = 'language-content';
            
            // Find the language settings section to add it to
            const languageSettingsSection = document.querySelector('#language-settings .admin-card-content');
            if (languageSettingsSection) {
                languageSettingsSection.appendChild(contentContainer);
            }
        }
    });
    
    // Update tabs list after potential creation of new containers
    const updatedLanguageContents = document.querySelectorAll('.language-content');
    console.log('Admin.js: Now have', updatedLanguageContents.length, 'language content sections');
    
    languageTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Admin.js: Language tab clicked:', lang);
            
            // Remove active class from all tabs
            languageTabs.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content sections
            updatedLanguageContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none'; // Explicitly hide for older browsers
            });
            
            // Show the target content
            const targetContent = document.getElementById(`lang-${lang}`);
            console.log('Admin.js: Target content:', targetContent ? targetContent.id : 'not found');
            
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block'; // Explicitly show for older browsers
                
                // Load translations for this language if not already loaded
                if (targetContent.children.length === 0) {
                    console.log('Admin.js: Loading translations for language:', lang);
                    loadTranslationsForLanguage(lang, targetContent);
                }
            }
        });
    });
    
    // Save language settings button
    const saveLanguageSettingsButton = document.getElementById('save-language-settings');
    if (saveLanguageSettingsButton) {
        saveLanguageSettingsButton.addEventListener('click', function() {
            saveLanguageSettings();
        });
    }
    
    // Load initial translations for all language tabs
    console.log('Admin.js: Loading initial translations for all languages');
    languages.forEach(lang => {
        const targetContent = document.getElementById(`lang-${lang}`);
        if (targetContent) {
            // Only load if empty
            if (targetContent.children.length === 0) {
                loadTranslationsForLanguage(lang, targetContent);
            }
        }
    });
    
    // Activate the first tab by default if no tab is active
    const activeTab = document.querySelector('.language-tab.active');
    if (!activeTab && languageTabs.length > 0) {
        languageTabs[0].click();
    } else if (activeTab) {
        // Trigger the click event on the active tab to ensure content is displayed
        activeTab.click();
    }
}

/**
 * Load Translations for a Language
 */
function loadTranslationsForLanguage(lang, container) {
    console.log(`Admin.js: Loading translations for language ${lang}`);
    
    // Get translations from the language.js file
    const translations = window.getTranslations ? window.getTranslations(lang) : {};
    console.log(`Admin.js: Found ${Object.keys(translations).length} translations for language ${lang}`);
    
    if (!translations || Object.keys(translations).length === 0) {
        container.innerHTML = '<p class="no-translations">No translations available for this language.</p>';
        return;
    }
    
    // Group translations by section
    const groups = {
        'Navigation': ['nav_home', 'nav_services', 'nav_licenses', 'nav_contact'],
        'Common Elements': ['footer_rights', 'contact_us', 'send_message', 'view_site', 'logout'],
        'Admin Login': ['admin_panel', 'username', 'password', 'remember_me', 'login', 'invalid_credentials', 'return_to_website'],
        'Hero Section': ['hero_title', 'hero_subtitle', 'discuss_project', 'buy_license'],
        'Benefits Section': ['why_choose', 'certified_partner', 'certified_partner_desc', 'agile_teams', 'agile_teams_desc', 
                           'flexible_pricing', 'flexible_pricing_desc', 'seamless_migration', 'seamless_migration_desc'],
        'Services Section': ['our_services', 'services_subtitle', 'outsourcing', 'outsourcing_desc', 
                           'licenses', 'licenses_desc', 'training', 'training_desc', 'learn_more'],
        'Clients Section': ['trusted_by'],
        'Admin Dashboard': ['dashboard', 'contact_information', 'social_links', 'work_hours', 'location', 
                          'faq_editor', 'footer_settings', 'logo_settings', 'client_logos', 'language_settings', 
                          'save_changes', 'welcome_admin', 'admin_note'],
        'FAQ Section': ['faq_title', 'faq_question_1', 'faq_answer_1', 'faq_question_2', 'faq_answer_2', 
                       'faq_question_3', 'faq_answer_3', 'faq_question_4', 'faq_answer_4']
    };
    
    // Clear container
    container.innerHTML = '';
    
    // Create translation groups
    for (const [groupName, keys] of Object.entries(groups)) {
        const groupElement = document.createElement('div');
        groupElement.className = 'translation-group';
        
        const groupTitle = document.createElement('h4');
        groupTitle.textContent = groupName;
        groupElement.appendChild(groupTitle);
        
        // Add translation items for each key
        keys.forEach(key => {
            const translationItem = document.createElement('div');
            translationItem.className = 'translation-item';
            
            const keyElement = document.createElement('div');
            keyElement.className = 'translation-key';
            keyElement.textContent = key;
            
            const valueElement = document.createElement('input');
            valueElement.className = 'translation-value';
            valueElement.type = 'text';
            valueElement.value = translations[key] || '';
            valueElement.setAttribute('data-key', key);
            
            translationItem.appendChild(keyElement);
            translationItem.appendChild(valueElement);
            groupElement.appendChild(translationItem);
        });
        
        container.appendChild(groupElement);
    }
    
    // Add a section for custom translations
    const customGroup = document.createElement('div');
    customGroup.className = 'translation-group';
    
    const customTitle = document.createElement('h4');
    customTitle.textContent = 'Custom Translations';
    customGroup.appendChild(customTitle);
    
    // Add a note about custom translations
    const customNote = document.createElement('p');
    customNote.className = 'translation-note';
    customNote.textContent = 'Add any custom translations that are not covered by the predefined groups above.';
    customGroup.appendChild(customNote);
    
    // Add a button to add new custom translation
    const addButton = document.createElement('button');
    addButton.className = 'btn btn-secondary';
    addButton.textContent = 'Add Custom Translation';
    addButton.style.marginBottom = '15px';
    addButton.addEventListener('click', function() {
        addCustomTranslation(customGroup, lang);
    });
    
    customGroup.appendChild(addButton);
    container.appendChild(customGroup);
    
    console.log(`Admin.js: Finished loading translations for language ${lang}`);
}

/**
 * Add a custom translation field
 */
function addCustomTranslation(container, lang) {
    const translationItem = document.createElement('div');
    translationItem.className = 'translation-item';
    
    const keyInput = document.createElement('input');
    keyInput.className = 'translation-key custom-key';
    keyInput.type = 'text';
    keyInput.placeholder = 'Enter key';
    
    const valueInput = document.createElement('input');
    valueInput.className = 'translation-value';
    valueInput.type = 'text';
    valueInput.placeholder = 'Enter translation';
    
    // When key changes, update the data-key attribute
    keyInput.addEventListener('change', function() {
        valueInput.setAttribute('data-key', this.value);
    });
    
    translationItem.appendChild(keyInput);
    translationItem.appendChild(valueInput);
    
    // Insert before the add button
    container.insertBefore(translationItem, container.querySelector('button').nextSibling);
}

/**
 * Save Language Settings
 */
function saveLanguageSettings() {
    console.log('Admin.js: Saving language settings');
    const customTranslations = {};
    
    // Process each language tab
    document.querySelectorAll('.language-content').forEach(content => {
        const lang = content.id.replace('lang-', '');
        customTranslations[lang] = {};
        
        // Get all translation inputs
        const inputs = content.querySelectorAll('.translation-value');
        console.log(`Admin.js: Processing ${inputs.length} translations for language ${lang}`);
        
        inputs.forEach(input => {
            const key = input.getAttribute('data-key');
            const value = input.value.trim();
            
            if (value) {
                customTranslations[lang][key] = value;
                
                // Update the translation in the language.js file
                if (window.updateCustomTranslation) {
                    window.updateCustomTranslation(lang, key, value);
                }
            }
        });
    });
    
    // Save to localStorage
    localStorage.setItem('customTranslations', JSON.stringify(customTranslations));
    console.log('Admin.js: Saved custom translations to localStorage');
    
    // Show success message
    const container = document.getElementById('language-settings').querySelector('.admin-card');
    showSuccessMessage(container);
    
    // Apply translations to the current page
    if (window.setLanguage) {
        const currentLang = localStorage.getItem('language') || 'en';
        console.log('Admin.js: Applying translations for current language:', currentLang);
        // Don't reload when applying from admin panel (false parameter)
        window.setLanguage(currentLang, false);
    }
}

/**
 * Handle Contact Form Submission
 * This function will be called from the contact form
 */
function handleContactFormSubmission(formData) {
    console.log('Admin.js: Handling contact form submission');
    
    if (!formData || typeof formData !== 'object') {
        console.error('Admin.js: Invalid form data received');
        return false;
    }
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
        console.error('Admin.js: Missing required fields in form data');
        return false;
    }
    
    // Get existing submissions
    let submissions = [];
    try {
        submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    } catch (error) {
        console.error('Admin.js: Error parsing existing contact submissions:', error);
        // Continue with empty submissions array
    }
    
    // Add new submission with timestamp
    const newSubmission = {
        id: Date.now(),
        date: new Date().toISOString(),
        ...formData
    };
    
    console.log('Admin.js: Created new submission:', newSubmission);
    
    // Add to the beginning of the array
    submissions.unshift(newSubmission);
    
    // Save to localStorage
    try {
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        console.log(`Admin.js: Saved contact submission. Total submissions: ${submissions.length}`);
    } catch (error) {
        console.error('Admin.js: Error saving contact submission:', error);
        return false;
    }
    
    // Return true to indicate success
    return true;
}

/**
 * Load Contact Submissions
 */
function loadContactSubmissions() {
    console.log('Admin.js: Loading contact submissions');
    
    const submissionsList = document.getElementById('submissions-list');
    if (!submissionsList) {
        console.error('Admin.js: Submissions list container not found');
        return;
    }
    
    // Get submissions from localStorage
    let submissions = [];
    try {
        submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        console.log(`Admin.js: Found ${submissions.length} contact submissions`);
    } catch (error) {
        console.error('Admin.js: Error parsing contact submissions:', error);
        submissionsList.innerHTML = '<p class="no-submissions">Error loading submissions. Please try again.</p>';
        return;
    }
    
    if (submissions.length === 0) {
        submissionsList.innerHTML = '<p class="no-submissions">No submissions yet.</p>';
        return;
    }
    
    // Clear container
    submissionsList.innerHTML = '';
    
    // Add each submission
    submissions.forEach(submission => {
        try {
            const submissionItem = document.createElement('div');
            submissionItem.className = 'submission-item';
            submissionItem.setAttribute('data-id', submission.id);
            
            // Format date
            let formattedDate = 'Unknown date';
            try {
                const date = new Date(submission.date);
                formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            } catch (error) {
                console.error('Admin.js: Error formatting date for submission:', error);
            }
            
            // Safely get submission properties with fallbacks
            const name = submission.name || 'Unknown';
            const email = submission.email || 'No email provided';
            const phone = submission.phone || 'N/A';
            const subject = submission.subject || 'No subject';
            const message = submission.message || 'No message content';
            
            // Create submission HTML with proper escaping for security
            submissionItem.innerHTML = `
                <div class="submission-header">
                    <div class="submission-name">${escapeHtml(name)}</div>
                    <div class="submission-date">${escapeHtml(formattedDate)}</div>
                </div>
                <div class="submission-details">
                    <div class="submission-detail">
                        <div class="submission-label">Email:</div>
                        <div class="submission-value">${escapeHtml(email)}</div>
                    </div>
                    <div class="submission-detail">
                        <div class="submission-label">Phone:</div>
                        <div class="submission-value">${escapeHtml(phone)}</div>
                    </div>
                    <div class="submission-detail">
                        <div class="submission-label">Subject:</div>
                        <div class="submission-value">${escapeHtml(subject)}</div>
                    </div>
                    <div class="submission-message">${escapeHtml(message)}</div>
                </div>
                <div class="submission-actions">
                    <button class="btn btn-danger delete-submission" data-id="${submission.id}">Delete</button>
                </div>
            `;
            
            submissionsList.appendChild(submissionItem);
        } catch (error) {
            console.error('Admin.js: Error creating submission item:', error);
        }
    });
    
    // Add event listeners for delete buttons
    const deleteButtons = submissionsList.querySelectorAll('.delete-submission');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            deleteContactSubmission(id);
        });
    });
    
    console.log('Admin.js: Contact submissions loaded successfully');
}

/**
 * Helper function to escape HTML to prevent XSS attacks
 */
function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') {
        return '';
    }
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * Delete Contact Submission
 */
function deleteContactSubmission(id) {
    console.log(`Admin.js: Deleting contact submission with ID: ${id}`);
    
    if (!id) {
        console.error('Admin.js: Invalid submission ID for deletion');
        return;
    }
    
    // Get existing submissions
    let submissions = [];
    try {
        submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    } catch (error) {
        console.error('Admin.js: Error parsing contact submissions for deletion:', error);
        return;
    }
    
    // Filter out the submission to delete
    const updatedSubmissions = submissions.filter(submission => submission.id !== id);
    
    // Save to localStorage
    try {
        localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
        console.log(`Admin.js: Successfully deleted submission. ${updatedSubmissions.length} submissions remaining.`);
    } catch (error) {
        console.error('Admin.js: Error saving updated submissions after deletion:', error);
        return;
    }
    
    // Remove from DOM
    const submissionItem = document.querySelector(`.submission-item[data-id="${id}"]`);
    if (submissionItem) {
        submissionItem.remove();
        console.log('Admin.js: Removed submission item from DOM');
    } else {
        console.warn('Admin.js: Could not find submission item in DOM for removal');
    }
    
    // If no submissions left, show message
    const submissionsList = document.getElementById('submissions-list');
    if (submissionsList && updatedSubmissions.length === 0) {
        submissionsList.innerHTML = '<p class="no-submissions">No submissions yet.</p>';
        console.log('Admin.js: No submissions remaining, showing empty message');
    }
    
    // Show success message
    const container = document.getElementById('contact-submissions').querySelector('.admin-card');
    if (container) {
        showSuccessMessage(container);
    }
}

// Make functions available globally
window.handleContactFormSubmission = handleContactFormSubmission;

/**
 * Apply toggle states from localStorage
 */
function applyToggleStates() {
    console.log('Admin.js: Applying toggle states from localStorage');
    
    // Apply show-clients toggle state
    const showClientsToggle = document.getElementById('show-clients');
    if (showClientsToggle) {
        const showClients = localStorage.getItem('show-clients');
        console.log('Admin.js: show-clients from localStorage:', showClients);
        
        // Convert string to boolean
        showClientsToggle.checked = showClients === 'true';
        console.log('Admin.js: Set showClientsToggle.checked to', showClientsToggle.checked);
        
        // Apply to UI if on homepage
        const clientsSection = document.querySelector('.clients');
        if (clientsSection) {
            clientsSection.style.display = showClientsToggle.checked ? 'block' : 'none';
            console.log('Admin.js: Set clients section display to', clientsSection.style.display);
        }
    }
    
    // Apply show-location toggle state
    const showLocationToggle = document.getElementById('show-location');
    if (showLocationToggle) {
        const location = JSON.parse(localStorage.getItem('location')) || {};
        showLocationToggle.checked = location.showLocation || false;
        console.log('Admin.js: Set showLocationToggle.checked to', showLocationToggle.checked);
    }
    
    // Apply other toggle states as needed
} 