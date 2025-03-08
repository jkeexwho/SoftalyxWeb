/**
 * Test script to generate SHA-256 hash for password
 */

// Function to hash a password using SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Test the hash function with the password "Charl1e!"
async function testHash() {
    const password = "Charl1e!";
    const hash = await hashPassword(password);
    console.log(`Password: ${password}`);
    console.log(`SHA-256 Hash: ${hash}`);
}

// Run the test
testHash(); 