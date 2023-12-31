const reelModal = document.getElementById('reelModal');
const enlargedReel = document.getElementById('enlargedReel');
const closeBtn = document.querySelector('.close');
const realBubbles = document.querySelectorAll('.real_bubble');

realBubbles.forEach((bubble, index) => {
    bubble.addEventListener('click', () => {
        // Set the source of the enlargedReel to the clicked reel
        enlargedReel.src = bubble.querySelector('img').src;

        // Show the modal
        reelModal.style.display = 'flex';
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    reelModal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === reelModal) {
        reelModal.style.display = 'none';
    }
});
