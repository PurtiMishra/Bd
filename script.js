// Event listener for the "Click for a surprise!" button
document.getElementById('surprise-btn').addEventListener('click', function () {
    // Show the GIF overlay
    const gifOverlay = document.getElementById('gif-overlay');
    gifOverlay.style.display = 'flex';

    // Hide the GIF after 3 seconds and redirect to the About page
    setTimeout(function () {
        gifOverlay.style.display = 'none';
        window.location.href = 'about.html'; // Navigate to About page
    }, 3000); // 3000 milliseconds = 3 seconds
});
