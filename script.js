// Modal Logic
function showDetails(tier) {
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    if (tier === 'FREE') {
        title.textContent = 'FREE Plan Details';
        description.textContent = 'The FREE plan offers basic features to get you started with 5 quizzes and 12 lectures.';
    } else if (tier === 'PREMIUM') {
        title.textContent = 'PREMIUM Plan Details';
        description.textContent = 'The PREMIUM plan includes a comprehensive learning experience with quizzes, videos, resources, and certifications.';
    }

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('details-modal');
    if (event.target === modal) {
        closeModal();
    }
});
