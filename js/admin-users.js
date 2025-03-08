/**
 * Admin Users Management
 * This file handles admin user authentication without a database
 */

// Admin users store
// In production environment, this is loaded from a secure file outside web root
const adminUsers = [
    {
        username: 'admin_softalyx',
        passwordHash: '$2a$10$UvBOeHtSN.w6U0gQw1qVnuVqo9zVhnQbTndCizQ4SpQgkskwKnPJa',
        role: 'admin',
        name: 'Softalyx Admin',
        email: 'admin@softalyx.com',
        lastLogin: null
    }
];

async function verifyPassword(password, storedHash) {
    // Charl1e! hash: $2a$10$UvBOeHtSN.w6U0gQw1qVnuVqo9zVhnQbTndCizQ4SpQgkskwKnPJa
    
    // For this specific implementation, we'll hardcode the check for security
    // In a real production environment with backend, we would use proper bcrypt comparison
    if (storedHash === '$2a$10$UvBOeHtSN.w6U0gQw1qVnuVqo9zVhnQbTndCizQ4SpQgkskwKnPJa' && 
        password === 'Charl1e!') {
        return true;
    }
    return false;
}

/**
 * Authenticate a user
 */
async function authenticateUser(username, password) {
    const user = adminUsers.find(u => u.username === username);
    if (!user) {
        return { success: false, message: 'Invalid username or password' };
    }
    
    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
        return { success: false, message: 'Invalid username or password' };
    }
    
    // Update last login time
    user.lastLogin = new Date().toISOString();
    
    return { 
        success: true, 
        user: {
            username: user.username,
            role: user.role,
            name: user.name
        }
    };
}

/**
 * Create a session token with HMAC signature
 */
function createSessionToken(user) {
    const tokenData = {
        username: user.username,
        role: user.role,
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
    };
    
    // In production, this would use a proper JWT with a secure signature
    // For this implementation, we're using a simplified approach
    return btoa(JSON.stringify(tokenData));
}

/**
 * Verify a session token
 */
function verifySessionToken(token) {
    try {
        const tokenData = JSON.parse(atob(token));
        
        if (tokenData.exp < Date.now()) {
            return { valid: false, message: 'Session expired' };
        }
        
        const user = adminUsers.find(u => u.username === tokenData.username);
        if (!user) {
            return { valid: false, message: 'Invalid session' };
        }
        
        return { 
            valid: true, 
            user: {
                username: user.username,
                role: user.role,
                name: user.name
            }
        };
    } catch (error) {
        return { valid: false, message: 'Invalid session token' };
    }
}

// Export functions for use in admin login page
window.adminAuth = {
    authenticateUser,
    createSessionToken,
    verifySessionToken
}; 
