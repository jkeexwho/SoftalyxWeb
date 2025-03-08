/**
 * Toggle Controls - Simple toggle functionality for the admin panel
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create toggle elements
    createToggleElements();
    
    // Initialize toggle states
    initToggleStates();
});

/**
 * Create toggle switch elements
 */
function createToggleElements() {
    // Client toggle container
    const clientToggleContainer = document.getElementById('client-toggle-container');
    if (clientToggleContainer) {
        clientToggleContainer.innerHTML = createToggleHTML('show-clients', 'Show Clients Section');
        console.log('Created client toggle element');
    }
    
    // Location toggle container
    const locationToggleContainer = document.getElementById('location-toggle-container');
    if (locationToggleContainer) {
        locationToggleContainer.innerHTML = createToggleHTML('show-location', 'Show Location Section');
        console.log('Created location toggle element');
    }
    
    // Add event listeners to the new toggle elements
    addToggleEventListeners();
}

/**
 * Create HTML for a toggle switch
 */
function createToggleHTML(id, label) {
    return `
        <div class="toggle-control">
            <label class="toggle-switch">
                <input type="checkbox" id="${id}">
                <span class="toggle-slider"></span>
            </label>
            <span class="toggle-label">${label}</span>
        </div>
    `;
}

/**
 * Add event listeners to toggle switches
 */
function addToggleEventListeners() {
    // Client toggle
    const clientToggle = document.getElementById('show-clients');
    if (clientToggle) {
        clientToggle.addEventListener('change', function() {
            const isChecked = this.checked;
            localStorage.setItem('show-clients', isChecked.toString());
            console.log('Client toggle changed to:', isChecked);
            updateClientVisibility(isChecked);
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
    
    // Location toggle
    const locationToggle = document.getElementById('show-location');
    if (locationToggle) {
        locationToggle.addEventListener('change', function() {
            const isChecked = this.checked;
            localStorage.setItem('show-location', isChecked.toString());
            console.log('Location toggle changed to:', isChecked);
            updateLocationVisibility(isChecked);
            showSuccessMessage(this.closest('.admin-card'));
        });
    }
}

/**
 * Initialize toggle states from localStorage
 */
function initToggleStates() {
    // Client toggle
    const clientToggle = document.getElementById('show-clients');
    if (clientToggle) {
        const showClients = localStorage.getItem('show-clients') === 'true';
        clientToggle.checked = showClients;
        console.log('Initialized client toggle to:', showClients);
        updateClientVisibility(showClients);
    }
    
    // Location toggle
    const locationToggle = document.getElementById('show-location');
    if (locationToggle) {
        const showLocation = localStorage.getItem('show-location') === 'true';
        locationToggle.checked = showLocation;
        console.log('Initialized location toggle to:', showLocation);
        updateLocationVisibility(showLocation);
    }
}

/**
 * Update client section visibility
 */
function updateClientVisibility(show) {
    const clientsSection = document.querySelector('.clients');
    if (clientsSection) {
        clientsSection.style.display = show ? 'block' : 'none';
        console.log('Updated clients section display to:', clientsSection.style.display);
    }
}

/**
 * Update location visibility
 */
function updateLocationVisibility(show) {
    const locationCard = document.querySelector('.contact-card:has(.fa-map-marker-alt)');
    const mapSection = document.querySelector('.map-section');
    
    if (locationCard) {
        locationCard.style.display = show ? 'block' : 'none';
        console.log('Updated location card display to:', locationCard.style.display);
    }
    
    if (mapSection) {
        mapSection.style.display = show ? 'block' : 'none';
        console.log('Updated map section display to:', mapSection.style.display);
    }
}

/**
 * Show success message
 */
function showSuccessMessage(container) {
    if (!container) return;
    
    const existingMessage = container.querySelector('.success-message');
    if (existingMessage) existingMessage.remove();
    
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerText = 'Changes saved successfully!';
    
    container.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
} 