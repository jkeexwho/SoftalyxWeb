/**
 * Admin Authentication Handler
 * Handles login form submission and session management
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    checkAuthStatus();
    
    // Handle login form submission
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Handle logout if on admin page
    const logoutButton = document.getElementById('admin-logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
});

/**
 * Check if user is already authenticated
 */
function checkAuthStatus() {
    const currentPath = window.location.pathname;
    const token = localStorage.getItem('adminToken');
    
    // If we're on the login page
    if (currentPath.includes('admin-login.html')) {
        // If token exists, verify and redirect to admin panel if valid
        if (token) {
            const result = window.adminAuth.verifySessionToken(token);
            if (result.valid) {
                window.location.href = 'admin-dashboard.html';
                return;
            } else {
                // Clear invalid token
                localStorage.removeItem('adminToken');
            }
        }
    } 
    // If we're on an admin page (not login)
    else if (currentPath.includes('admin')) {
        // If no token or invalid token, redirect to login
        if (!token) {
            window.location.href = 'admin-login.html';
            return;
        }
        
        const result = window.adminAuth.verifySessionToken(token);
        if (!result.valid) {
            localStorage.removeItem('adminToken');
            window.location.href = 'admin-login.html';
            return;
        }
        
        // Update UI with user info if we're authenticated
        updateAdminUI(result.user);
    }
}

/**
 * Handle login form submission
 */
async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    const errorMessage = document.getElementById('login-error');
    
    try {
        // Clear previous error
        errorMessage.style.display = 'none';
        
        // Authenticate user
        const result = await window.adminAuth.authenticateUser(username, password);
        
        if (result.success) {
            // Create and store token
            const token = window.adminAuth.createSessionToken(result.user);
            localStorage.setItem('adminToken', token);
            
            // Redirect to admin panel
            window.location.href = 'admin-dashboard.html';
        } else {
            // Show error message
            errorMessage.textContent = result.message;
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Login error:', error);
        errorMessage.textContent = 'An error occurred during login. Please try again.';
        errorMessage.style.display = 'block';
    }
}

/**
 * Handle logout
 */
function handleLogout(event) {
    event.preventDefault();
    
    // Clear token and redirect to login
    localStorage.removeItem('adminToken');
    window.location.href = 'admin-login.html';
}

/**
 * Update admin UI with user info
 */
function updateAdminUI(user) {
    // Update user info in the admin panel if elements exist
    const userNameElement = document.getElementById('admin-user-name');
    if (userNameElement) {
        userNameElement.textContent = user.name || user.username;
    }
    
    // Update role-based UI elements if needed
    if (user.role === 'admin') {
        // Show admin-only elements
        const adminOnlyElements = document.querySelectorAll('.admin-only');
        adminOnlyElements.forEach(el => el.style.display = 'block');
    }
} 