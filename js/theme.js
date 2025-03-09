/**
 * Softalyx - Theme Switcher
 * This file handles dark/light theme functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add transition class to body for smooth theme transitions
    document.body.classList.add('theme-transition');
    
    // Initialize theme switching functionality
    initThemeSwitcher();
    
    // Apply theme even without the toggle button
    applyTheme();
    
    // Remove transition class after initial load to prevent transition on page load
    setTimeout(function() {
        document.body.classList.remove('theme-transition');
    }, 300);
});

/**
 * Initialize theme switcher and apply saved theme preference
 */
function initThemeSwitcher() {
    // Get theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    
    // If theme toggle doesn't exist, return
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or OS preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-moon');
            themeIcon.style.color = '#7d9cb5';
        }
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        // Add transition class before theme change
        document.body.classList.add('theme-transition');
        
        // Toggle dark theme class
        document.body.classList.toggle('dark-theme');
        
        // Add animation class to button
        themeToggle.classList.add('theme-toggle-animate');
        
        // Update the icon and localStorage
        if (document.body.classList.contains('dark-theme')) {
            // Dark mode is active
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-moon');
                themeIcon.style.color = '#7d9cb5';
            }
            localStorage.setItem('theme', 'dark');
            
            // Force refresh any iframes or embedded content
            refreshEmbeddedContent();
        } else {
            // Light mode is active
            if (themeIcon) {
                themeIcon.style.color = '';
            }
            localStorage.setItem('theme', 'light');
            
            // Force refresh any iframes or embedded content
            refreshEmbeddedContent();
        }
        
        // Remove animation class after animation completes
        setTimeout(function() {
            themeToggle.classList.remove('theme-toggle-animate');
            // Remove transition class after theme change
            document.body.classList.remove('theme-transition');
        }, 600);
    });
}

/**
 * Apply theme from localStorage without requiring the toggle button
 * This can be used on pages that don't have the theme toggle
 */
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Add transition class for smooth theme change
    document.body.classList.add('theme-transition');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        
        // Update any Moon icons found in the document
        const moonIcons = document.querySelectorAll('.fa-moon');
        moonIcons.forEach(icon => {
            icon.style.color = '#7d9cb5';
        });
    } else {
        document.body.classList.remove('dark-theme');
    }
    
    // Safety mechanism: Remove transition class after a short delay
    // This prevents the transition from getting stuck
    setTimeout(function() {
        document.body.classList.remove('theme-transition');
    }, 500);
}

/**
 * Helper function to refresh any iframes or embedded content
 * that might not automatically inherit theme changes
 */
function refreshEmbeddedContent() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        // Store the current src
        const src = iframe.src;
        // Refresh by setting to the same src
        iframe.src = src;
    });
} 