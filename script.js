// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Toggle between light and dark mode
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });

    // Set default mode
    document.body.classList.add('light-mode');
});
