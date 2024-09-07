// JavaScript to add the 'show' class when element is in the viewport
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in-element');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function showElementsInViewport() {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', showElementsInViewport);
    showElementsInViewport(); // Run on page load as well

});


// Function to show the birthday message
function showBirthdayMessage() {
    const overlay = document.getElementById('birthday-overlay');
    overlay.style.display = 'flex'; // Show the overlay
    overlay.classList.remove('hidden'); // Show the overlay by removing the hidden class
    overlay.classList.add('fade-out'); // Add fade-out class to trigger fading out


    // Hide the overlay after 3 seconds
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 4000); // 3000 milliseconds = 3 seconds
}

// Function to check the date and display the birthday message if it's Sneha's birthday
function checkBirthday() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 8, 13); // Change to the actual birthday date (Month is zero-indexed, so 8 = September)

    if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
        showBirthdayMessage();
        addConfetti(); // Function to start confetti effect
    }
}

// Function to add confetti (simple example, you can use a library for more advanced effects)
function addConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.innerHTML = ''; // Clear existing confetti if any

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.appendChild(confettiPiece);
    }
}

// Initialize birthday check
window.onload = checkBirthday;

document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

