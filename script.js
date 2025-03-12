document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredEmail = document.getElementById('email').value;

    if (validEmails.includes(enteredEmail)) {
        // Generate a token
        const accessToken = Math.random().toString(36).substring(2) + Date.now().toString(36);

        // Store the token in localStorage
        localStorage.setItem('accessToken', accessToken);

        // Hide the message (if any)
        document.getElementById('message').textContent = '';

        // Show the iframe
        document.getElementById('iframeContainer').style.display = 'block';
    } else {
        // Show an error message
        document.getElementById('message').textContent = 'Email not found. Please try again.';
    }
});

// Check for a valid token when the page loads
window.addEventListener('load', function() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        // Token exists, show the iframe
        document.getElementById('emailForm').style.display = 'none';
        document.getElementById('iframeContainer').style.display = 'block';
    }
});