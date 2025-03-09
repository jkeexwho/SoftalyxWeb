<?php
// Get the requested URI
$request_uri = $_SERVER['REQUEST_URI'];

// Remove query string if present
if (strpos($request_uri, '?') !== false) {
    $request_uri = substr($request_uri, 0, strpos($request_uri, '?'));
}

// Remove trailing slash if present
if ($request_uri != '/' && substr($request_uri, -1) == '/') {
    $request_uri = substr($request_uri, 0, -1);
}

// Map clean URLs to HTML files
$routes = [
    '/' => 'index.html',
    '/index' => 'index.html',
    '/contact' => 'contact.html',
    '/services' => 'services.html',
    '/licenses' => 'licenses.html',
    '/admin-login' => 'admin-login.html',
    '/admin-dashboard' => 'admin-dashboard.html'
];

// Check if the route exists
if (isset($routes[$request_uri])) {
    // Route exists, include the corresponding file
    include $routes[$request_uri];
    exit;
} else if (file_exists('.' . $request_uri . '.html')) {
    // Try adding .html extension
    include '.' . $request_uri . '.html';
    exit;
} else if (file_exists('.' . $request_uri)) {
    // Serve the file directly if it exists
    $extension = pathinfo('.' . $request_uri, PATHINFO_EXTENSION);
    
    // Set content type based on file extension
    $content_types = [
        'css' => 'text/css',
        'js' => 'application/javascript',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'png' => 'image/png',
        'gif' => 'image/gif',
        'svg' => 'image/svg+xml',
        'ico' => 'image/x-icon',
        'pdf' => 'application/pdf'
    ];
    
    if (isset($content_types[$extension])) {
        header('Content-Type: ' . $content_types[$extension]);
    }
    
    readfile('.' . $request_uri);
    exit;
} else {
    // Route not found, show 404 page
    header("HTTP/1.0 404 Not Found");
    echo "<h1>404 Not Found</h1>";
    echo "<p>The page you requested could not be found.</p>";
    exit;
}
?> 